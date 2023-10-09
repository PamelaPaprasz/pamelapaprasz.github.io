import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.id}`} className="block mb-4 p-4">
      <div className="relative h-[450px] bg-superLightBeige rounded-lg shadow-md overflow-hidden">
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
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-6 bg-gradient-to-t from-superLightBeige via-transparent to-transparent" style={{
            backgroundImage: 'linear-gradient(to top, #FEFCFA, 50%, transparent)',
          }}>
              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-gray-700 ml-0 md:ml-8 mb-3">{project.title}</h2>
              <hr className={`md:ml-8 w-1/2 md:w-2/5 h-0.5 bg-superLightBeige mb-4 ${project.arrowColor === "light" ? "bg-superLightBeige " : "bg-lightGrey"}`} /> {/* Separator Line */}
              
              {/* Description */}
              <p className="text-gray-700 text-lg md:text-xl ml-0 md:ml-8 mb-0 md:mb-4">{project.description}</p>
              {/* Learn More Link */}
            
              <Link
                to={`/work/${project.id}`}
                className={`absolute shadow-md top-6 md:top-12 right-6 md:right-12 text-md md:text-4xl font-bold ${project.arrowColor === "light" ? "text-superLightBeige border-superLightBeige" : "text-lightGrey border-lightGrey"}  border-2 md:border-4  border-solid rounded-lg`}
              >
                <IoIosArrowForward className="m-2" />
              </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;


