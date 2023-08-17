// import React from 'react';
// import '../App.css';

// function HeroSection() {

//   return (
//     <div className="my-6 md:my-24 inset-0 flex justify-center items-center">
//       <div className="p-2 md:p-8">
//         <p className="text-lg md:text-2xl mb-2 md:mb-4">Hey there,</p>
//         <h1 className="text-4xl md:text-8xl font-bold mb-6 md:mb-12">I'm Pamela Paprasz</h1>
//         <p className="text-xl md:text-4xl mb-4">crafting awesome apps and tools for folks like you.</p>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

import React from 'react';
import '../App.css';

function HeroSection() {
  return (
    <div className="inset-0 flex justify-center items-center">
      <div className="md:flex md:items-center">
        <div className="md:w-2/3">
          <p className="text-xs md:text-sm leading-loose  mb-4 uppercase">
            <span className="border border-extraDarkBeige text-extraDarkBeige mr-4 px-1 py-0.5 rounded-md">Pamela Paprasz</span>
            <span className="border border-extraDarkBeige text-extraDarkBeige mr-4 px-1 py-0.5 rounded-md">Vienna</span>
            <span className="border border-extraDarkBeige text-extraDarkBeige mr-4 px-1 py-0.5 rounded-md">Frontend Development</span>
            <span className="border border-extraDarkBeige text-extraDarkBeige px-1 py-0.5 rounded-md">UX Design</span>
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-12 leading-10">Turning ideas into reality.</h1>
          <hr className="md:w-80 h-0.5 bg-darkBeige mb-6 md:mb-12" /> {/* Separator Line */}
          <p className="text-xl md:text-3xl lg:text-4xl mb-4 italic">Pamela Paprasz, Vienna based, crafting awesome apps and tools for folks like you.</p>
        </div>
        <div className="absolute right-8 bottom-36 lg:bottom-8 hidden md:block float-right w-1/4 ml-0 md:ml-12 md:w-1/3 mt-4 md:mt-10">
          <img
            src="/assets/submarine.svg"
            alt="Hero Image"
            className="w-full h-full object-contain "
          />
        </div>


      </div>
    </div>

  );
}

export default HeroSection;


// ${isMobileScreen ? 'bg-none' : ''}

