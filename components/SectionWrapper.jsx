import React from 'react';

const SectionWrapper = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {title && (
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 relative pb-4">
          {title}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-300 rounded-full"></span>
        </h2>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;