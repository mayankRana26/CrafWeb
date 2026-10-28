import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

// Separate component for the animated number
const Counter = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: duration });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const milestonesData = [
  { image: "/twenty-dev.png", stat: 20, suffix: "+", title: "Developers on Board" },
  { image: "/one-fifty-Project.png", stat: 150, suffix: "+", title: "Projects Delivered" },
  { image: "/setisfied-client.png", stat: 100, suffix: "%", title: "Satisfied Clients" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

function Milestones() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.section
      className="bg-gray-900 text-white py-20 px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {milestonesData.map((milestone, index) => (
            <motion.div
              key={index}
              className="relative group p-10 bg-gray-900/50 border border-gray-800 rounded-2xl backdrop-blur-sm overflow-hidden flex flex-col items-center cursor-pointer hover:border-cyan-500/50 transition-colors duration-500"
              onClick={handleScrollToTop}
              variants={itemVariants}
              whileHover={{ y: -12 }}
            >
              {/* Decorative Background Glow */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full group-hover:bg-cyan-500/20 transition-all" />
              
              <div className="relative mb-6 p-4 bg-gray-800 rounded-full ring-4 ring-gray-900 shadow-xl">
                <img src={milestone.image} alt={milestone.title} className="w-16 h-16 object-contain" />
              </div>

              <h3 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                <Counter value={milestone.stat} />{milestone.suffix}
              </h3>
              
              <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                {milestone.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Milestones;