import React from 'react';
import ProjectCard from '../elements/ProjectCard';
import { projects } from '../data/projectsData';

function Work() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">My Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Work;
