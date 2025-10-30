import React from 'react';
import { CERTIFICATIONS } from '../constants';
import SectionWrapper from './SectionWrapper';

const Certifications = () => {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <ul className="space-y-4">
          {CERTIFICATIONS.map((cert, index) => (
            <li key={index} className="text-lg text-gray-700 flex items-start group">
              <i className="fa-solid fa-award text-gray-700 mr-3 mt-1 group-hover:rotate-6 transition-transform duration-300"></i>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 underline-offset-4 decoration-2 decoration-gray-300 hover:underline transition-all duration-300"
              >
                {cert.name}
                <span className="ml-2 text-sm text-gray-500 group-hover:text-gray-600"><i className="fa-solid fa-external-link-alt"></i></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;