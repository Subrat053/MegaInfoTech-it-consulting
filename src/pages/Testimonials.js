import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'David Williams',
      company: 'Tech Innovations Inc.',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces',
      rating: 5,
      text: 'Working with Digital Agency transformed our online presence. Their team delivered a stunning website that increased our conversions by 45%. Highly recommended!',
      project: 'Website Redesign'
    },
    {
      id: 2,
      name: 'Lisa Anderson',
      company: 'Fashion Forward',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces',
      rating: 5,
      text: 'The digital marketing campaign they created exceeded all our expectations. We saw a 300% increase in social media engagement and a significant boost in sales.',
      project: 'Digital Marketing'
    },
    {
      id: 3,
      name: 'Robert Chen',
      company: 'HealthTech Solutions',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces',
      rating: 5,
      text: 'Their mobile app development expertise is outstanding. They built us a secure, user-friendly healthcare app that our patients absolutely love.',
      project: 'Mobile App Development'
    },
    {
      id: 4,
      name: 'Jennifer Martinez',
      company: 'Global Logistics',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces',
      rating: 5,
      text: 'Professional, responsive, and incredibly talented. They helped us modernize our entire digital infrastructure. The results speak for themselves.',
      project: 'Web Application'
    },
    {
      id: 5,
      name: 'Thomas Brown',
      company: 'Startup Ventures',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces',
      rating: 5,
      text: 'From branding to web development, they handled everything perfectly. Their creative approach and attention to detail made all the difference.',
      project: 'Branding & Website'
    },
    {
      id: 6,
      name: 'Amanda Taylor',
      company: 'Education Plus',
      role: 'Director',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=faces',
      rating: 5,
      text: 'Amazing team to work with! They developed an e-learning platform that has revolutionized how we deliver education. Couldn\'t be happier!',
      project: 'E-Learning Platform'
    }
  ];

  const clientLogos = [
    'Company 1', 'Company 2', 'Company 3', 'Company 4', 
    'Company 5', 'Company 6', 'Company 7', 'Company 8'
  ];

  return (
    <div className="pt-24">
      <Helmet>
        <title>Client Testimonials | Digital Agency - What Our Clients Say</title>
        <meta name="description" content="Read success stories from our satisfied clients. 98% client satisfaction and 200+ happy clients trust us with their digital needs." />
        <meta name="keywords" content="client testimonials, reviews, success stories, client feedback" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-mega-gradient text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Success Stories</h1>
            <p className="text-xl text-gray-200">
              Hear from Fortune 500 companies and enterprises about their transformation with MEGA INFOTECH
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-mega-dark border-b border-accent-cyan/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-cyan mb-2">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-cyan mb-2">4.95/5</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-cyan mb-2">250+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-cyan mb-2">97%</div>
              <div className="text-gray-300">Repeat Engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-mega-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="cosmic-card p-8 hover:shadow-glow transition-all duration-300">
                <FaQuoteLeft className="text-accent-cyan text-3xl mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-accent-cyan" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-accent-cyan/30"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-accent-cyan">{testimonial.company}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <span className="text-sm text-gray-400">Project: {testimonial.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-mega-dark border-t border-accent-cyan/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white cosmic-gradient-text mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-300">
              We're proud to partner with amazing brands
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center h-24 bg-mega-navy rounded-lg hover:bg-mega-navy/80 border border-accent-cyan/20 transition-colors"
              >
                <span className="text-gray-300 font-semibold">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mega-gradient text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join 250+ enterprises that trust MEGA INFOTECH for their digital transformation.
          </p>
          <a
            href="/contact"
            className="cosmic-button inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
