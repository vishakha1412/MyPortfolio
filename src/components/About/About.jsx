 import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

export const About = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-600 to-teal-400 text-white px-4 sm:px-8 py-10 flex flex-col justify-center items-center"
      style={{
        backgroundImage: 'url("/bg1.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold border-b-4 border-white mb-8 text-center"
      >
 About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/vish.jpg"
            alt="Profile"
            className="w-72 h-auto rounded-3xl border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl p-6 shadow-xl text-lg font-medium max-w-xl text-left"
        >
          <p className="mb-4 text-white">
            <strong className="text-amber-300">I am Vishakha Sharma.</strong><br />
            I enjoy learning new skills and building creative solutions to real-world problems.
          </p>
          <p className="text-white">
            Hey! I'm currently in my second year of B.Tech, riding the highs and lows of the engineering hustle. Somewhere between 8 AM lectures and late-night code bugs, I’ve found myself drawn to the world of frontend development—especially building with React, Tailwind CSS, and APIs that make things actually feel alive. What started as curiosity has turned into a full-on creative quest: designing mood-based interfaces, experimenting with dashboard ideas, and piecing together projects that reflect who I am (and who I’m becoming). Still learning, still growing—and loving the process, even when it's messy.
          </p>
        </motion.div>
      </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        <motion.div
          data-aos="fade-up"
          className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-xl font-bold text-amber-300 mb-2">Education</h2>
          <p>B.Tech in Computer Science<br />JSS Academy of Technical Education<br />2024 - 2028</p>
        </motion.div>

        <motion.div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-xl font-bold text-amber-300 mb-2">Interests</h2>
          <p>Frontend Development, API's</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-10"
      >
        <NavLink to="/skill">
          <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500 text-white px-8 py-3 rounded-full shadow-xl text-lg font-semibold transition-all duration-300">
            Explore my Skills
          </button>
        </NavLink>
      </motion.div>
    </div>
  );
};
