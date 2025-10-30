import React from 'react';
import { ABOUT_ME } from '../constants';
import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about" title={ABOUT_ME.title}>
      <div className="bg-white p-8 rounded-lg shadow-xl text-lg leading-relaxed border border-gray-200 hover:border-gray-300 transition-colors duration-300">
        <p style={{ color: 'rgb(128,128,128)' }}>{ABOUT_ME.content}</p>
      </div>
    </SectionWrapper>
  );
};

export default About;