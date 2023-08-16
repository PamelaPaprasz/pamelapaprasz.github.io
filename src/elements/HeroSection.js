import React from 'react';
import '../App.css';

function HeroSection() {

  return (
    <div className="my-6 md:my-24 inset-0 flex justify-center items-center">
      <div className="p-2 md:p-8">
        <p className="text-lg md:text-2xl mb-2 md:mb-4">Hey there,</p>
        <h1 className="text-4xl md:text-8xl font-bold mb-6 md:mb-12">I'm Pamela Paprasz</h1>
        <p className="text-xl md:text-4xl mb-4">crafting awesome apps and tools for folks like you.</p>
      </div>
    </div>
  );
}

export default HeroSection;
