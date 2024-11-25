import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Développement Web', description: 'Sites modernes et performants' },
  { title: 'Design Graphique', description: 'Logos, maquettes, branding' },
  { title: 'Consulting', description: 'Accompagnement sur vos projets digitaux' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="p-6 border rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-coral mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
