import React from 'react';
import { motion } from 'framer-motion';

// Data for the milestones section
const milestonesData = [
  {
    image: "/twenty-dev.png",
    stat: "20+",
    title: "Developers on Board"
  },
  {
    image: "/fifty-Project.png",
    stat: "50+",
    title: "Projects Delivered"
  },
  {
    image: "/setisfied-client.png",
    stat: "100%",
    title: "Satisfied Clients"
  }
];

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

function Milestones() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.section
      className="bg-gray-900 text-white py-16 px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {milestonesData.map((milestone, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center cursor-pointer"
              onClick={handleScrollToTop}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={milestone.image} alt={milestone.title} className="w-24 h-24 mb-4" />
              <h3 className="text-4xl font-bold mb-2 text-cyan-400">{milestone.stat}</h3>
              <p className="text-gray-400">{milestone.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Milestones;