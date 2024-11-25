import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Mes Réalisations</h2>
        <p className="text-lg mb-4">
          Consultez mes projets sur mon <a href="https://github.com/yourusername" target="_blank" className="text-blue-600 underline">GitHub</a>.
        </p>
      </div>
    </section>
  );
};

export default Projects;
