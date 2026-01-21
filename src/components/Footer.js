import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/images/logo-mega-infotech.png';

const Footer = () => {
//   const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mega-dark text-gray-300 border-t border-accent-cyan/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <img src={logo} alt="Mega Infotech Logo" className="w-50 h-[60px] scale-[1.17] text-xl"/>
              {/* <span className="text-accent-cyan">▰▰</span>MEGA <span className="text-accent-cyan">INFOTECH</span> */}
            </h3>
            <p className="mb-4 text-sm">
              Enterprise-grade IT consulting and digital transformation solutions. Trusted by Fortune 500 companies worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-accent-cyan">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-accent-cyan transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent-cyan transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-accent-cyan transition-colors">About MEGA INFOTECH</Link></li>
              <li><Link to="/blog" className="hover:text-accent-cyan transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-accent-cyan">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#cloud" className="hover:text-accent-cyan transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services#security" className="hover:text-accent-cyan transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services#transformation" className="hover:text-accent-cyan transition-colors">Digital Transformation</Link></li>
              <li><Link to="/services#development" className="hover:text-accent-cyan transition-colors">Custom Development</Link></li>
              <li><Link to="/services#consulting" className="hover:text-accent-cyan transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-accent-cyan">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-accent-cyan flex-shrink-0" />
                <span>5900 Balacones Dr STE-100<br />AUSTIN TX 78731</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-accent-cyan flex-shrink-0" />
                <span>+1 9794015779</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-accent-cyan flex-shrink-0" />
                <span>info@megainfotec.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 MEGA INFOTECH - IT Consulting Services. All rights reserved. | <Link to="/contact" className="text-accent-cyan hover:text-white transition-colors">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
