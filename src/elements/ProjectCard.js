import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.id}`} className="block mb-4 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform transition duration-300 hover:scale-105">
        <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Link
          to={`/work/${project.id}`}
          className="text-blue-500 font-semibold hover:underline"
        >
          Learn More
        </Link>
      </div>
    </Link>
  );
}

export default ProjectCard;

