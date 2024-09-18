import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'; // React Router import
import './App.css';

const HomePage = () => {
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
    <div>
      <h2>Home Page</h2>
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
    </div>
  );
};

const AboutPage = () => (
  <div>
    <h2>About Page</h2>
    <p>This is the about page where you can learn more about us.</p>
  </div>
);

const ContactPage = () => (
  <div>
    <h2>Contact Page</h2>
    <p>This is the contact page where you can reach us.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Homdddddde</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;