 import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { NavLink } from 'react-router-dom';

AOS.init();

const certificates = [
  {
    title: 'MERN Stack Development',
    issuer: 'Udemy',
    date: 'Novemer 2025',
    image: '/cert1.jpg',
  },
  {
    title: 'Data Science',
    issuer: '1stop',
    date: 'february 2025',
    image: '/cert2.png',
  },
  {
    title: 'Frontend Development',
    issuer: 'Elite Coder',
    date: 'November 2025',
    image: '/cert3.png',
  },
];
export const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-600 to-purple-500 text-white px-4 sm:px-8 py-12 flex flex-col items-center"
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
        className="text-4xl font-extrabold border-b-4 border-white mb-10 text-center"
      >
        My Certificates
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl overflow-hidden"
          >
            <img
 src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-amber-300 mb-2">{cert.title}</h2>
              <p className="text-sm">{cert.issuer} • {cert.date}</p>
              <button
                onClick={() => setSelectedCert(cert)}
                className="mt-4 inline-block bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
              >
                View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full mx-4"
              initial={{ scale: 0.8 }}
 animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto" />
              <div className="p-4 text-center bg-gradient-to-r from-teal-400 via-blue-600 to-purple-500 text-white">
                <h2 className="text-xl font-bold">{selectedCert.title}</h2>
                <p className="text-sm">{selectedCert.issuer} • {selectedCert.date}</p>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="mt-4 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
       <button className="mt-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500  backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-lg hover:bg-white/30 transition">
        <NavLink to='/social' className="text-lg font-semibold">
          Contact
        </NavLink>
      </button>

    </div>
  );
};
