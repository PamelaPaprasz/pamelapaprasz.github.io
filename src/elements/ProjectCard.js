import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-md shadow-md p-4 cursor-pointer">
      <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <Link to={`/work/${project.id}`} className="text-blue-500 font-semibold hover:underline">
        Learn More
      </Link>
    </div>
  );
}

export default ProjectCard;
