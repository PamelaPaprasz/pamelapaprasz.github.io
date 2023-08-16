import React, { useState, useEffect } from 'react';
import PageContainer from '../elements/PageContainer';

function Fun() {
  // Generate dummy design data with different dimensions
  const initialDesignData = [
    { id: 1, imageUrl: '/path/to/design1.jpg', width: 2, height: 2 },
    { id: 2, imageUrl: '/path/to/design2.jpg', width: 1, height: 1 },
    { id: 3, imageUrl: '/path/to/design3.jpg', width: 1, height: 2 },
    { id: 4, imageUrl: '/path/to/design4.jpg', width: 2, height: 1 },
    // Add more design items with different dimensions
  ];

  const [designData, setDesignData] = useState([]);

  useEffect(() => {
    // Shuffle the design data array randomly
    const shuffledData = initialDesignData.sort(() => Math.random() - 0.5);
    setDesignData(shuffledData);
  }, []);

  return (
    <PageContainer>
      <div className='mt-20'>
        <h1 className='text-3xl font-semibold mb-4'>Fun Page</h1>
        <p>Welcome to the what I have learnt section.</p>

        {/* Design Tiles */}
        <div className='grid grid-cols-3 gap-4 mt-8'>
          {designData.map((design) => (
            <div
              key={design.id}
              className={`bg-gray-200 rounded-lg shadow-md p-4 flex items-center justify-center col-span-${design.width} row-span-${design.height}`}
            >
              <img
                src={design.imageUrl}
                alt={`Design ${design.id}`}
                className='max-w-full max-h-full'
              />
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default Fun;
