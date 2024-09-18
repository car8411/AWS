// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // 올바른 경로
import Footer from './components/Footer'; // 올바른 경로
import HomePage from './pages/HomePage'; // 올바른 경로
import AboutPage from './pages/AboutPage'; // 올바른 경로
import ContactPage from './pages/ContactPage'; // 올바른 경로
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
