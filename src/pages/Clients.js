import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaHandshake, FaTrophy, FaGlobe } from 'react-icons/fa';
import logo1 from '../assets/clients/1.webp';
import logo2 from '../assets/clients/2.png';
import logo3 from '../assets/clients/3.png';
import logo4 from '../assets/clients/4.png';
import logo5 from '../assets/clients/5.png';
import logo6 from '../assets/clients/6-ncdhhs.webp';
import logo7 from '../assets/clients/7-evicore.png';
import logo8 from '../assets/clients/8-Pennsylvania.jpg';
import logo9 from '../assets/clients/9-sony-music.webp';
import logo10 from '../assets/clients/10-Vanguard.png';
import logo11 from '../assets/clients/12-verizon.png';
import logo12 from '../assets/clients/12--verizon.png';
import logo13 from '../assets/clients/13-nyc.png';
import logo14 from '../assets/clients/14-cardinal-health.png';
import logo15 from '../assets/clients/15-chico.png';
import logo16 from '../assets/clients/16-us-bank.png';
import logo17 from '../assets/clients/17-amex.jpg';
import logo18 from '../assets/clients/18-best-buy.png';
import logo19 from '../assets/clients/19-geico.png';
import logo20 from '../assets/clients/20-aa-insurrance.webp';

const Clients = () => {
  const clientLogos = [
    { id: 1, name: 'Capital One', color: 'bg-white', logo: logo1 },
    { id: 2, name: 'fiserv', color: 'bg-transparent', logo: logo2 },
    { id: 3, name: 'GSK', color: 'bg-transparent', logo: logo3 },
    { id: 4, name: 'The hartford', color: 'bg-red-50', logo: logo4 },
    { id: 5, name: 'H.E.B', color: 'bg-white', logo: logo5 },
    { id: 6, name: 'NCDHHS', color: 'bg-white', logo: logo6 },
    { id: 7, name: 'EviCore ', color: 'bg-white', logo: logo7 },
    { id: 8, name: 'Pennsylvania', color: 'bg-white', logo: logo8 },
    { id: 9, name: 'Sony Music', color: 'bg-white', logo: logo9 },
    { id: 10, name: 'Vanguard ', color: 'bg-red-50', logo: logo1 },
    { id: 11, name: 'Verizon', color: 'bg-white', logo: logo11 },
    { id: 12, name: 'Verizon', color: 'bg-orange-50', logo: logo12 },
    { id: 13, name: 'NYC', color: 'bg-red-50', logo: logo13 },
    { id: 14, name: 'Cardinal Health', color: 'bg-blue-50', logo: logo14 },
    { id: 15, name: 'Chico\'s', color: 'bg-blue-50', logo: logo15 },
    { id: 16, name: 'Us Bank', color: 'bg-gray-50', logo: logo16 },
    { id: 17, name: 'AMEX', color: 'bg-white', logo: logo17 },
    { id: 18, name: 'Best Buy', color: 'bg-gray-50', logo: logo18 },
    { id: 19, name: 'GEICO', color: 'bg-gray-50', logo: logo19 },
    { id: 20, name: 'AA Insurrance', color: 'bg-white', logo: logo20 },
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
                className="group cosmic-card p-2 lg:px-6 lg:py-8  align-center justify-center min-h-[200px] hover:scale-105 transition-all duration-300"
              >
                <div className="text-center">
                  <div className={`w-full h-24 ${client.color} bg-white rounded-lg flex justify-center mb-4  transition-all`}>
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
