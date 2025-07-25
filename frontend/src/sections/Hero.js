import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    y: [0, -15, 0], // Keyframes for a subtle floating animation
    transition: {
      // Entrance animation for opacity and scale
      opacity: { duration: 0.8, ease: "easeInOut" },
      scale: { duration: 0.8, ease: "easeInOut" },
      // Perpetual floating animation for the y-axis
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.8 // Start floating after the entrance is complete
      }
    }
  },
};

function Hero() {
  return (
    <section className="w-full flex items-center justify-center py-16 md:py-20 bg-bg text-text">
      <motion.div 
        className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
            variants={itemVariants}
          >
            Where Vision Meets <span className="text-accent-hover">Inspiration</span>.
          </motion.h1>
          <motion.p 
            className="text-md sm:text-lg md:text-xl mb-8 max-w-lg opacity-80"
            variants={itemVariants}
          >
            Join a global community of photographers. Share your work, discover new talent, and find your next creative spark.
          </motion.p>
          <motion.button 
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-btn hover:bg-btn-hover text-white font-bold text-lg"
            variants={itemVariants}
          >
            Start Your Journey
          </motion.button>
        </div>

        {/* Image Content */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          variants={imageVariants}
        >
          <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl shadow-2xl overflow-hidden transform md:rotate-3">
            <img 
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" 
              alt="Photographer with camera"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero; 