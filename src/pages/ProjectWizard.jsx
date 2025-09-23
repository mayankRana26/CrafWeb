import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const stepVariants = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -200, transition: { duration: 0.5 } }
};

function ProjectWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    otherProjectType: '',
    features: [],
    otherFeatures: '',
    name: '',
    email: '',
    message: ''
  });

  const handleNext = () => { setStep(step + 1); };
  const handlePrev = () => { setStep(step - 1); };
  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, features: [...formData.features, value] });
    } else {
      setFormData({ ...formData, features: formData.features.filter(feat => feat !== value) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      projectType: formData.projectType === 'Other' ? formData.otherProjectType : formData.projectType,
      features: formData.features.includes('Other') ? [...formData.features, formData.otherFeatures] : formData.features,
    };
    
    const formspreeUrl = "https://formspree.io/f/myzngpwr";
    fetch(formspreeUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(finalData)
    })
    .then(response => {
      if (response.ok) {
        setStep(4);
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="text-center">
            <h3 className="text-3xl font-bold mb-6">What kind of project do you have?</h3>
            <div className="space-y-4">
              <button onClick={() => { setFormData({ ...formData, projectType: 'Custom Web App' }); handleNext(); }} className="w-full py-4 px-6 bg-gray-800 rounded-lg text-left hover:bg-gray-700 transition-colors duration-300">Custom Web App</button>
              <button onClick={() => { setFormData({ ...formData, projectType: 'Business Website' }); handleNext(); }} className="w-full py-4 px-6 bg-gray-800 rounded-lg text-left hover:bg-gray-700 transition-colors duration-300">Business Website</button>
              <button onClick={() => { setFormData({ ...formData, projectType: 'Personal Portfolio' }); handleNext(); }} className="w-full py-4 px-6 bg-gray-800 rounded-lg text-left hover:bg-gray-700 transition-colors duration-300">Personal Portfolio</button>
              <button onClick={() => { setFormData({ ...formData, projectType: 'Other' }); handleNext(); }} className="w-full py-4 px-6 bg-gray-800 rounded-lg text-left hover:bg-gray-700 transition-colors duration-300">Other</button>
              {formData.projectType === 'Other' && (
                <input type="text" name="otherProjectType" placeholder="Please specify..." value={formData.otherProjectType} onChange={handleChange} className="w-full bg-gray-700 rounded-lg p-3" required />
              )}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="text-center">
            <h3 className="text-3xl font-bold mb-6">What features do you need?</h3>
            <div className="space-y-4 text-left">
              <label className="flex items-center space-x-2"><input type="checkbox" name="features" value="User Login/Auth" onChange={handleFeatureChange} className="rounded" /><span>User Login/Authentication</span></label>
              <label className="flex items-center space-x-2"><input type="checkbox" name="features" value="Admin Dashboard" onChange={handleFeatureChange} className="rounded" /><span>Admin Dashboard</span></label>
              <label className="flex items-center space-x-2"><input type="checkbox" name="features" value="Real-time Chat" onChange={handleFeatureChange} className="rounded" /><span>Real-time Chat</span></label>
              <label className="flex items-center space-x-2"><input type="checkbox" name="features" value="Database Integration" onChange={handleFeatureChange} className="rounded" /><span>Database Integration</span></label>
              <label className="flex items-center space-x-2"><input type="checkbox" name="features" value="Other" onChange={handleFeatureChange} className="rounded" /><span>Other</span></label>
              {formData.features.includes('Other') && (
                <input type="text" name="otherFeatures" placeholder="Please specify..." value={formData.otherFeatures} onChange={handleChange} className="w-full bg-gray-700 rounded-lg p-3" required />
              )}
            </div>
            <div className="mt-8 flex justify-between">
              <motion.button onClick={handlePrev} className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Previous</motion.button>
              <motion.button onClick={handleNext} className="px-6 py-2 bg-cyan-500 text-gray-900 rounded-lg hover:bg-cyan-400 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Next</motion.button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div key="step3" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="text-center">
            <h3 className="text-3xl font-bold mb-6">Almost done!</h3>
            <p className="text-lg text-gray-400 mb-6">Tell us about your project and contact details.</p>
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full bg-gray-800 rounded-lg p-3" required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full bg-gray-800 rounded-lg p-3" required />
              <textarea name="message" placeholder="Tell us more about your project..." value={formData.message} onChange={handleChange} rows="4" className="w-full bg-gray-800 rounded-lg p-3" required></textarea>
              <motion.button type="submit" className="w-full py-3 bg-cyan-500 text-gray-900 rounded-lg hover:bg-cyan-400 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Submit Brief <FaArrowRight className="inline ml-2" />
              </motion.button>
            </form>
            <motion.button onClick={handlePrev} className="mt-4 px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Previous</motion.button>
          </motion.div>
        );
      case 4:
        return (
          <motion.div key="step4" variants={stepVariants} initial="initial" animate="animate" className="text-center">
            <h3 className="text-3xl font-bold mb-6">Thanks for your message!</h3>
            <p className="text-lg text-gray-400">
              We'll review your project brief and get back to you within 24 hours.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-900 text-white py-20 px-8 min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-lg">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ProjectWizard;