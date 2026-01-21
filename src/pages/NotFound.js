import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 flex items-center">
      <Helmet>
        <title>404 - Page Not Found | Digital Agency</title>
        <meta name="description" content="The page you are looking for could not be found." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="container mx-auto px-6 py-20 text-center">
        <FaExclamationTriangle className="text-blue-600 text-6xl mx-auto mb-6" />
        <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg">
              <FaHome className="inline mr-2" />
              Go Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Suggested Links */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            You might be interested in:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/services" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-lg mb-2 text-gray-800">Our Services</h4>
              <p className="text-gray-600">Explore our digital solutions</p>
            </Link>
            <Link to="/portfolio" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-lg mb-2 text-gray-800">Portfolio</h4>
              <p className="text-gray-600">View our successful projects</p>
            </Link>
            <Link to="/about" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-lg mb-2 text-gray-800">About Us</h4>
              <p className="text-gray-600">Learn about our company</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
