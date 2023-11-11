import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../App.css';

function AnimatedImage() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when it enters the viewport.
  });

  return (
    <div className='group'>
    <div
      ref={ref}
      className={`animated-image hover:animate-downAndUp  ${inView ? 'animate-wave' : ''}`}
    >
      <img
        src="/assets/rocket-launch.svg"
        alt="Hero Image"
        className="w-full h-full object-contain"
      />
    </div>
    </div>
  );
}

export default AnimatedImage;
