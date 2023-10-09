import React from 'react';
import PageContainer from '../elements/PageContainer';
import ProjectCard from '../elements/ProjectCard';
import { projects } from '../data/projectsData';

function Work() {
  return (
    <PageContainer>
      <div className='mt-28'>
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-semibold mb-8 md:mb-10 lg:mb-12  mt-32">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default Work;
