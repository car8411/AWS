// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // CSS 파일을 가져옵니다.

const Header = () => {
  return (
    <header className="App-header">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/locations/:locationId">Upload</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
