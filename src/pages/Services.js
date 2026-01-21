import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCode, FaMobile, FaBullhorn, FaPalette, FaRocket, FaChartLine, FaDatabase, FaShoppingCart } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaDatabase />,
      title: 'Cloud Solutions',
      description: 'Enterprise-grade cloud infrastructure, migration, and management. Leverage AWS, Azure, and Google Cloud for optimal performance and scalability.',
      features: ['Cloud Migration', 'AWS/Azure Solutions', 'Kubernetes & Containers', 'Database Management', 'Disaster Recovery', '99.9% Uptime SLA']
    },
    {
      icon: <FaShoppingCart />,
      title: 'Cybersecurity',
      description: 'Comprehensive security assessments and solutions to protect your business from evolving cyber threats.',
      features: ['Security Audits', 'Penetration Testing', 'Threat Detection', 'Incident Response', 'Compliance (ISO/HIPAA)', 'Employee Training']
    },
    {
      icon: <FaRocket />,
      title: 'Digital Transformation',
      description: 'Strategic planning and implementation for comprehensive business digitalization and modernization.',
      features: ['Technology Assessment', 'Process Optimization', 'Legacy System Modernization', 'Change Management', 'Training & Support', 'ROI Tracking']
    },
    {
      icon: <FaCode />,
      title: 'Custom Software Development',
      description: 'Bespoke enterprise applications designed and developed to meet your unique business requirements.',
      features: ['Enterprise Apps', 'Integration Solutions', 'API Development', 'Mobile Applications', 'Agile Delivery', 'Ongoing Maintenance']
    },
    {
      icon: <FaMobile />,
      title: 'Infrastructure Management',
      description: 'Robust IT infrastructure design, deployment, and management for optimal business continuity.',
      features: ['Network Design', 'Server Management', 'Backup Solutions', 'Monitoring & Analytics', 'Capacity Planning', 'Cost Optimization']
    },
    {
      icon: <FaChartLine />,
      title: 'IT Consulting',
      description: 'Expert advisory services to align your technology strategy with business objectives.',
      features: ['Strategic Planning', 'Technology Roadmap', 'Vendor Selection', 'Budget Optimization', 'Compliance Guidance', 'Digital Strategy']
    },
    {
      icon: <FaBullhorn />,
      title: 'Managed IT Services',
      description: 'Proactive monitoring, maintenance, and support for your entire IT infrastructure.',
      features: ['24/7 Monitoring', 'Help Desk Support', 'Patch Management', 'Asset Management', 'Predictive Maintenance', 'SLA Guarantees']
    },
    {
      icon: <FaPalette />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights for informed business decisions.',
      features: ['Data Warehousing', 'BI Solutions', 'Predictive Analytics', 'Data Visualization', 'Custom Dashboards', 'AI/ML Integration']
    }
  ];

  return (
    <div className="pt-24">
      <Helmet>
        <title>IT Consulting Services | MEGA INFOTECH - Enterprise Solutions</title>
        <meta name="description" content="MEGA INFOTECH provides cloud solutions, cybersecurity, digital transformation, custom development, and IT consulting for enterprises." />
        <meta name="keywords" content="IT consulting, cloud solutions, cybersecurity, digital transformation, managed IT services" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-mega-gradient text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise IT Solutions</h1>
            <p className="text-xl text-blue-100">
              MEGA INFOTECH delivers enterprise-grade IT consulting, cloud solutions, and digital transformation services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-mega-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cosmic-card p-8 hover:shadow-glow-lg transition-all duration-300">
                <div className="text-accent-cyan text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="text-accent-cyan mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-mega-dark border-t border-accent-cyan/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 cosmic-gradient-text">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven approach to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', desc: 'Evaluate your current IT environment and goals' },
              { step: '02', title: 'Strategy', desc: 'Develop comprehensive IT strategy roadmap' },
              { step: '03', title: 'Implementation', desc: 'Deploy solutions with zero downtime' },
              { step: '04', title: 'Support', desc: '24/7 monitoring and ongoing optimization' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent-cyan mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
