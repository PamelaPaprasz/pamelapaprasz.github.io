import React from 'react';

function SectionContent({ section }) {

    const renderHTML = (htmlContent) => {
        return { __html: htmlContent };
    };

    const { subSections = [], content } = section;

    const renderSubSections = (subSections) => {
        if (!subSections || subSections.length === 0) {
            return null;
        }

        return (
            <div className="mt-4">
                {subSections.map((subSection) => (
                    <div key={subSection.id}>
                        <h3 className="text-2xl font-semibold mb-2">{subSection.title}</h3>
                        {subSection.showInMenu && (
                            // Render the content only if the section should be shown in the menu
                            <div>
                                <div dangerouslySetInnerHTML={renderHTML(subSection.title)} />
                            </div>
                        )}
                        {/* {renderImages(subSection.imageUrls)} */}
                        <div dangerouslySetInnerHTML={renderHTML(subSection.content)} />
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
