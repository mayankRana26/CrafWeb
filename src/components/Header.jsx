import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { services } from '../data/ServiceData';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  let timeoutId = null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    clearTimeout(timeoutId);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? 'text-cyan-500' : 'hover:text-cyan-400 transition-colors';
  };

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className="bg-gray-700 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      
      {/* Logo */}
      <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
        <div className="logo ml-8">
          <span className="craf">CRAF</span><span className="web">WEB</span>
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-2xl" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex text-xl font-semibold gap-5 mr-15 items-center">
        <Link to="/" className={getLinkClass('/')}>Home</Link>
        <Link to="/about" className={getLinkClass('/about')}>About</Link>
        
        {/* Services Dropdown (Desktop) */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/services"
            className={`flex items-center transition-colors ${isServicesActive ? 'text-cyan-500' : 'hover:text-cyan-400'}`}
            onClick={handleLinkClick}
          >
            Services
            <FaChevronDown className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </Link>
          
          {isDropdownOpen && (
            <div className="absolute left-0 mt-3 w-48 bg-gray-800 rounded-md shadow-lg py-2 z-20">
              {services.map((service) => (
                <Link 
                  key={service.id}
                  to={`/services/${service.id}`} 
                  className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white ${location.pathname === `/services/${service.id}` ? 'bg-gray-700 text-white' : ''}`}
                  onClick={handleLinkClick}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        <Link to="/projects" className={getLinkClass('/projects')}>Work</Link>
        <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
      </nav>

      {/* Mobile Menu (Isse md tak hide rakhe) */}
      <nav className={`md:hidden absolute top-full left-0 w-full bg-black py-4 transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center text-lg gap-4">
          <Link to="/" className="hover:text-cyan-400 transition-colors" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className="hover:text-cyan-400 transition-colors" onClick={handleLinkClick}>About</Link>
          
          {/* Services Dropdown (Mobile) */}
          <div className="relative w-full text-center">
            <Link
              to="/services"
              className="flex items-center justify-center hover:text-cyan-400 transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Services
              <FaChevronDown className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </Link>
            {isDropdownOpen && (
              <div className="mt-2 w-full bg-gray-800 rounded-md shadow-lg py-2">
                {services.map((service) => (
                  <Link 
                    key={service.id}
                    to={`/services/${service.id}`} 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={handleLinkClick}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/projects" className="hover:text-cyan-400 transition-colors" onClick={handleLinkClick}>Work</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition-colors" onClick={handleLinkClick}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;