import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import PageContainer from '../elements/PageContainer';
import SectionContent from '../elements/SectionContent';
import { projects } from '../data/projectsData'; // Import your projects data here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Project() {

  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }

  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarTop, setSidebarTop] = useState(0);
  const [activeSection, setActiveSection] = useState(project.sections[0].id); // Initialize the active section to the first section

  // Create a ref to store section heights
  const sectionHeightsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById(project.sections[0].id);
      const lastSection = document.getElementById(project.sections[project.sections.length - 1].id);

      if (firstSection && lastSection) {
        setShowSidebar(window.scrollY >= firstSection.offsetTop - 100);
        setSidebarTop(firstSection.offsetTop);

        // Calculate the height of each section and store it in the ref
        project.sections.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            sectionHeightsRef.current[section.id] = element.getBoundingClientRect().height;
          }
        });

        // Check if the last section is in view
        const lastSectionRect = lastSection.getBoundingClientRect();
        if (lastSectionRect.top >= 0 && lastSectionRect.bottom <= window.innerHeight) {
          setActiveSection(project.sections[project.sections.length - 1].id);
          return; // Exit early to prevent other sections from being highlighted
        }

        // Calculate which section occupies the most space in the viewport
        let maxVisibleHeight = 0;
        let maxVisibleSection = project.sections[0].id;

        project.sections.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

            if (visibleHeight > maxVisibleHeight) {
              maxVisibleHeight = visibleHeight;
              maxVisibleSection = section.id;
            }
          }
        });

        // Set the active section based on the section that occupies the most space
        setActiveSection(maxVisibleSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it once on mount to initialize the active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [project.sections]);


  return (
    <PageContainer>
      <div className="flex flex-col md:flex-row mt-20">

        <nav className={`md:w-1/6 ${showSidebar ? 'animate-fadeIn' : 'animate-fadeOut'
          }`} >
          {showSidebar && (
            <ul className={`p-4 space-y-2 md:space-y-4 fixed top-0 hidden md:block`} style={{
              top: `68px`
            }}>
              {project.sections.map((section) => (
                section.showInMenu && (

                  <li
                    className={`${activeSection === section.id ? 'bg-lightBlue text-white font-semibold rounded-md' : 'rounded-md text-baseGrey'
                      }`}
                    key={section.id}
                  >
                    <a
                      href={`#${section.id}`}
                      className="block p-2 rounded-md hover:bg-lightBlue hover:bg-opacity-25 flex items-center"
                    >
                      {section.icon && (
                        <FontAwesomeIcon
                          icon={section.icon}
                          className=
                          {`${activeSection === section.id ? 'mr-2 text-white' : 'text-lightBlue mr-2'
                            }`}
                        />
                      )}
                      <span>{section.title}</span>
                    </a>
                  </li>
                )
              ))}
            </ul>
          )}

        </nav>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8">
          <div className="mb-12 flex items-center justify-start">
            <div className="flex items-center w-12 h-12 mb-2 mr-6 rounded-lg">
              <img
                src={project.logoUrl}
                alt="Logo"
                className="rounded-lg"
              />
            </div>
            <span className="text-lg font-semibold text-center">{project.title}</span>
          </div>
          <div className="mb-24">
            <p className="text-5xl leading-normal font-semibold text-mediumDarkGrey mb-10">{project.slogan}</p>
            <div className="flex justify-center items-center">
              <p className="text-3xl text-lightGrey">{project.description}</p>

            </div>
          </div>
          {/* Sections */}
          {project.sections.map((section) => (
            <div key={section.id} id={section.id} className="mb-8">
              <h2 className=" text-lg md:text-2xl font-semibold uppercase text-darkGrey mb-2">{section.title}</h2>
              <SectionContent section={section} />
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default Project;
