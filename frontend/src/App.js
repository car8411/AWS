// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // 올바른 경로
import Footer from './components/Footer'; // 올바른 경로 // 경로가 정확한지 확인
import AboutPage from './pages/AboutPages'; // 올바른 경로
import ContactPage from './pages/ContactPages'; // 올바른 경로
import HomePage from './pages/HomePages';
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

/*why*/