import React, { useState, useEffect } from 'react';

function Modal({ content, onClose }) {

    const [zoomIn, setZoomIn] = useState(false); 
    const handleZoomIn = () => {
        setZoomIn(prevZoomIn => !prevZoomIn);
    };

    return (
        <div onClick={handleZoomIn} className="fixed inset-0 z-50 overflow-auto">
            <div className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className={`inline-block align-bottom bg-white rounded-lg text-left shadow-xl sm:my-8 sm:align-middle sm:w-full transform transition-transform ${zoomIn ? 'scale-125' : ''}`}>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <div dangerouslySetInnerHTML={{ __html: content }} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            onClick={onClose}
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


function SectionContent({ section }) {

    const renderHTML = (htmlContent) => {
        return { __html: htmlContent };
    };

    const { subSections = [], content } = section;

    const [modalContent, setModalContent] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setModalContent('');
        setIsModalOpen(false);
    };

    useEffect(() => {
        // Toggle the "disable-scroll" class on the body element
        if (isModalOpen) {
          document.body.classList.add('disable-scroll');
        } else {
          document.body.classList.remove('disable-scroll');
        }
    
        // Cleanup by removing the class when the component unmounts
        return () => {
          document.body.classList.remove('disable-scroll');
        };
      }, [isModalOpen]);

    const renderSubSections = (subSections) => {
        if (!subSections || subSections.length === 0) {
            return null;
        }

        return (
            <div className="mt-4">
                {subSections.map((subSection) => (
                    <div key={subSection.id}>
                        <h3 className="text-2xl font-semibold mb-2">
                            {subSection.title}

                        </h3>
                        {subSection.showInMenu && (
                            // Render the content only if the section should be shown in the menu 
                            <div>
                                <div dangerouslySetInnerHTML={renderHTML(subSection.title)} />
                            </div>
                        )}
                        {/* {renderImages(subSection.imageUrls)} */}
                        <div className="cursor-zoom-in" key={subSection.id} onClick={() => subSection.expandToFullScreen && openModal(subSection.content)} dangerouslySetInnerHTML={renderHTML(subSection.content)} />
                        {/* {subSection.expandToFullScreen && (
                                <span
                                    className="cursor-pointer text-blue-500 ml-2"
                                    onClick={() => openModal(subSection.content)}
                                >
                                    Expand
                                </span>
                            )} */}
                        {/* Render content in modal if it's open */}
                        {isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <div dangerouslySetInnerHTML={renderHTML(content)} />
            {renderSubSections(subSections)}
        </div>
    );
}

export default SectionContent;
