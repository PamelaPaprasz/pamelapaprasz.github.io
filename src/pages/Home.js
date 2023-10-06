import React from 'react';
import '../App.css';
import PageContainer from '../elements/PageContainer';
import WaveSection from '../elements/WaveSection';
import HeroSection from '../elements/HeroSection';
import ProjectCard from '../elements/ProjectCard';
import { projects } from '../data/projectsData';

function Home() {

  return (
    <>
      <PageContainer>
        <div className="mt-20 md:mt-24">
          <HeroSection />
        </div>
      </PageContainer>
      <WaveSection />
      <div className='relative'>
        <div style={{
          backgroundImage: 'linear-gradient(to bottom, #0099ff, 10%, transparent)',
          }} className="absolute inset-0  bg-gradient-to-b from-lightBlue via-transparent to-transparent"></div>

        <PageContainer>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-8 md:mb-16 z-10 relative text-superLightBeige mt-0 md:mt-[-32px]">Projects</h1>
          <div className="grid grid-cols-1">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </PageContainer>
      </div>

    </>


  );
}

export default Home;
