import React from 'react';

function PageContainer({ children }) {
  return (
    <div className="container mx-auto p-4">
      {children}
    </div>
  );
}

export default PageContainer;
