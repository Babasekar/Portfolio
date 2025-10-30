import React from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';

const Navbar = ({ toggleSideNav }) => {
  return (
    <nav className="fixed w-full top-0 bg-white bg-opacity-90 z-50 shadow-lg p-4 flex justify-between items-center px-6 md:px-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
        <a href="#home" className="hover:text-gray-100 transition-colors duration-300">{PERSONAL_INFO.name.split(' ')[0]} <span style={{ color: 'rgb(128,128,128)' }}>{PERSONAL_INFO.name.split(' ')[1]}</span></a>
      </h1>
      <div className="hidden md:flex space-x-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-gray-700 hover:text-gray-900 text-lg font-medium transition-colors duration-300 relative group"
          >
            {link.name}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
      <button
        onClick={toggleSideNav}
        className="md:hidden text-gray-700 hover:text-gray-900 text-2xl focus:outline-none"
        aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;