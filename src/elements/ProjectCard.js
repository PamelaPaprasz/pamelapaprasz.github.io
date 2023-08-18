import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.id}`} className="block mb-4 p-4">
      <div className="relative h-[450px] bg-white rounded-lg shadow-md overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${project.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: `${project.backgroundImagePosition}`,
            height: '100%',
            width: '100%',
            transition: 'transform 0.5s ease-in-out',
          }}
          className="transform scale-100 hover:scale-105"
        >
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-superLightBeige via-transparent to-transparent">
        {/* Title */}
        <h2 className="text-3xl md:text-6xl font-semibold text-extraDarkBeige ml-8 mb-3">{project.title}</h2>
        {/* Description */}
        <p className="text-extraDarkBeige text-xl md:text-2xl ml-8">{project.description}</p>
        {/* Learn More Link */}
        <Link
          to={`/work/${project.id}`}
          className="absolute bottom-6 right-10 px-6 py-3 text-superLightBeige bg-lightBlue rounded-md font-semibold hover:bg-transparent hover:text-lightBlue transition duration-300"
        >
        >
          Learn More
        </Link>
      </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;

