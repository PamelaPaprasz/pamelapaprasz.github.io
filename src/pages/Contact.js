import React, { useState, useEffect } from 'react';
import '../App.css';
import PageContainer from '../elements/PageContainer';

function Contact() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768); // Adjust the value as needed
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`bg-left-top bg-contain bg-right h-screen hero-bg bg-no-repeat ${isMobileScreen? 'bg-none': ''}`}>
    <PageContainer>
      <p className="text-left text-7xl mt-20 font-bold leading-[8.5rem]">
        <a href="mailto:your.email@example.com" className="text-blue-500">email</a>
        {' '}me or say hello
        <br/>
      </p>
      <p className="text-left text-7xl mb-4 font-bold leading-[8.5rem]">
         on{' '}
        <a
          href="https://www.linkedin.com/in/paprasz" // Update with your LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          LinkedIn
        </a>
      </p>
      <br/>
      <br/>
      <p className="text-left text-7xl mb-4 font-bold leading-[8.5rem]">
        also sneak a peek on my{' '}
        <br/>
        <a
          href="/assets/cv.pdf" // Update the path to your CV
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          CV
        </a>{' '}and{' '}
        <a
          href="https://github.com/pamelapaprasz" // Update with your GitHub profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          GitHub
        </a>
      </p>
    </PageContainer>
    </div>
  );
}

export default Contact;

