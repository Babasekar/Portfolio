import React from 'react';
import { PROJECTS_INTERNSHIPS } from '../constants';
import SectionWrapper from './SectionWrapper';

const ProjectsInternships = () => {
  return (
    <SectionWrapper id="projects" title="Projects & Internships">
      <div className="space-y-10">
        {PROJECTS_INTERNSHIPS.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {item.title}
              {item.type === 'internship' && item.duration && (
                <span className="text-base font-normal text-gray-500 ml-4">({item.duration})</span>
              )}
            </h3>
            {Array.isArray(item.description) ? (
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                {item.description.map((bullet, i) => (
                  <li key={i} className="leading-relaxed">{bullet}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
            )}
            {item.links && item.links.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-4">
                {item.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors duration-300 text-sm font-medium"
                  >
                    <i className="fa-solid fa-external-link-alt mr-2"></i>
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsInternships;