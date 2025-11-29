 import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const name = "Vishakha Sharma";
  const letters = name.split("");

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
      },
    },
  };
 const child = {
    animate: {
      y: [0, -10, 0],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-10 text-white text-center"
      style={{
        backgroundImage: 'url("/bg1.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: '60',
      }}
      aria-label="Intro section with animated name and role"
    >
      {/* Animated Name */}
      <motion.div
        className="flex gap-1 flex-wrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold z-50 shadow-2xl p-4 sm:p-6 bg-white/20 backdrop-blur-md rounded-lg"
        variants={container}
        animate="animate"
        role="heading"
        aria-level="1"
      >
{letters.map((char, index) => (
          <motion.span key={index} variants={child}>
            {char}
          </motion.span>
        ))}
        <motion.span variants={child}>👋</motion.span>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-[90%] sm:max-w-xl z-50"
        data-aos="fade-up"
      >
        Frontend Developer | Building expressive interfaces with React & Tailwind ✨
      </motion.p>

    
      <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.5, duration: 0.8 }}
  className="mt-10 flex flex-col sm:flex-row items-center gap-4 z-50"
  data-aos="fade-up"
>
  
  <button
    className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300  bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
    aria-label="Download Resume"
  >
    <a href="/VishakhaResume.pdf" download className="block text-center text-base sm:text-lg">
      Download Resume
    </a>
  </button>

 
  <button
    className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
    aria-label="Navigate to About Me"
  >
    <NavLink to='/about' className="block text-center text-base sm:text-lg">
      About Me
    </NavLink>
  </button>
</motion.div>

    </section>
  );
};

