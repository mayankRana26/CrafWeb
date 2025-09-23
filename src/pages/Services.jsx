import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/ServiceData'; // Ye data neeche diya gaya hai
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    }
  }
};

function Services() {
  return (
    <section className="bg-gray-900 text-white py-20 px-8 min-h-screen">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Services {/* BADLAV: "My" ko "Our" kiya */}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {services.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`}>
              <motion.div
                className="bg-gray-800 rounded-lg p-8 shadow-lg flex flex-col justify-center text-center h-full"
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                {/* BADLAV: Image tag yahan se hata diya gaya hai */}
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;