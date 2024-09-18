import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://jihunchja.com/save-data', { id: '1', name });
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
          <button type="submit">Submiwwwwwwwwwwwwwwwt</button>
        </form>
        <h1>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</h1>
        <h2>sssssssss</h2>
        <h3>SSSSSSSSSSSSSSSSSSS</h3>
        <h4>ddddddddddddddd</h4>
        <p>{responseMessage}</p>        
      </header>
    </div>
  );
}

export default App;
