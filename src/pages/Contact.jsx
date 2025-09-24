import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

function Contact() {
  return (
    <motion.section 
      className="bg-gray-900 text-white py-20 px-8 min-h-screen flex items-center justify-center"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <div className="container mx-auto max-w-2xl">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          variants={fadeIn}
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          className="text-center text-lg text-gray-400 mb-8"
          variants={fadeIn}
        >
          Have a question or a project in mind? Feel free to reach out.
        </motion.p>
        
        {/* Contact Form Section */}
        <motion.form 
          name="contact" // Netlify ko form ka naam batane ke liye
          method='POST' 
          data-netlify="true" // Yeh attribute zaroori hai
          data-netlify-honeypot="bot-field" // Spam protection
          className="space-y-6 mb-12"
          variants={stagger}
        >
          {/* Honeypot field (hidden) */}
          <div className="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </div>
          <input type="hidden" name="form-name" value="contact" />
          
          <motion.div variants={fadeIn}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white p-3 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              required
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white p-3 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              required
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white p-3 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              required
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-cyan-500 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors"
            variants={fadeIn}
          >
            Send Message
          </motion.button>
        </motion.form>
        
        {/* Social & Direct Contact Links Section */}
        <motion.div className="text-center" variants={fadeIn}>
          <motion.p className="text-gray-400 mb-4">Or connect with Us directly on :</motion.p>
          <motion.div className="flex justify-center space-x-6" variants={stagger}>
            <motion.a 
              href="https://www.instagram.com/crafweb.1"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-500 hover:text-cyan-400 transition-colors text-xl flex items-center space-x-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={fadeIn}
            >
              <FaInstagram />
              <span>Instagram</span>
            </motion.a>
            <motion.a 
              href="https://wa.me/917465065665"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-500 hover:text-cyan-400 transition-colors text-xl flex items-center space-x-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={fadeIn}
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </motion.a>
            <motion.a 
              href="mailto:crafweb.sites@gmail.com"
              className="text-cyan-500 hover:text-cyan-400 transition-colors text-xl flex items-center space-x-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={fadeIn}
            >
              <FaEnvelope />
              <span>Email</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;