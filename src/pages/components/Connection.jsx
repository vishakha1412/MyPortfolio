import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export const Connection = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vishakha-sharma-0a056032a",
      icon: <FaLinkedin className="text-blue-500" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/vishakhasharma8810/",
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
      className=" w-full flex flex-col items-center justify-center px-4 py-10 text-white"
      
    >
  
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg sm:text-xl md:text-2xl font-bold mb-10 flex items-center gap-3 text-center"
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
            className="bg-white/10 backdrop-blur-lg px-2 py-2 rounded-xl text-lg font-semibold text-white 
                       hover:bg-white/20 transition-all duration-300 shadow-md flex flex-col items-center justify-center shadow-gray-50 border-2"
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
    </div>
  );
};
