// src/pages/HomePage.js
import React from 'react';
import Form from '../components/Form'; // Make sure this path is correct

const HomePage = () => {
  // API key
  const API_KEY = 'bad901f1cd2607e7f157075c025083589';

  // API call function
  const getCompanyInfo = async () => {
    try {
      const response = await fetch(`https://opendart.fss.or.kr/api/corpCode.json?crtfc_key=${API_KEY}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching company info:', error);
    }
  };

  // Call the function when the component is rendered
  React.useEffect(() => {
    getCompanyInfo();
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page! Please enter your name below.</p>
      <Form />
    </div>
  );
};

export default HomePage;

