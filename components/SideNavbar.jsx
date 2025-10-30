import React from 'react';
import { NAV_LINKS } from '../constants';

const SideNavbar = ({ isOpen, toggleSideNav }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-3/4 md:hidden bg-white shadow-xl z-50 transform transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-6">
        <button
          onClick={toggleSideNav}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-2xl focus:outline-none"
          aria-label="Close navigation"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="mt-16 flex flex-col space-y-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={toggleSideNav}
              className="text-gray-700 hover:text-gray-900 text-xl font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;