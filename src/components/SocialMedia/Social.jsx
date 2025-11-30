 import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Social = () => {
  const navigate = useNavigate();

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vishakha-sharma-0a056032a' },
    { name: 'Instagram', url: 'https://www.instagram.com/vishakhasharma8810/' },
    { name: 'Github', url: 'https://github.com/vishakha1412' },
    { name: 'Email', url: 'mailto:vish60617@gmail.com' },
  ];
 return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-10 text-white"
      style={{
        scrollBehavior: 'smooth',
        backgroundImage: 'url(/bg1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 flex items-center gap-3 text-center"
      >
        <span><motion.span
  initial={{ y: 0 }}
  animate={{ y: [0, -10, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
>
  🚀
</motion.span>
</span> CONNECT WITH ME...
      </motion.h1>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-lg px-6 py-5 rounded-xl text-lg font-semibold text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center text-center"
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <NavLink
          to="/"
   className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-purple-600 hover:via-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full shadow-xl font-semibold text-lg transition-all duration-300"
        >
          Back to Home
        </NavLink>
      </motion.div>
    </div>
  );
};

