import React from 'react';
import { PERSONAL_INFO } from '../constants';
import SectionWrapper from './SectionWrapper';

const Hero = () => {
  return (
    <SectionWrapper id="home" title={null}> {/* No title for the hero section, but it uses the wrapper for padding */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-20 md:pt-0 gap-10 md:gap-20">
        <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-105">
          <img
            src={PERSONAL_INFO.image}
            alt={`${PERSONAL_INFO.name} Profile`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
            Hello, I'm <span className="text-gray-900">{PERSONAL_INFO.name.split(' ')[0]}</span> {PERSONAL_INFO.name.split(' ')[1]}
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'rgb(128,128,128)' }}>
            {PERSONAL_INFO.objective}
          </p>
          <div className="flex justify-center md:justify-start space-x-6 text-3xl md:text-4xl">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transform hover:scale-110 transition-transform duration-300"
              aria-label="Phone"
            >
              <i className="fa-solid fa-phone"></i>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transform hover:scale-110 transition-transform duration-300"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transform hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;