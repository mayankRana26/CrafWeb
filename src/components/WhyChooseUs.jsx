import React from 'react';
import { motion } from 'framer-motion';

// अपनी इमेजेस को यहाँ इंपोर्ट करें

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

function WhyChooseUs() {
  const handleCardClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose <span className='text-fuchsia-500'>CrafWeb</span> ?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Expertise Card */}
          <motion.div 
            className="p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center min-h-[400px] cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.05 }}
            onClick={handleCardClick}
          >
            <img src="/technical-experties.png" alt="Technical Expertise" className="h-80 w-90 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">Technical Expertise</h3>
            <p className="text-gray-400">
              {/* BADLAV YAHAN HAI */}
              We specialize in the MERN Stack and deliver high-quality, scalable code for your web and desktop applications.
            </p>
          </motion.div>
          
          {/* Quality Card */}
          <motion.div 
            className="p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center min-h-[400px] cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.05 }}
            onClick={handleCardClick}
          >
            <img src="/quality-reliability.png" alt="Quality & Reliability" className="h-80 w-90 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">Quality & Reliability</h3>
            <p className="text-gray-400">
              {/* BADLAV YAHAN HAI */}
              We handle every project with precision and a commitment to delivering a polished, bug-free final product on time.
            </p>
          </motion.div>

          {/* Support Card */}
          <motion.div 
            className="p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center min-h-[400px] cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.05 }}
            onClick={handleCardClick}
          >
            <img src="/dedicated-support.png" alt="Dedicated Support" className="h-80 w-90 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">Dedicated Support</h3>
            <p className="text-gray-400">
              {/* BADLAV YAHAN HAI */}
              We offer ongoing support and clear communication to ensure your project's long-term success and your complete satisfaction.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;