import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo-mega-infotech.png';
// import logo from '../assets/images/logo512.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect shadow-cosmic' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center gap-2 group">
            {/* <span className="cosmic-gradient-text text-lg">▰▰ MEGA</span>
            <span className="text-white group-hover:text-accent-cyan transition-colors">INFOTECH</span> */}
            <img src={logo} alt="Mega Infotech Logo" className="w-50 h-[60px] scale-150 text-xl"/>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-300 hover:text-accent-cyan transition-colors duration-300 font-medium relative group ${
                  location.pathname === item.path ? 'text-accent-cyan' : ''
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="cosmic-button text-sm"
            >
              Speak to an expert
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl hover:text-accent-cyan transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass-effect rounded-lg p-4 animate-slide-down">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleMenu}
                className={`block py-3 text-gray-300 hover:text-accent-cyan transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-accent-cyan font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block mt-4 cosmic-button text-center w-full"
            >
              Speak to an expert
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
