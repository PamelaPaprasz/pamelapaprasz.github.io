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
      <div className='mt-20'>
      <p className="text-extraDarkBeige text-left text-2xl md:text-7xl mt-8 md:mt-20 font-bold leading-[2.5rem] md:leading-[8.5rem]">
        <a href="mailto:your.email@example.com" className="text-evenMorePaleBeige hover:text-extraDarkBeige"
          style={{
            textShadow: '-1px -1px 0 #3E3526, 1px -1px 0 #3E3526, -1px 1px 0 #3E3526, 1px 1px 0 #3E3526',
          }}
          >email</a>
        {' '}me or say hello
        <br/>
      </p>
      <p className="text-extraDarkBeige text-left text-2xl md:text-7xl mb-2 md:mb-4 font-bold leading-[2.5rem] md:leading-[8.5rem]">
         on{' '}
        <a
          href="https://www.linkedin.com/in/paprasz" // Update with your LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          // className="bg-ferrariRed text-champagneBeige hover:text-superLightBeige"
          className="text-evenMorePaleBeige hover:text-ferrariRed"
          style={{
            textShadow: '-1px -1px 0 #FF2800, 1px -1px 0 #FF2800, -1px 1px 0 #FF2800, 1px 1px 0 #FF2800',
          }}
        >
          LinkedIn
        </a>
      </p>
      <br/>
      <br/>
      <p className="text-extraDarkBeige text-left text-2xl md:text-7xl mb-2 md:mb-4 font-bold leading-[2.5rem] md:leading-[8.5rem]">
        also sneak a peek on my{' '}
        <br/>
        <a
          href="/assets/cv.pdf" // Update the path to your CV
          target="_blank"
          rel="noopener noreferrer"
          // className="text-evenMorePaleBeige hover:text-ferrariRed"
          className="text-evenMorePaleBeige hover:text-ferrariRed"
          style={{
            textShadow: '-1px -1px 0 #FF2800, 1px -1px 0 #FF2800, -1px 1px 0 #FF2800, 1px 1px 0 #FF2800',
          }}
        >
          CV
        </a>{' '}and{' '}
        <a
          href="https://github.com/pamelapaprasz" // Update with your GitHub profile URL
          target="_blank"
          rel="noopener noreferrer"
          // className="bg-ferrariRed text-champagneBeige hover:text-superLightBeige"
          className="text-evenMorePaleBeige hover:text-extraDarkBeige"
          style={{
            textShadow: '-1px -1px 0 #3E3526, 1px -1px 0 #3E3526, -1px 1px 0 #3E3526, 1px 1px 0 #3E3526',
          }}
          
        >
          GitHub
        </a>
      </p>
      </div>
    </PageContainer>
    </div>
  );
}

export default Contact;

