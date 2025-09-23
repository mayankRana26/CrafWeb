import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    }
  }
};

function About() {
  return (
    <motion.section
      className="bg-gray-900 text-white py-20 px-8 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.p className="text-lg leading-relaxed mb-4" variants={sectionVariants}>
              👋 Hey there, we have a team of skilled Software Engineers and successful Freelancers. We love building things from scratch and finding smart ways to solve problems.
            </motion.p>
            <motion.p className="text-lg leading-relaxed mb-4" variants={sectionVariants}>
              Our main focus is on the **MERN Stack (MongoDB, Express.js, React, Node.js)**, but we're always exploring new tech like **PHP** and **Electron** to build powerful web and desktop applications.
            </motion.p>
            <motion.p className="text-lg leading-relaxed" variants={sectionVariants}>
              We believe in a project-first approach to learning—building, refining, and then building more. This mindset helps us not just learn, but truly master new technologies. We're driven by a business mindset, always looking for opportunities to create valuable solutions for clients.
            </motion.p>
          </div>
          <motion.div className="md:w-1/2 grid grid-cols-2 gap-6 text-center" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
            <motion.div className="bg-gray-700 p-6 rounded-lg shadow-lg" variants={cardVariants} whileHover={{ y: -10 }}>
              <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
              <p className="text-gray-300">React, Node.js, MERN Stack, Electron, Tailwind, Wordpress, PHP</p>
            </motion.div>
            <motion.div className="bg-gray-700 p-6 rounded-lg shadow-lg" variants={cardVariants} whileHover={{ y: -10 }}>
              <h3 className="text-xl font-bold mb-2">Projects-First</h3>
              <p className="text-gray-300">Building, learning, and refining with every project.</p>
            </motion.div>
            <motion.div className="bg-gray-700 p-6 rounded-lg shadow-lg" variants={cardVariants} whileHover={{ y: -10 }}>
              <h3 className="text-xl font-bold mb-2">Freelancing Mindset</h3>
              <p className="text-gray-300">Focused on business solutions & client-focused development.</p>
            </motion.div>
            <motion.div className="bg-gray-700 p-6 rounded-lg shadow-lg" variants={cardVariants} whileHover={{ y: -10 }}>
              <h3 className="text-xl font-bold mb-2">Always Curious</h3>
              <p className="text-gray-300">Open to new tech and tools like AI & automation.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;