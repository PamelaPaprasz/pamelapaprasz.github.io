import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.id}`} className="block mb-4 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform transition duration-300 hover:scale-105">

        {/* Title */}
        <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
        {/* Description */}
        <p className="text-gray-600 mb-4">{project.description}</p>
        {/* Media */}
        <div className="relative mb-4">
          {/* Image, GIF, or Video */}
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="object-cover rounded-lg"
            />
          </div>
          {/* Play icon for videos */}
          {project.isVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white opacity-75 hover:opacity-100"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M14.726 10.28a.502.502 0 0 0-.392-.28l-9.6-1.68a.5.5 0 0 0-.513.186A.502.502 0 0 0 4 9.77v4.46a.5.5 0 0 0 .222.416.498.498 0 0 0 .64-.067l9.6-6.88a.5.5 0 0 0 0-.84z"
                />
              </svg>
            </div>
          )}
        </div>
        {/* Learn More Link */}
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



