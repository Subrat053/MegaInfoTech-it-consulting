import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaHandshake, FaTrophy, FaGlobe } from 'react-icons/fa';
import logo1 from '../assets/clients/Google.png'
const Clients = () => {
  const clientLogos = [
    { id: 1, name: 'ABC Bancorp', color: 'bg-blue-50', logo: logo1 },
    { id: 2, name: 'Sony Music', color: 'bg-red-50', logo: logo1 },
    { id: 3, name: 'FEB', color: 'bg-red-50', logo: logo1 },
    { id: 4, name: 'Capital One', color: 'bg-red-50', logo: logo1 },
    { id: 5, name: 'Best Cardholder', color: 'bg-gray-50', logo: logo1 },
    { id: 6, name: 'Vanguard', color: 'bg-red-50', logo: logo1 },
    { id: 7, name: 'NCDHS', color: 'bg-yellow-50', logo: logo1 },
    { id: 8, name: 'ISBU', color: 'bg-orange-50', logo: logo1 },
    { id: 9, name: 'Chircos', color: 'bg-gray-50', logo: logo1 },
    { id: 10, name: 'Verizon', color: 'bg-red-50', logo: logo1 },
    { id: 11, name: 'EdiCore', color: 'bg-black', logo: logo1 },
    { id: 12, name: 'GSK', color: 'bg-orange-50', logo: logo1 },
    { id: 13, name: 'US Bank', color: 'bg-red-50', logo: logo1 },
    { id: 14, name: 'PennsylvaniaDA', color: 'bg-blue-50', logo: logo1 },
    { id: 15, name: 'AMEX', color: 'bg-blue-50', logo: logo1 },
    { id: 16, name: 'GEICO', color: 'bg-gray-50', logo: logo1 },
  ];

  const stats = [
    { label: 'Enterprise Clients', value: '200+' },
    { label: 'Industry Verticals', value: '15+' },
    { label: 'Global Presence', value: '50+' },
    { label: 'Years of Trust', value: '10+' },
  ];

  const industries = [
    { name: 'Banking & Finance', icon: '🏦' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Retail & E-commerce', icon: '🛍️' },
    { name: 'Technology', icon: '💻' },
    { name: 'Media & Entertainment', icon: '🎬' },
    { name: 'Government', icon: '🏛️' },
  ];

  return (
    <div className="pt-24">
      <Helmet>
        <title>Our Clients | Mega Infotech - Enterprise Solutions</title>
        <meta name="description" content="Meet the enterprise clients we've partnered with. Fortune 500 companies and global leaders trust Mega Infotech for IT consulting and digital transformation." />
        <meta name="keywords" content="enterprise clients, Fortune 500, partnerships, case studies" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-mega-gradient text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Trusted Clients</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Partnering with enterprise leaders worldwide for digital transformation and IT consulting
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-mega-dark border-b border-accent-cyan/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="group">
                <div className="text-4xl md:text-5xl font-bold text-accent-cyan mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid Section */}
      <section className="py-20 bg-mega-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 cosmic-gradient-text">
              Enterprise Partners
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're honored to work with leading organizations across various industries
            </p>
          </div>

          {/* Clients Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {clientLogos.map((client) => (
              <div
                key={client.id}
                className="group cosmic-card p-8 flex items-center justify-center min-h-[200px] hover:scale-105 transition-all duration-300"
              >
                <div className="text-center">
                  <div className={`w-full h-24 ${client.color} rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow-lg transition-all`}>
                    <img src={client.logo} alt={`${client.name} logo`} className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="text-white font-semibold text-sm group-hover:text-accent-cyan transition-colors">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20 bg-mega-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 cosmic-gradient-text">
              Industry Expertise
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Serving diverse industries with specialized IT solutions and consulting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <div key={idx} className="cosmic-card p-8 text-center hover:shadow-glow-lg transition-all group">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-mega-dark border-t border-accent-cyan/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 cosmic-gradient-text">
              Why Enterprises Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cosmic-card p-8 text-center">
              <div className="text-5xl mb-4 text-accent-cyan flex justify-center">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Long-term Partnerships</h3>
              <p className="text-gray-300">
                We build lasting relationships with our clients, becoming an integral part of their digital transformation journey.
              </p>
            </div>

            <div className="cosmic-card p-8 text-center">
              <div className="text-5xl mb-4 text-accent-cyan flex justify-center">
                <FaTrophy />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Excellence</h3>
              <p className="text-gray-300">
                Industry awards and recognition validate our commitment to delivering exceptional results for enterprise clients.
              </p>
            </div>

            <div className="cosmic-card p-8 text-center">
              <div className="text-5xl mb-4 text-accent-cyan flex justify-center">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
              <p className="text-gray-300">
                With offices worldwide, we provide 24/7 support and deliver solutions on a global scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mega-gradient">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Client Family?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how Mega Infotech can transform your business with our enterprise solutions
          </p>
          <a
            href="/contact"
            className="cosmic-button inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Clients;
