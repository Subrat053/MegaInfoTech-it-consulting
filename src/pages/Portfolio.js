import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Card from '../components/Card';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
      {
        id: 1,
        title: 'Cloud Migration for Fortune 500 Bank',
        category: 'cloud',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        description: 'Successfully migrated legacy banking systems to AWS with zero downtime',
        technologies: ['AWS', 'Kubernetes', 'Docker', 'PostgreSQL'],
        metrics: { efficiency: '65%', costSavings: '$5M+', uptime: '99.99%' }
      },
      {
        id: 2,
        title: 'Cybersecurity Transformation',
        category: 'security',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
        description: 'Implemented enterprise-grade security for healthcare organization',
        technologies: ['Zero-Trust', 'EDR', 'SIEM', 'Compliance Tools'],
        metrics: { threatReduction: '99%', incidents: '0', compliance: '100%' }
      },
      {
        id: 3,
        title: 'Digital Transformation Initiative',
        category: 'transformation',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        description: 'Complete digitalization of manufacturing process',
        technologies: ['IoT', 'AI/ML', 'Cloud Platform', 'Analytics'],
        metrics: { productivity: '45%', waste: '-30%', ROI: '300%' }
      },
      {
        id: 4,
        title: 'Enterprise Data Analytics Platform',
        category: 'analytics',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        description: 'Built comprehensive BI solution for retail chain analysis',
        technologies: ['Tableau', 'Snowflake', 'Python', 'APIs'],
        metrics: { insights: '1000+', decisionTime: '-70%', revenue: '+$8M' }
      },
      {
        id: 5,
        title: 'Managed IT Services Implementation',
        category: 'infrastructure',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
        description: 'End-to-end IT service management for 500+ user enterprise',
        technologies: ['ServiceNow', 'Monitoring Tools', 'Automation', 'Cloud'],
        metrics: { ticketResolution: '4hr', availability: '99.95%', satisfaction: '96%' }
      },
      {
        id: 6,
        title: 'Custom Enterprise Software',
        category: 'development',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
        description: 'Developed custom supply chain management system',
        technologies: ['React', 'Node.js', 'Microservices', 'Azure'],
        metrics: { users: '2000+', processTime: '-50%', accuracy: '99.8%' }
      }
  ];

  const categories = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'cloud', label: 'Cloud Solutions' },
    { id: 'security', label: 'Cybersecurity' },
    { id: 'transformation', label: 'Digital Transformation' },
    { id: 'analytics', label: 'Data & Analytics' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'development', label: 'Custom Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-24">
      <Helmet>
        <title>Case Studies | MEGA INFOTECH - Enterprise IT Solutions</title>
        <meta name="description" content="Explore MEGA INFOTECH's successful case studies. Cloud migrations, cybersecurity, digital transformation, and custom development solutions." />
        <meta name="keywords" content="case studies, IT solutions, cloud migration, cybersecurity, digital transformation, enterprise solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-mega-gradient text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-gray-200">
              Explore our successful enterprise transformations and the measurable impact we've delivered
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-mega-dark border-b border-accent-cyan/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-accent-cyan text-mega-dark shadow-glow'
                    : 'bg-mega-navy text-gray-300 hover:border-accent-cyan border border-transparent'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-mega-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <Card key={project.id} className="overflow-hidden cosmic-card hover:shadow-glow-lg transition-all">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-accent-cyan/20 text-accent-cyan px-3 py-1 rounded-full text-sm border border-accent-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2 text-accent-cyan">Results:</h4>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-accent-cyan font-bold">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mega-dark border-t border-accent-cyan/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white cosmic-gradient-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how MEGA INFOTECH can deliver enterprise-grade solutions for your organization
          </p>
          <a
            href="/contact"
            className="cosmic-button px-8 py-4 inline-block font-semibold"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
