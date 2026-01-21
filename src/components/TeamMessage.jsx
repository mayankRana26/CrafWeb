import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiTrendingUp, FiLayers } from 'react-icons/fi'; // Optional: install react-icons

const TeamMessage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 px-6 md:px-16">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-gray-500 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-gray-500 rounded-full blur-3xl opacity-50" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span variants={itemVariants} className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-widest text-cyan-600 uppercase bg-cyan-50 rounded-full">
            Our Philosophy
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-cyan-400 mb-6 tracking-tight">
            Message from the <span className="text-blue-900">Crafweb</span> Team
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Message (Left Side) */}
          <motion.div variants={itemVariants} className="space-y-6 text-gray-200 leading-relaxed text-lg">
            <p>
              At <span className="font-bold text-blue-900 border-b-2 border-cyan-400">Crafweb</span>, we are dedicated to delivering high-quality digital solutions 
              that empower businesses to grow, adapt, and succeed in an ever-evolving online landscape.
            </p>
            <p>
              We understand that every business has unique goals. That is why we focus on creating customized 
              websites that are not only visually appealing but also strategically designed to meet 
              specific business objectives.
            </p>
            <p className="hidden md:block">
              We do not simply create websites — we create digital experiences that inspire trust, enhance credibility, and 
              support long-term business growth. Your success is our priority.
            </p>
          </motion.div>

          {/* Key Pillars (Right Side - Visual Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard 
              icon={<FiLayers className="text-cyan-500" />}
              title="Scalable Design"
              text="Future-ready solutions built to grow with your business."
            />
            <FeatureCard 
              icon={<FiShield className="text-blue-500" />}
              title="Secure & Reliable"
              text="Priority on data protection and consistent performance."
            />
            <FeatureCard 
              icon={<FiTrendingUp className="text-indigo-500" />}
              title="Growth Focused"
              text="Strategically designed to drive meaningful engagement."
            />
            <FeatureCard 
              icon={<FiCheckCircle className="text-emerald-500" />}
              title="Quality Driven"
              text="Following a structured approach for the highest standards."
            />
          </div>
        </div>

        {/* Footer/Signature */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-2xl font-serif italic text-cyan-300">
            "Your success is our priority, and we are committed to delivering solutions that make a real difference."
          </p>
          <div className="mt-6">
            <p className="font-black text-blue-800 text-xl tracking-tighter">— Team Crafweb</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Helper Component for the Grid Cards
const FeatureCard = ({ icon, title, text }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
  >
    <div className="text-2xl mb-3">{icon}</div>
    <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
    <p className="text-sm text-gray-500 leading-snug">{text}</p>
  </motion.div>
);

export default TeamMessage;