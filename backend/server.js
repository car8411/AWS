const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb'); // AWS SDK v3
const fetch = require('node-fetch');

const app = express();

// Initialize DynamoDB client (AWS SDK v3)
const client = new DynamoDBClient({ region: 'us-east-1' });

// CORS 설정 (use origin with production domain in production)
app.use(cors({
  origin: '*',
}));

// BodyParser 설정
app.use(bodyParser.json());

// Multer 설정 (파일 업로드 경로와 파일 이름 설정)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // 파일명: 현재 시간 + 원래 파일 확장자
  }
});

const upload = multer({ storage: storage });


// API Route to fetch company info using OpenDART API
app.get('/api/company-info', async (req, res) => {
  const API_KEY = '6a0a970bad901f1cd2607e7f157075c025083589';
  try {
    const response = await fetch(`https://opendart.fss.or.kr/api/corpCode.xml?crtfc_key=${API_KEY}`);
    if (!response.ok) {
      return res.status(response.status).send('Error fetching company info');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching company info:', error);
    res.status(500).json({ error: 'Failed to fetch company info' });
  }
});


// 정적 파일 제공
app.use('/uploads', express.static('uploads'));

// 루트 경로에 대한 요청 처리
app.get('/api', (req, res) => {
  res.send('Welcome to the home page!');
});

// API Route to fetch company info using OpenDART API
app.get('/api/company-info', async (req, res) => {
  const API_KEY = 'bad901f1cd2607e7f157075c025083589';
  try {
    const response = await fetch(`https://opendart.fss.or.kr/api/corpCode.json?crtfc_key=${API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching company info:', error);
    res.status(500).json({ error: 'Failed to fetch company info' });
  }
});

// API Route to save data in DynamoDB
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

// API Route to handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // 클라이언트에게 업로드된 파일 경로 전달
    res.json({ message: 'File uploaded successfully!', filePath: `/uploads/${file.filename}` });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Could not upload file' });
  }
});

// HTTP로 서버 실행
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`HTTP Server running on port ${port}`);
});
