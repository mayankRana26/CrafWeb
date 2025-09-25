import React from 'react';
import profileImage from '../assets/profile-photo.png';
import { motion } from 'framer-motion';


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

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      
      {/* 1. वीडियो बैकग्राउंड */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video-bg.mp4" type="video/mp4" />
        {/* 
        <source src="/your-video.webm" type="video/webm" />
        */}
        Your browser does not support the video.
      </video>

      {/* 2. ओवरले ताकि टेक्स्ट साफ दिखे */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

      {/* 3. Hero Section का मुख्य कंटेंट */}
      <main className="container mx-auto px-8 py-20 relative z-20 flex flex-col md:flex-row items-center justify-between">
        
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
            variants={itemVariants}
          >
            Crafting Dynamic Web Experiences
          </motion.h2>
          <motion.p
            className="text-lg text-gray-200 mb-8"
            variants={itemVariants}
          >
            MERN Stack, Wordpress, Javascript, PHP & Business Solutions For A Digital-First World
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start space-x-4"
            variants={itemVariants}
          >
            <motion.a 
              href="/hire-me" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 transition-colors duration-300"
            >
              Hire us
            </motion.a>
            <motion.a 
              href="/projects" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg border-3 border-pink-500  hover:bg-gray-700 transition-colors duration-300"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="md:w-1/2 flex justify-center md:justify-end md:pl-16 mt-8 md:mt-0">
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-green-500 hover:border-cyan-400 transition-colors duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              delay: 0.8,
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 15px 30px rgba(0, 255, 255, 0.4)",
              transition: { duration: 0.3 }
            }}
          >
            <img src={profileImage} alt="professional_image" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </main>
    </section>
  );
}

export default Hero;