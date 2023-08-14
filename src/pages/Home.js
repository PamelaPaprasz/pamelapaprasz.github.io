import React from 'react';
import PageContainer from '../elements/PageContainer';
import HeroSection from '../elements/HeroSection';

function Home() {
  return (
    <PageContainer>
      <div className='mt-20'>
      <HeroSection />
      <p>Welcome to the Home page.</p>
    </div>
    </PageContainer>
  );
}

export default Home;
