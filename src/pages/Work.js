import React from 'react';
import PageContainer from '../elements/PageContainer';
import ProjectCard from '../elements/ProjectCard';
import { projects } from '../data/projectsData';

function Work() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-semibold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageContainer>
  );
}

export default Work;
