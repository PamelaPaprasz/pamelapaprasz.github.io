import React from 'react';
import PageContainer from '../elements/PageContainer';

function Contact() {
  return (
    <PageContainer>
      <p className="text-gray-600 mb-6">
        drop me a line{' '}
        <a href="mailto:your.email@example.com" className="text-blue-500">your.email@example.com</a>
      </p>
      <p className="mb-4">
        or just check out my{' '}
        <a
          href="/assets/cv.pdf" // Update the path to your CV
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          CV
        </a>
      </p>

      <p className="mb-4">
        but you can also catch me on:
        <br />
        <a
          href="https://www.linkedin.com/in/paprasz" // Update with your LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          LinkedIn
        </a>
        <br />
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
  );
}

export default Contact;

