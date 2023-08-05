import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/fun" className="navbar-link">Fun</Link>
      <Link to="/about" className="navbar-link">About</Link>
      <Link to="/work" className="navbar-link">Work</Link>
    </nav>
  );
}

export default Navbar;
