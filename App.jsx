import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import ProjectsInternships from './components/ProjectsInternships';
import Contact from './components/Contact';

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar toggleSideNav={toggleSideNav} />
      <SideNavbar isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certifications />
        <ProjectsInternships />
        <Contact />
      </main>
      {/* Optional: A simple footer */}
      <footer className="bg-white text-gray-600 text-center py-6 mt-16 shadow-inner">
        <p>&copy; {new Date().getFullYear()} Baba Sekar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;