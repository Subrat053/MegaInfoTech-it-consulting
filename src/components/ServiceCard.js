import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="text-blue-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
