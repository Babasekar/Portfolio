import React from 'react';
import { PERSONAL_INFO } from '../constants';
import SectionWrapper from './SectionWrapper';

const Contact = () => {
  return (
    <SectionWrapper id="contact" title="Contact Me">
      <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 text-lg space-y-4">
        <p className="flex items-center text-gray-700">
          <i className="fa-solid fa-phone text-gray-700 mr-4 text-xl"></i>
          Phone: <a href={`tel:${PERSONAL_INFO.phone}`} className="ml-2 hover:text-gray-900 transition-colors duration-300">{PERSONAL_INFO.phone}</a>
        </p>
        <p className="flex items-center text-gray-700">
          <i className="fa-solid fa-envelope text-gray-700 mr-4 text-xl"></i>
          E-mail: <a href={`mailto:${PERSONAL_INFO.email}`} className="ml-2 hover:text-gray-900 transition-colors duration-300">{PERSONAL_INFO.email}</a>
        </p>
        <p className="flex items-center text-gray-700">
          <i className="fa-brands fa-linkedin text-gray-700 mr-4 text-xl"></i>
          LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-gray-900 transition-colors duration-300">linkedin.com/in/baba-sekar-159068262</a>
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Contact;