import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaAward, FaUsers, FaLightbulb, FaHeart } from 'react-icons/fa';

const About = () => {
  const team = [
    { name: 'John Smith', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces' },
    { name: 'Sarah Johnson', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces' },
    { name: 'Michael Chen', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces' },
    { name: 'Emily Davis', role: 'Marketing Head', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces' }
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We embrace new technologies and creative approaches to solve complex challenges'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality in everything we do'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared success'
    },
    {
      icon: <FaHeart />,
      title: 'Passion',
      description: 'We love what we do and it shows in the results we deliver'
    }
  ];

  return (
    <div className="pt-24">
      <Helmet>
        <title>About MEGA INFOTECH - Enterprise IT Consulting Company</title>
        <meta name="description" content="MEGA INFOTECH is a leading enterprise IT consulting firm with 15+ years of experience. Expert team delivering cloud, cybersecurity, and digital transformation." />
        <meta name="keywords" content="MEGA INFOTECH, IT consulting, enterprise solutions, cloud, cybersecurity, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-mega-gradient text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MEGA INFOTECH</h1>
            <p className="text-xl text-gray-200">
              Enterprise IT consulting firm delivering world-class digital transformation and technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-mega-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 cosmic-gradient-text">Our Story</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded in 2014, MEGA INFOTECH began with a clear vision: to deliver enterprise-grade IT solutions that transform businesses. 
                What started as a small team of 5 consultants has grown into a trusted partner for 250+ enterprise clients across 30+ countries.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Over 15 years, we've successfully guided Fortune 500 companies, government agencies, and emerging enterprises through complex IT transformations. 
                Our expertise spans cloud migration, cybersecurity, digital modernization, and custom enterprise solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, our 200+ consultants continue to drive innovation, deliver measurable ROI, and serve as trusted advisors for enterprise digital strategies.
                difference for our clients' businesses.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Our Team"
                className="rounded-lg shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-mega-dark border-t border-accent-cyan/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cosmic-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent-cyan">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower enterprises with cutting-edge IT solutions that drive digital transformation, enhance operational efficiency, 
                and create sustainable competitive advantage. We're committed to being the trusted technology partner for ambitious organizations worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-accent-cyan">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted technology partner for enterprises pursuing digital excellence. We envision 
                organizations worldwide leveraging our expertise to achieve transformational outcomes and sustainable 
                competitive advantage in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-mega-dark border-t border-accent-cyan/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white cosmic-gradient-text mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 cosmic-card rounded-lg">
                <div className="text-accent-cyan text-4xl mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-mega-dark border-t border-accent-cyan/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white cosmic-gradient-text mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="cosmic-card rounded-lg overflow-hidden hover:shadow-glow transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-20 bg-mega-gradient text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-accent-cyan">2+</div>
              <div className="text-gray-200">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-accent-cyan">50+</div>
              <div className="text-gray-200">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-accent-cyan">100+</div>
              <div className="text-gray-200">Successful Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-accent-cyan">20+</div>
              <div className="text-gray-200">Expert Consultants</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
