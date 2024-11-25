import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-8 z-50 shadow-lg">
      <ul className="flex justify-around">
        <li><a href="#hero" className="hover:text-coral">Accueil</a></li>
        <li><a href="#about" className="hover:text-coral">À propos</a></li>
        <li><a href="#services" className="hover:text-coral">Services</a></li>
        <li><a href="#projects" className="hover:text-coral">Réalisations</a></li>
        <li><a href="#contact" className="hover:text-coral">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
