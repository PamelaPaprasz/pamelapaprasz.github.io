import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
    
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleNav = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <nav className={`bg-ferrariRed text-champagneBeige shadow-lg fixed w-full z-50 transition-transform transform ${isSticky ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-semibold" onClick={closeNav}>
        <img
            src="/assets/logo.png"
            alt="Pamela Paprasz Logo"
            className="w-10 h-10 mr-2 transition-transform transform hover:scale-110"
          />
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleNav}
            className="text-evenMorePaleBeige focus:outline-none"
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
            className={`block mt-4 md:inline-block md:mt-0 md:mr-6 ${
              location.pathname === '/work' ? 'font-bold text-evenMorePaleBeige' : 'hover:font-bold hover:text-evenMorePaleBeige'
            }`}
            onClick={closeNav}
          >
            work
          </Link>
          <Link
            to="/fun"
            className={`block mt-4 md:inline-block md:mt-0 md:mr-6 ${
              location.pathname === '/fun' ? 'font-bold text-evenMorePaleBeige' : 'hover:font-bold hover:text-evenMorePaleBeige'
            }`}
            onClick={closeNav}
          >
            fun
          </Link>
          <Link
            to="/contact"
            className={`block mt-4 md:inline-block md:mt-0 ${
              location.pathname === '/contact' ? 'font-bold text-evenMorePaleBeige' : 'hover:font-bold hover:text-evenMorePaleBeige'
            }`}
            onClick={closeNav}
          >
            contact
          </Link>
        </div>
      </div>
      {/* {open && ( */}
        <div
        className={`md:hidden bg-ferrariRed text-champagneBeige mobile-menu ${
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
            className={`block mt-4 ${
              location.pathname === '/work' ? 'font-bold text-evenMorePaleBeige' : 'hover:font-bold hover:text-evenMorePaleBeige'
            }`}
            onClick={closeNav}
          >
            work
          </Link>
          <Link
            to="/fun"
            className={`block mt-4 ${
              location.pathname === '/fun' ? 'font-bold text-evenMorePaleBeige' : 'hover:font-bold hover:text-evenMorePaleBeige'
            }`}
            onClick={closeNav}
          >
            fun
          </Link>
          <Link
            to="/contact"
            className={`block mt-4 ${
              location.pathname === '/contact' ? 'font-bold text-evenMorePaleBeige' : 'hover:font-bold hover:text-evenMorePaleBeige'
            }`}
            onClick={closeNav}
          >
            contact
          </Link>
        </div>
      {/* )} */}
    </nav>
  );
}

export default Navbar;
