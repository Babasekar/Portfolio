import React from 'react';
import { SKILLS } from '../constants';
import SectionWrapper from './SectionWrapper';

const SkillCategory = ({ title, skills, type = 'text' }) => (
  <div className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h3>
    <div className={`grid ${type === 'icon' ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
      {type === 'icon' ? (
        skills.map((skill, index) => (
          <div
            key={index}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:border-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain mb-3" />
              <span className="text-gray-700 text-md font-medium text-center">{skill.name}</span>
          </div>
        ))
      ) : (
        skills.map((skill, index) => (
          <div
            key={index}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:border-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-center"
          >
            {typeof skill === 'object' ? (
                <span className="text-gray-700 text-md font-medium">{skill.title}</span>
            ) : (
                <span className="text-gray-700 text-md font-medium">{skill}</span>
            )}
          </div>
        ))
      )}
    </div>
    {type === 'soft' && (
      <div className="mt-6 space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
            <h4 className="text-lg font-medium text-gray-900 mb-1">{skill.title}</h4>
            <p className="text-gray-700 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

const Skills = () => {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="space-y-12">
        <SkillCategory title="Programming & Development Skills" skills={SKILLS.programming} type="icon" />
        <SkillCategory title="Application & Design Tools" skills={SKILLS.applications} type="icon" />
        <SkillCategory title="Other Technical Skills & Tools" skills={SKILLS.other} />
        <SkillCategory title="Soft Skills" skills={SKILLS.soft} type="soft" />
        <SkillCategory title="Areas of Interest" skills={SKILLS.interests} />
      </div>
    </SectionWrapper>
  );
};

export default Skills;