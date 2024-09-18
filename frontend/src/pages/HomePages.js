// src/pages/HomePage.js
import React from 'react';
import Form from '../components/Form'; // 올바른 경로

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page! Please enter your name below.</p>
      <Form />
    </div>
  );
};

export default HomePage;
