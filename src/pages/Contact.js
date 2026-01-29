import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import Button from '../components/Button';
import { validateEmail, validateRequired, validatePhone, errorMessages } from '../utils/validation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateRequired(formData.name)) {
      newErrors.name = errorMessages.required;
    }

    if (!validateRequired(formData.email)) {
      newErrors.email = errorMessages.required;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = errorMessages.email;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = errorMessages.phone;
    }

    if (!validateRequired(formData.service)) {
      newErrors.service = errorMessages.required;
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = errorMessages.required;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = errorMessages.minLength(10);
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="pt-24">
      <Helmet>
        <title>Contact Us | Digital Agency - Get in Touch</title>
          <title>Contact MEGA INFOTECH - Enterprise IT Consulting</title>
          <meta name="description" content="Contact MEGA INFOTECH for enterprise IT consulting, cloud solutions, and digital transformation services. Schedule your consultation today." />
          <meta name="keywords" content="contact MEGA INFOTECH, IT consulting, enterprise solutions, schedule consultation" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-mega-gradient text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect With Our Team</h1>
            <p className="text-xl text-gray-200">
              Schedule a consultation with MEGA INFOTECH experts to discuss your IT transformation goals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-mega-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="cosmic-card p-8">
                <h2 className="text-3xl font-bold mb-6 text-white cosmic-gradient-text">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-accent-cyan/20 border border-accent-cyan text-accent-cyan px-4 py-3 rounded mb-6">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                ) : null}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-white/70 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-accent-cyan bg-mega-navy/50 text-white ${
                          errors.name ? 'border-red-500' : 'border-accent-cyan/30'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-white/70 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-accent-cyan bg-mega-navy/50 text-white ${
                          errors.email ? 'border-red-500' : 'border-accent-cyan/30'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-white/70 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-accent-cyan bg-mega-navy/50 text-white ${
                          errors.phone ? 'border-red-500' : 'border-accent-cyan/30'
                        }`}
                        placeholder="+1 234 567 8900"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-white/70 font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-accent-cyan bg-mega-navy/50 text-white border-accent-cyan/30
                            `}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-white/70 font-medium mb-2">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-accent-cyan bg-mega-navy/50 text-white ${
                          errors.service ? 'border-red-500' : 'border-accent-cyan/30'
                        }`}
                      >
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="design">UX/UI Design</option>
                        <option value="branding">Branding</option>
                        <option value="seo">SEO & Analytics</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.service && (
                        <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-white/70 font-medium mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-accent-cyan bg-mega-navy/50 text-white ${
                                errors.budget ? 'border-red-500' : 'border-accent-cyan/30'
                            }`}
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white/70 font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-accent-cyan bg-mega-navy/50 text-white ${
                        errors.message ? 'border-red-500' : 'border-accent-cyan/30'
                      }`}
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-blue-600 mt-1 mr-4 text-xl" />
                    <div>
                      <h4 className="font-semibold mb-1 text-blue-600">Address</h4>
                      <p className="text-gray-600">5900 Balacones Dr STE-100<br />AUSTIN TX 78731</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaPhone className="text-blue-600 mt-1 mr-4 text-xl flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-blue-600">Phone</h4>
                        <p className="text-gray-600">+1 8323787779</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaEnvelope className="text-blue-600 mt-1 mr-4 text-xl flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-blue-600">Email</h4>
                        <p className="text-gray-600">info@megainfotech.net</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaClock className="text-blue-600 mt-1 mr-4 text-xl flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-blue-600">Business Hours</h4>
                      <p className="text-gray-600">Monday - Sunday: 9:00 AM - 6:00 PM<br />24/7 Emergency Support Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-accent-cyan">Quick Consultation</h3>
                <p className="mb-4">
                  Ready to discuss your IT transformation? Reach out to our team today.
                </p>
                <a
                  href="tel:+18323787779"
                  className="block bg-accent-cyan text-mega-dark text-center px-6 py-3 rounded-full hover:bg-white transition-colors font-semibold"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="w-full h-96 bg-gray-300">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.4936826779783!2d-97.7591384!3d30.346913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb4d2ea0cf0f%3A0x3f7d6b1ec6a6b0a6!2s5900%20Balcones%20Dr%20STE%20100%2C%20Austin%2C%20TX%2078731!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
