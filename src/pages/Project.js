import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import PageContainer from '../elements/PageContainer';
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

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById(project.sections[0].id);
      if (firstSection) {
        setShowSidebar(window.scrollY >= firstSection.offsetTop - 100);
        setSidebarTop(firstSection.offsetTop);

        // Find the section that is currently in view
        const sectionsInView = project.sections.filter((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
          }
          return false;
        });

        // Set the active section to the first section in view
        if (sectionsInView.length > 0) {
          setActiveSection(sectionsInView[0].id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [project.sections]);

  return (
    <PageContainer>
      <div className="flex flex-col md:flex-row mt-20">

        <nav className={`md:w-1/6 ${showSidebar ? 'fade-in' : 'fade-out'
          }`} >
          {showSidebar && (
            <ul className={`p-4 space-y-2 md:space-y-4 fixed top-0 hidden md:block`} style={{
              top: `${sidebarTop}px`
            }}>
              {project.sections.map((section) => (
                <li className={`${activeSection === section.id ? 'bg-blue-200' : ''}`} key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block p-2 hover:bg-blue-200 flex items-center"
                  >
                    <FontAwesomeIcon
                      icon={section.icon} // Use the icon associated with the section
                      className="mr-2 text-blue-500"
                    />
                    <span>{section.title}</span> {/* Place the text after the icon */}
                  </a>
                </li>
              ))}
            </ul>
          )}

        </nav>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8">
          <h1 className="text-3xl font-semibold mb-4">{project.title}</h1>
          <p className="text-gray-600 mb-6">{project.description}</p>
          {/* Sections */}
          {project.sections.map((section) => (
            <div key={section.id} id={section.id} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default Project;
