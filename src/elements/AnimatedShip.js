import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../App.css';

function AnimatedImage() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when it enters the viewport.
  });

  return (
    <div
      ref={ref}
      className={`animated-image hover:@apply wave  ${inView ? 'animate-wave' : ''}`}
    >
      <img
        src="/assets/submarine.svg"
        alt="Hero Image"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export default AnimatedImage;
