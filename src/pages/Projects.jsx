import React from 'react';
import { motion } from 'framer-motion';

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

// 1. 'githubLink' property removed from data
const projectsData = [
  {
    title: "Real-time MERN Chat App",
    description: "A full-stack chat application with real-time messaging, user authentication, and a clean UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    imageUrl: "/Dochat-polished.png",
    liveLink: "https://dochat-production.onrender.com",
  },
  {
    title: "Spotify Clone",
    description: "A clone of the Spotify web player with real-time chatting, built with React, Vite, Tailwind CSS and socket.io.",
    tech: ["React", "Vite", "Tailwind CSS", "GSAP","socket.io"],
    imageUrl: "/spotify-polished.png",
    liveLink: "https://spotify-clone-otux.onrender.com",
  },
  {
    title: "Portfolio",
    description: "My personal brand website showcasing my skills, projects, and freelancing services.",
    tech: ["React", "Vite", "Tailwind CSS"],
    imageUrl: "/portfolio-polished.png",
    liveLink: "https://portfolio-mayank-1.netlify.app",
  }
];

function Projects() {
  return (
    <section className="bg-gray-900 text-white py-20 px-8 min-h-screen">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Work
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col" variants={cardVariants} whileHover={{ y: -10 }}>
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-sm px-3 py-1 rounded-full text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* 2. GitHub button removed and parent div updated */}
                <div className="mt-auto pt-4">
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-cyan-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-cyan-400 transition-colors duration-300 text-center" 
                    whileHover={{ scale: 1.05 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;