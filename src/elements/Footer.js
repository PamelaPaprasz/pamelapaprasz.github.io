import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="container mx-auto bg-transparent text-gray-500 p-4 flex justify-between w-full bottom-0">
      <div className="text-left w-full"> {/* Add a container to center-align the content */}
        © 2023 Pamela Paprasz. All rights reserved.
      </div>
      <div className="w-full mx-auto flex justify-end items-right">
        <a href="mailto:your.email@example.com" className="mr-4">
          <AiOutlineMail size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/paprasz" // Update with your LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <AiFillLinkedin size={24} />
        </a>
        <a
          href="https://github.com/pamelapaprasz" // Update with your GitHub profile URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

