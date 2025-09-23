import React from 'react';
import { motion } from 'framer-motion';

function ServicePage({ title, image, description }) {
  return (
    <motion.section 
      className="bg-gray-900 text-white min-h-screen py-20 px-8 flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-xl">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 object-cover" 
          />
          <div className="p-8">
            <h2 className="text-4xl font-bold mb-4 text-cyan-400">{title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ServicePage;