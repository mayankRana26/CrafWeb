import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/devnity.1"
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://wa.me/917465065665"
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-400 transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mayankranaa/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/MayankRanaa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <FaQuestionCircle size={20} />
            <Link to="/contact" className="hover:text-white transition-colors">
              Help
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-1 pt-5 border-gray-400">
        <div className="container mx-auto text-center">
          <p className="text-sm ">
            &copy; {currentYear} CrafWeb. All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;