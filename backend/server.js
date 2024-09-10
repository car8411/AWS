const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb'); // AWS SDK v3

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Initialize DynamoDB client (AWS SDK v3)
const client = new DynamoDBClient({ region: 'us-east-1' });

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
    console.error('Error saving dataddd:', error);
    res.status(500).json({ error: 'Could not save data' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});