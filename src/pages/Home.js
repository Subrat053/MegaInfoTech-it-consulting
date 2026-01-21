import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCode, FaMobile, FaBullhorn, FaPalette, FaRocket, FaChartLine, FaArrowRight } from 'react-icons/fa';
import Button from '../components/Button';
import VideoBackground from '../components/VideoBackground';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home = () => {
  const [statsRef, statsVisible] = useScrollAnimation(0.3);
  const [servicesRef, servicesVisible] = useScrollAnimation(0.2);
  const [whyUsRef, whyUsVisible] = useScrollAnimation(0.2);

  const services = [
    {
      icon: <FaCode />,
      title: 'Cloud Solutions',
      description: 'Secure, scalable cloud infrastructure and migration services for enterprise environments.'
    },
    {
      icon: <FaMobile />,
      title: 'Cybersecurity',
      description: 'Comprehensive security assessments and protection against evolving threats.'
    },
    {
      icon: <FaBullhorn />,
      title: 'Digital Transformation',
      description: 'Strategic planning and implementation for modern business digitalization.'
    },
    {
      icon: <FaPalette />,
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your unique business requirements.'
    },
    {
      icon: <FaRocket />,
      title: 'Infrastructure',
      description: 'Robust IT infrastructure design and management for optimal performance.'
    },
    {
      icon: <FaChartLine />,
      title: 'IT Consulting',
      description: 'Expert guidance on technology strategy and digital roadmap planning.'
    }
  ];

  const stats = [
    { number: '250+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Team Members' }
  ];

  return (
    <div>
      <Helmet>
        <title>MEGA INFOTECH - IT Consulting Services | Expert Solutions</title>
        <meta name="description" content="MEGA INFOTECH provides enterprise-grade IT consulting services. Digital transformation, cloud solutions, cybersecurity, and custom software development." />
        <meta name="keywords" content="IT consulting, digital transformation, cloud solutions, cybersecurity, software development" />
      </Helmet>

      {/* Hero Section with Video Background */}
      <VideoBackground className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-down">
              <span className="cosmic-gradient-text">IT Consulting</span>
              <br />
              <span className="glow-text">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Transform your business with cutting-edge IT solutions. Expert consulting, seamless implementation, continuous support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Link to="/contact">
                <button className="cosmic-button flex items-center gap-2">
                  <span>Schedule Consultation</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <FaArrowRight className="text-sm" />
                  </div>
                </button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-2 border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10 backdrop-blur-sm">
                  View Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* Stats Section */}
      <section className="py-16 bg-cosmic-navy/50 backdrop-blur-lg relative overflow-hidden">
        <div className="cosmic-backdrop"></div>
        <div ref={statsRef} className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center scroll-scale ${statsVisible ? 'visible' : ''}`}
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl md:text-5xl font-bold cosmic-gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="cosmic-backdrop"></div>
        <div ref={servicesRef} className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 scroll-animate ${servicesVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="cosmic-gradient-text">Our Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade IT solutions designed for modern business challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`scroll-slide-left ${servicesVisible ? 'visible' : ''}`}
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                <div className="cosmic-card h-full p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-accent-cyan">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={`text-center mt-12 scroll-fade ${servicesVisible ? 'visible' : ''}`}>
            <Link to="/services">
              <button className="cosmic-button">
                View All Services <FaArrowRight className="inline ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-cosmic-navy/30 backdrop-blur-sm relative overflow-hidden">
        <div className="cosmic-backdrop"></div>
        <div ref={whyUsRef} className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 scroll-animate ${whyUsVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="cosmic-gradient-text">Why MEGA INFOTECH</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Industry-leading expertise, proven track record, and commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center p-8 cosmic-card scroll-scale ${whyUsVisible ? 'visible' : ''}`} style={{transitionDelay: '0s'}}>
              <div className="bg-accent-cyan/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <FaRocket className="text-accent-cyan text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock monitoring and support for your business continuity</p>
            </div>
            <div className={`text-center p-8 cosmic-card scroll-scale ${whyUsVisible ? 'visible' : ''}`} style={{transitionDelay: '0.1s'}}>
              <div className="bg-accent-cyan/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <FaChartLine className="text-accent-cyan text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-400">10+ years delivering measurable business impact for Fortune 500 companies</p>
            </div>
            <div className={`text-center p-8 cosmic-card scroll-scale ${whyUsVisible ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
              <div className="bg-accent-cyan/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <FaPalette className="text-accent-cyan text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Custom Solutions</h3>
              <p className="text-gray-400">Tailored strategies aligned with your specific business objectives</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-mega-gradient"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">
            Ready to Transform Your IT?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Let's discuss how MEGA INFOTECH can help you achieve your digital transformation goals.
          </p>
          <Link to="/contact">
            <button className="cosmic-button text-lg">
              Schedule Your Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
