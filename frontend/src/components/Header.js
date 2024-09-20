// src/components/Header.js
import { Link } from 'react-router-dom';
import './Header.css';  // CSS 파일을 가져옵니다.
import React, { useState } from 'react';


const Header = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };



  return (
    <header className="App-header">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li className="dropdown">
            <button onClick={handleDropdownToggle} className="dropdown-btn">
              Locations
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-content">
                <li><Link to="/locations/paris">Paris</Link></li>
                <li><Link to="/locations/new-york">New York</Link></li>
                <li><Link to="/locations/tokyo">Tokyo</Link></li>
                <li><Link to="/locations/sydney">Sydney</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
