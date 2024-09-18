// src/components/Form.js
import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const [name, setName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = uuidv4();

    try {
      const response = await axios.post('https://jihunchja.com/save-data', { id, name });
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('Error saving data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <button type="submit">Submit</button>
      <p>{responseMessage}</p>
    </form>
  );
};

export default Form;
