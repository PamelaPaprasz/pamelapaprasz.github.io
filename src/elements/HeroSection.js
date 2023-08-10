import React from 'react';
import '../App.css';

function HeroSection() {
    
    return (
          <div className="mt-24 inset-0 bg-white bg-opacity-80 flex justify-center items-center">
            <div className=" p-8 rounded-lg flex justify-top flex-col">
            <p className="text-2xl mb-4">Hey there,</p>
              <h1 className="text-9xl font-bold mb-12">I'm Pamela</h1>
              <p className="text-4xl mb-4">crafting awesome apps and tools for folks like you.</p>
            </div>
          </div>
      );
}

export default HeroSection;
