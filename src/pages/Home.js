import React from 'react';
import PageContainer from '../elements/PageContainer';
import HeroSection from '../elements/HeroSection';

function Home() {
  return (
    <div>
      <HeroSection />
    <PageContainer>
      <p>Welcome to the Home page.</p>
    </PageContainer>
    </div>
  );
}

export default Home;
