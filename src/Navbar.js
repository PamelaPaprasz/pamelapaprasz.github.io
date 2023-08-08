import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-800 p-4 text-white">
      <Link to="/" className="text-white text-sm mr-4">Home</Link>
      <Link to="/fun" className="text-white text-sm mr-4">Fun</Link>
      <Link to="/about" className="text-white text-sm mr-4">About</Link>
      <Link to="/work" className="text-white text-sm">Work</Link>
    </nav>
  );
}

export default Navbar;
