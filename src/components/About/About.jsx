import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaGraduationCap, FaLaptopCode, FaBrain } from 'react-icons/fa';

export const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold border-b-4 border-white mb-8 text-center"
      >
        About Me
      </motion.h1>

      {/* Profile + Bio */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/vish.jpg"
            alt="Profile"
            className="w-72 h-auto rounded-3xl border-4 border-white hover:scale-105 transition-transform duration-300 shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl p-6 shadow-xl text-lg font-medium max-w-xl text-left shadow-gray-200"
        >
          <p className="mb-4 text-white">
            <strong className="text-amber-300">I’m Vishakha Sharma.</strong><br />
            I build products, not just projects.
          </p>
          <p className="mb-4 text-white">
            I’m a Third-year B.Tech student focused on full-stack development using the MERN stack, creating applications that are functional, scalable, and user-focused.
          </p>
          <p className="mb-4 text-white">
            I’ve worked on projects involving real-world features like authentication, APIs, and responsive UI, while continuously improving my problem-solving and development workflow.
          </p>
          <p className="text-white">
            Currently, I’m exploring Generative AI and multi-agent systems, learning how intelligent workflows can be integrated into modern applications.
          </p>
        </motion.div>
       
      </div>
        <button
    className="px-4 py-2 rounded-lg font-semibold text-black shadow-lg transition-all duration-300 bg-gradient-to-r from-fuchsia-300 via-slate-300 to-cyan-300 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 m-2 min-w-2xs xl:min-w-xl max-md:min-w-full text-center hover:scale-105 hover:shadow-xl font-serif hover:text-white mt-6"
    aria-label="Download Resume"
  >
    <a href="/VishakhaResume.pdf" download className="block text-center text-base sm:text-lg">
      Download Resume
    </a>
  </button>
       
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        
       
        <motion.div
          data-aos="fade-up"
          className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300 shadow-gray-50"
        >
          <div className="flex justify-center mb-4">
            <FaGraduationCap className="text-amber-300 text-5xl drop-shadow-lg transform hover:rotate-12 transition-transform duration-300" />
          </div>
          <h2 className="text-xl font-bold text-amber-300 mb-2">Education</h2>
          <p className="text-white">
            B.Tech in Computer Science <br />
            JSS Academy of Technical Education <br />
            2024 - 2028
          </p>
        </motion.div>

       
        <motion.div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300 shadow-gray-50"
        >
          <div className="flex justify-center mb-4">
            <FaLaptopCode className="text-amber-300 text-5xl drop-shadow-lg transform hover:rotate-12 transition-transform duration-300" />
          </div>
          <h2 className="text-xl font-bold text-amber-300 mb-2">Tech Stack</h2>
          <p className="text-white">
            MERN Stack <br />
            MongoDB, Express, React, Node.js <br />
            APIs & Git
          </p>
        </motion.div>

        
        <motion.div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300 shadow-gray-50"
        >
          <div className="flex justify-center mb-4">
            <FaBrain className="text-amber-300 text-5xl drop-shadow-lg transform hover:rotate-12 transition-transform duration-300" />
          </div>
          <h2 className="text-xl font-bold text-amber-300 mb-2">Current Focus</h2>
          <p className="text-white">
            Generative AI <br />
            Multi-Agent Systems <br />
            Real-world Project Building
          </p>
        </motion.div>
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-10"
      >
        <NavLink to="/skill">
          <button className="px-4 py-2 rounded-lg font-semibold text-black shadow-lg transition-all duration-300 bg-gradient-to-r from-fuchsia-300 via-slate-300 to-cyan-300 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 m-2 min-w-md max-md:min-w-full text-center hover:scale-105 hover:shadow-xl font-serif hover:text-white mt-10 shadow-gray-400">
            Explore my Skills
          </button>
        </NavLink>
      </motion.div>
    </div>
  );
};
