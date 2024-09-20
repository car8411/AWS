// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/locations/paris">Paris</Link></li>
        <li><Link to="/locations/new-york">New York</Link></li>
        <li><Link to="/locations/tokyo">Tokyo</Link></li>
        <li><Link to="/locations/sydney">Sydney</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
