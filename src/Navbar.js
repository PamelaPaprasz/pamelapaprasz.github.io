import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleNav = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-semibold" onClick={closeNav}>
          Pamela Paprasz
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleNav}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex hidden`}>
          <Link
            to="/work"
            className={`block mt-4 md:inline-block md:mt-0 md:mr-6 hover:text-blue-400 ${
              location.pathname === '/work' ? 'text-blue-400' : ''
            }`}
            onClick={closeNav}
          >
            Work
          </Link>
          <Link
            to="/fun"
            className={`block mt-4 md:inline-block md:mt-0 md:mr-6 hover:text-blue-400 ${
              location.pathname === '/fun' ? 'text-blue-400' : ''
            }`}
            onClick={closeNav}
          >
            Fun
          </Link>
          <Link
            to="/contact"
            className={`block mt-4 md:inline-block md:mt-0 hover:text-blue-400 ${
              location.pathname === '/contact' ? 'text-blue-400' : ''
            }`}
            onClick={closeNav}
          >
            Contact
          </Link>
        </div>
      </div>
      {/* {open && ( */}
        <div
        className={`md:hidden bg-gray-900 text-white mobile-menu ${
          open ? 'open' : 'close'
        }`}
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            bottom: 0,
            width: '100%',
            padding: '20px',
            zIndex: 100, // Higher value to cover content
          }}
        >
          <Link
            to="/work"
            className={`block mt-4 hover:text-blue-400 ${
              location.pathname === '/work' ? 'text-blue-400' : ''
            }`}
            onClick={closeNav}
          >
            Work
          </Link>
          <Link
            to="/fun"
            className={`block mt-4 hover:text-blue-400 ${
              location.pathname === '/fun' ? 'text-blue-400' : ''
            }`}
            onClick={closeNav}
          >
            Fun
          </Link>
          <Link
            to="/contact"
            className={`block mt-4 hover:text-blue-400 ${
              location.pathname === '/contact' ? 'text-blue-400' : ''
            }`}
            onClick={closeNav}
          >
            Contact
          </Link>
        </div>
      {/* )} */}
    </nav>
  );
}

export default Navbar;
