import React from 'react';
import '../App.css';

function HeroSection() {
    
    return (
          <div className="mt-6 md:mt-24 inset-0 bg-white bg-opacity-80 flex justify-center items-center">
            <div className=" p-2 md:p-8 rounded-lg flex justify-top flex-col">
            <p className="text-lg md:text-2xl mb-2 md:mb-4">Hey there,</p>
              <h1 className="text-4xl md:text-9xl font-bold mb-6 md:mb-12">I'm Pamela</h1>
              <p className="text-xl md:text-4xl mb-4">crafting awesome apps and tools for folks like you.</p>
            </div>
          </div>
      );
}

export default HeroSection;
