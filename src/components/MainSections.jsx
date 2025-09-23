import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { services } from '../data/ServiceData'; // Assuming this data exists

function MainSections() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* 1. About Crafweb Section */}
        <div className="p-4 rounded-lg">
          <Link to="/">
            <div className="logo mb-8">
              <span className="craf">CRAF</span><span className="web">WEB</span>
            </div>
          </Link>
          <p className="text-gray-200">
            <span className="text-fuchsia-500 font-semibold">Crafweb</span> is a freelance web development platform focused on crafting dynamic and scalable digital solutions. We specialize in MERN Stack, PHP, and custom business applications to help your ideas thrive online.
          </p>
        </div>

        {/* 2. Contact Details Section */}
        <div className="p-4 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Contact Details</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt size={20} className="mt-1 flex-shrink-0" />
              <p>Srinagar, Uttarakhand, India</p>
            </li>
            <li className="flex items-start space-x-3">
              <FaEnvelope size={20} className="mt-1 flex-shrink-0" />
              <a href="mailto:crafrweb.sites@gmail.com" className="hover:text-white transition-colors">crafrweb.sites@gmail.com</a>
            </li>
            <li className="flex items-start space-x-3">
              <FaPhone size={20} className="mt-1 flex-shrink-0" />
              <p>+91 7465065665</p>
            </li>
          </ul>
        </div>

        {/* 3. Our Services Section - Dynamic Links */}
        <nav className="p-4 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Our Services</h3>
          <ul className="space-y-2 text-gray-400">
            {services.map((service) => (
              <li key={service.id}>
                <Link to={`/services/${service.id}`} className="hover:text-white transition-colors">{service.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 4. Our Pages Section - Dynamic Links */}
        <nav className="p-4 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Our Pages</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">Work</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default MainSections;