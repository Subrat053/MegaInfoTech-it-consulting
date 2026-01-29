import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { 
  validateEmail, 
  validatePhone, 
  validateRequired, 
  validateMinLength, 
  errorMessages 
} from '../utils/validation';

const roleOptions = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Engineer',
  'UI/UX Designer',
  'QA Engineer',
  'DevOps Engineer',
  'Project Manager',
  'Digital Marketer',
  'Business Analyst',
  'Other'
];

const experienceLevels = [
  'Intern',
  'Junior (0-2 years)',
  'Mid (3-5 years)',
  'Senior (6-9 years)',
  'Lead (10+ years)'
];

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    level: '',
    experienceYears: '',
    location: '',
    expectedCtc: '',
    linkedin: '',
    portfolio: '',
    resume: null,
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitNote, setSubmitNote] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const val = type === 'checkbox' ? checked : (files ? files[0] : value);
    setFormData(prev => ({ ...prev, [name]: val }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateRequired(formData.name)) newErrors.name = errorMessages.required;
    if (!validateRequired(formData.email)) newErrors.email = errorMessages.required; 
    else if (!validateEmail(formData.email)) newErrors.email = errorMessages.email;
    if (!validateRequired(formData.phone)) newErrors.phone = errorMessages.required; 
    else if (!validatePhone(formData.phone)) newErrors.phone = errorMessages.phone;
    if (!validateRequired(formData.role)) newErrors.role = errorMessages.required;
    if (!validateRequired(formData.level)) newErrors.level = errorMessages.required;
    if (!validateRequired(formData.location)) newErrors.location = errorMessages.required;
    if (!validateRequired(formData.message)) newErrors.message = errorMessages.required; 
    else if (!validateMinLength(formData.message, 20)) newErrors.message = errorMessages.minLength(20);

    if (!formData.resume) {
      newErrors.resume = 'Please upload your resume (PDF/DOC/DOCX)';
    } else if (formData.resume) {
      const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowed.includes(formData.resume.type)) {
        newErrors.resume = 'Allowed file types: PDF, DOC, DOCX';
      }
      if (formData.resume.size > 5 * 1024 * 1024) {
        newErrors.resume = 'File size must be under 5MB';
      }
    }

    if (!formData.consent) newErrors.consent = 'Please accept the privacy notice';

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
    setSubmitNote('');

    const endpoint = process.env.REACT_APP_CAREERS_FORM_ENDPOINT; // optional integration
    const hrEmail = process.env.REACT_APP_CAREERS_EMAIL || 'info@megainfotech.net'; // optional mailto fallback

    try {
      if (endpoint) {
        const fd = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          if (key === 'resume' && value) fd.append('resume', value);
          else fd.append(key, value);
        });
        const res = await fetch(endpoint, { method: 'POST', body: fd });
        if (!res.ok) throw new Error('Failed to submit');
        setIsSubmitted(true);
        setSubmitNote('Application submitted successfully. We will reach out soon.');
      } else if (hrEmail) {
        const subject = encodeURIComponent(`Job Application: ${formData.role} - ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nExperience Level: ${formData.level}\nYears of Experience: ${formData.experienceYears}\nExpected CTC: ${formData.expectedCtc}\nLinkedIn: ${formData.linkedin}\nPortfolio: ${formData.portfolio}\nRole: ${formData.role}\n\nMessage:\n${formData.message}\n\nNote: Please reply with this email and attach your resume.`
        );
        window.location.href = `mailto:${hrEmail}?subject=${subject}&body=${body}`;
        setIsSubmitted(true);
        setSubmitNote('Opening your mail client. Please attach your resume.');
      } else {
        // Demo mode: no actual submit
        await new Promise(r => setTimeout(r, 1200));
        setIsSubmitted(true);
        setSubmitNote('Demo mode: configure REACT_APP_CAREERS_FORM_ENDPOINT or REACT_APP_CAREERS_EMAIL to enable submissions.');
      }
    } catch (err) {
      setSubmitNote('There was an issue submitting your application. Please try again later.');
    } finally {
      setIsSubmitting(false);
      // Reset form after success
      if (isSubmitted) {
        setFormData({
          name: '', email: '', phone: '', role: '', level: '', experienceYears: '', location: '', expectedCtc: '', linkedin: '', portfolio: '', resume: null, message: '', consent: false,
        });
      }
    }
  };

  return (
    <div className="pt-24">
      <Helmet>
        <title>Careers | Mega Infotech - Join Our Team</title>
        <meta name="description" content="Explore careers at Mega Infotech. Apply for roles in engineering, design, marketing, and operations. Submit your resume and join our team." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-mega-gradient text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Career at Mega Infotech</h1>
            <p className="text-lg md:text-xl text-gray-200">Work on impactful products with a team that values growth, innovation, and ownership.</p>
          </div>
        </div>
      </section>

      {/* Benefits + Open Roles */}
      <section className="py-16 bg-mega-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 cosmic-card p-8">
              <h2 className="text-3xl font-bold mb-6 text-white cosmic-gradient-text">Why Join Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Remote-friendly culture', desc: 'Flexible work with global teams.' },
                  { title: 'Learning & growth', desc: 'Annual budget for courses and conferences.' },
                  { title: 'Inclusive environment', desc: 'Diverse teams and equal opportunities.' },
                  { title: 'Competitive packages', desc: 'Market-standard compensation and benefits.' },
                ].map((b, idx) => (
                  <div key={idx} className="bg-mega-navy/50 border border-accent-cyan/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{b.title}</h3>
                    <p className="text-white/70">{b.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mt-10 mb-4 text-white">Open Roles</h2>
              <div className="space-y-4">
                {roleOptions.slice(0, 6).map((r) => (
                  <div key={r} className="flex items-center justify-between bg-mega-navy/50 border border-accent-cyan/30 rounded-lg p-4">
                    <span className="text-white font-medium">{r}</span>
                    <a href="#apply" className="text-accent-cyan hover:underline">Apply</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div id="apply" className="lg:col-span-1">
              <div className="cosmic-card p-8">
                <h2 className="text-2xl font-bold mb-4 text-white cosmic-gradient-text">Apply Now</h2>

                {isSubmitted && (
                  <div className="bg-accent-cyan/20 border border-accent-cyan text-accent-cyan px-4 py-3 rounded mb-6">
                    {submitNote || 'Thanks! We will get back to you.'}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                      <label className="block text-white/70 mb-2">Full Name *</label>
                      <input name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg bg-mega-navy/50 text-white focus:outline-none ${errors.name ? 'border-red-500' : 'border-accent-cyan/30'}`} placeholder="John Doe" />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-white/70 mb-2">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg bg-mega-navy/50 text-white focus:outline-none ${errors.email ? 'border-red-500' : 'border-accent-cyan/30'}`} placeholder="john@example.com" />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-white/70 mb-2">Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg bg-mega-navy/50 text-white focus:outline-none ${errors.phone ? 'border-red-500' : 'border-accent-cyan/30'}`} placeholder="+1 234 567 8900" />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-white/70 mb-2">Role Applying For *</label>
                      <select name="role" value={formData.role} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg bg-mega-navy/50 text-white focus:outline-none ${errors.role ? 'border-red-500' : 'border-accent-cyan/30'}`}>
                        <option value="">Select role</option>
                        {roleOptions.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                      {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                    </div>

                    <div>
                      <label className="block text-white/70 mb-2">Experience Level *</label>
                      <select name="level" value={formData.level} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg bg-mega-navy/50 text-white focus:outline-none ${errors.level ? 'border-red-500' : 'border-accent-cyan/30'}`}>
                        <option value="">Select level</option>
                        {experienceLevels.map(l => <option key={l} value={l}>{l}</option>)}
                      </select>
                      {errors.level && <p className="text-red-500 text-sm mt-1">{errors.level}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/70 mb-2">Years of Experience</label>
                        <input type="number" min="0" name="experienceYears" value={formData.experienceYears} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg bg-mega-navy/50 text-white focus:outline-none border-accent-cyan/30" placeholder="e.g., 3" />
                      </div>
                      <div>
                        <label className="block text-white/70 mb-2">Expected CTC</label>
                        <input type="text" name="expectedCtc" value={formData.expectedCtc} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg bg-mega-navy/50 text-white focus:outline-none border-accent-cyan/30" placeholder="e.g., ₹10 LPA" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/70 mb-2">Current Location *</label>
                        <input name="location" value={formData.location} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg bg-mega-navy/50 text-white focus:outline-none ${errors.location ? 'border-red-500' : 'border-accent-cyan/30'}`} placeholder="City, Country" />
                        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                      </div>
                      <div>
                        <label className="block text-white/70 mb-2">LinkedIn</label>
                        <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg bg-mega-navy/50 text-white focus:outline-none border-accent-cyan/30" placeholder="https://linkedin.com/in/..." />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/70 mb-2">Portfolio / GitHub</label>
                      <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg bg-mega-navy/50 text-white focus:outline-none border-accent-cyan/30" placeholder="https://github.com/username" />
                    </div>

                    <div>
                      <label className="block text-white/70 mb-2">Resume (PDF/DOC/DOCX) *</label>
                      <input type="file" name="resume" onChange={handleChange} accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className={`w-full px-4 py-3 border rounded-lg bg-mega-navy/50 text-white focus:outline-none ${errors.resume ? 'border-red-500' : 'border-accent-cyan/30'}`} />
                      {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                    </div>

                    <div>
                      <label className="block text-white/70 mb-2">Cover Letter / Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className={`w-full px-4 py-3 border rounded-lg bg-mega-navy/50 text-white focus:outline-none ${errors.message ? 'border-red-500' : 'border-accent-cyan/30'}`} placeholder="Tell us why you’re a great fit." />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1" />
                      <label htmlFor="consent" className="text-white/80">I agree to the processing of my data in accordance with the privacy policy.</label>
                    </div>
                    {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>

                  {!process.env.REACT_APP_CAREERS_FORM_ENDPOINT && !process.env.REACT_APP_CAREERS_EMAIL && (
                    // <p className="text-white/60 text-xs mt-3">Demo mode: set REACT_APP_CAREERS_FORM_ENDPOINT (Formspree/Web3Forms) or REACT_APP_CAREERS_EMAIL to enable live submissions.</p>
                    <p></p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
