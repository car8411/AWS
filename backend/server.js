const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb'); // AWS SDK v3

const app = express();

// SSL 인증서 및 프라이빗 키 경로
const sslOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/jihunchja.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/jihunchja.com/fullchain.pem')
};

// Initialize DynamoDB client (AWS SDK v3)
const client = new DynamoDBClient({ region: 'us-east-1' });

// CORS 설정
app.use(cors({
  origin: '*',  // 실제 배포된 도메인으로 변경
}));

// BodyParser 설정
app.use(bodyParser.json());
app.use(express.static('public'));  // public 폴더에서 정적 파일 제공

// API Route to save data
app.post('/save-data', async (req, res) => {
  const { id, name } = req.body;

  const params = {
    TableName: 'mydb', // Replace with your DynamoDB table name
    Item: {
      id: { S: id },
      name: { S: name }
    }
  };

  try {
    const command = new PutItemCommand(params);
    await client.send(command);
    res.json({ message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Could not save data' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`HTTP Server running on port ${port}`);
});

/*const port = process.env.PORT || 3001;
https.createServer(sslOptions, app).listen(port, () => {
  console.log(`HTTPS Server running on port ${port}`);
});*/