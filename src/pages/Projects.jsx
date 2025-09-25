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

const projectsData = [
  {
    title: "Real-time MERN Chat App",
    description: "A full-stack chat application with real-time messaging, user authentication, and a clean UI.",
    tech: [
      "Real-time Messaging",
      "User Authentication",
      "Clean UI",
      "Group Chats",
      "File Sharing"
    ],
    imageUrl: "/Dochat-polished.png",
  },
  
  {
    title: "Portfolio",
    description: "A personal brand website showcasing skills, projects, and freelancing services.",
    tech: [
      "Dynamic Animations",
      "Responsive Design",
      "Project Showcase",
      "Contact Form"
    ],
    imageUrl: "/portfolio-polished.png",
  },
  {
    title: "Dashboard",
    description: "A clean, professional dashboard for managing data.",
    tech: [
      "Data Visualization",
      "User Management",
      "Notification System",
      "Responsive Design"
    ],
    imageUrl: "/Dashboard.png", 
  },
  {
    title: "Hotel Booking Website",
    description: "A modern platform for exploring and booking hotels.",
    tech: [
      "Property Listings",
      "Online Booking",
      "Review Management",
      "Inquiry System"
    ],
    imageUrl: "/hotel.png", 
  },
  {
    title: "Real Estate Website",
    description: "A professional platform to explore and book properties.",
    tech: [
      "Property Listings",
      "Online Booking",
      "Inquiry System",
      "Review Management"
    ],
    imageUrl: "/real-state.png", 
  }
];

function Projects() {
  return (
    <section className="bg-gray-900 text-white py-20 px-8 min-h-screen" id="top">
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
            <motion.a
              key={index}
              href="#top"
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col cursor-pointer"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-sm px-3 py-1 rounded-full text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;