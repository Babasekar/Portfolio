import React from 'react';
import { EDUCATION } from '../constants';
import SectionWrapper from './SectionWrapper';

const Education = () => {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EDUCATION.map((edu, index) => (
          <div
            key={index}
                className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.level}</h3>
                <p className="text-gray-700 text-lg mb-1">{edu.institution}</p>
            <p className="text-gray-400 text-md mb-3">{edu.cgpa || edu.percentage}</p>
            <div className="flex justify-between items-center text-gray-500 text-sm">
              <span><i className="fa-solid fa-location-dot mr-1"></i>{edu.location}</span>
              <span><i className="fa-solid fa-calendar-alt mr-1"></i>{edu.years}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;