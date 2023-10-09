import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (currentScrollPos <= 300) {
      setIsHidden(false); // Show navigation when at the top of the page + 300px
    } else if (currentScrollPos < prevScrollPos || currentScrollPos + windowHeight >= documentHeight) {
      setIsHidden(false); // Show navigation when scrolling up
    } else {
      setIsHidden(true); // Hide navigation when scrolling down
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

  useEffect(() => {
    // Toggle the "disable-scroll" class on the body element
    if (open) {
      document.body.classList.add('disable-scroll');
    } else {
      document.body.classList.remove('disable-scroll');
    }

    // Cleanup by removing the class when the component unmounts
    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, [open]);

  return (
    <nav className={`bg-ferrariRed text-evenMorePaleBeige shadow-lg fixed w-full z-50 transition-transform transform ${!open && isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        <Link to="/" className="text-xl font-semibold" onClick={closeNav}>
          <img
            src="/assets/submarine.svg"
            alt="Pamela Paprasz Logo"
            className="w-10 h-10 mr-2 transition-transform transform hover:scale-110 drop-shadow(0 2px 2px rgba(0, 0, 0, 0.4)) scale-x-[-1]"
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
        <div className={`md:flex md:justify-end top-16 right-4 left-0 w-64 bg-ferrariRed ${open ? 'absolute flex flex-col h-screen w-screen overflow-hidden z-50 mobile-menu animate-growDown transform-origin-top center' : 'hidden'}`}>
          <Link
            to="/work"
            className={`block mt-6 md:mt-0 md:mr-6 md:ml-0 ml-4 text-base md:text-lg lg:text-xl ${location.pathname === '/work' ? 'font-bold text-evenMorePaleBeige underline' : 'hover:font-bold hover:text-evenMorePaleBeige'
              }`}
            onClick={closeNav}
          >
            work
          </Link>
          {/* <Link
            to="/fun"
            className={`block mt-4 md:mt-0 md:mr-6 md:ml-0 ml-4 text-base md:text-lg lg:text-xl ${location.pathname === '/fun' ? 'font-bold text-evenMorePaleBeige underline' : 'hover:font-bold hover:text-evenMorePaleBeige'
              }`}
            onClick={closeNav}
          >
            fun
          </Link> */}
          <Link
            to="/contact"
            className={`block mt-6 md:mt-0 md:ml-0 ml-4 text-base md:text-lg lg:text-xl ${location.pathname === '/contact' ? 'font-bold text-evenMorePaleBeige underline' : 'hover:font-bold hover:text-evenMorePaleBeige'
              }`}
            onClick={closeNav}
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
