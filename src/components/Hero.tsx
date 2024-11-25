import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-400 text-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4">Bienvenue sur mon portfolio</h1>
        <p className="text-2xl font-light">Créons ensemble l'exception</p>
      </motion.div>
    </section>
  );
};

export default Hero;
