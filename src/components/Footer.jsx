import React from 'react';
import { FaInstagram, FaWhatsapp, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-3 border-t border-gray-400">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          
          {/* Left: Social Media Icons */}
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/crafweb.1"
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
          </div>

          {/* Center: Copyright Text */}
          <div className="text-center flex-grow">
            <p className="text-sm">
              &copy; {currentYear} CrafWeb. All Rights Reserved.
            </p>
          </div>

          {/* Right: Help Link */}
          <div className="flex items-center space-x-2">
            <FaQuestionCircle size={20} />
            <Link to="/contact" className="hover:text-white transition-colors">
              Help
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;