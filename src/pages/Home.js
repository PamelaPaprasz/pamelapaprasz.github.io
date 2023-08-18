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
        <div className="absolute inset-0 bg-lightBlue bg-opacity-1 z-0 mx-auto" />
        <PageContainer>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-6 z-10 relative text-superLightBeige mt-0 md:mt-[-96px]">Projects</h1>
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
