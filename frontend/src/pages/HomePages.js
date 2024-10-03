import React from 'react';
import Form from '../components/Form'; // Make sure this path is correct

const HomePage = () => {
  // API call function to get company info via your backend server
  const getCompanyInfo = async () => {
    try {
      const response = await fetch('/api/company-info'); // Call to your server API
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
