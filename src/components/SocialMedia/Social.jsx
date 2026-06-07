import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export const Social = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vishakha-sharma-0a056032a",
      icon: <FaLinkedin className="text-blue-500" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/vishakhasharma.1412/",
      icon: <FaInstagram className="text-pink-500" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/vishakha1412",
      icon: <FaGithub className="text-gray-300" />,
    },
    {
      name: "Email",
      url: "mailto:vish60617@gmail.com",
      icon: <FaEnvelope className="text-red-400" />,
    },
  ];

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-10 text-white"
      style={{
        scrollBehavior: "smooth",
        backgroundImage: "url(/bg1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 flex items-center gap-3 text-center"
      >
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🚀
        </motion.span>
        CONNECT WITH ME...
      </motion.h1>

      {/* Social Cards */}
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
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="bg-white/10 backdrop-blur-lg px-6 py-5 rounded-xl text-lg font-semibold text-white 
                       hover:bg-white/20 transition-all duration-300 shadow-lg flex flex-col items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-4xl mb-3"
            >
              {link.icon}
            </motion.div>
            {link.name}
          </motion.a>
        ))}
      </div>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <NavLink
          to="/"
          className="px-4 py-2 rounded-lg font-semibold text-black shadow-lg transition-all duration-300 bg-gradient-to-r from-fuchsia-300 via-slate-300 to-cyan-300 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 m-2 min-w-md max-md:min-w-full text-center hover:scale-105 hover:shadow-xl font-serif hover:text-white mt-10"
        >
          Back to Home
        </NavLink>
      </motion.div>
    </div>
  );
};
