import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // UUID 생성 라이브러리 추가
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = uuidv4(); // 고유한 ID 생성

    try {
      const response = await axios.post('https://jihunchja.com/save-data', { id, name });
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('Error saving data');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
          <button type="submit">Submit</button>
        </form>
        <p>{responseMessage}</p>
      </header>
    </div>
  );
}

export default App;