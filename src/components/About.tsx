import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">À propos de moi</h2>
        <p className="text-lg">
          Développeuse full stack passionnée, je combine technologie et créativité pour offrir des solutions modernes et efficaces.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
