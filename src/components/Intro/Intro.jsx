 
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { About } from '../About/About';
 
 

   


 export const Intro = () => {
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
    <>
    <section className="min-h-screen flex flex-col justify-center items-center  px-6 text-white " 
    style={{backgroundImage: 'url("/bg-1.jpg")', backgroundRepeat: 'no-repeat' , backgroundSize: 'cover', backgroundPosition: 'center' ,zIndex:'60'}}>  
      <motion.div
        className="flex gap-1 flex-wrap text-4xl sm:text-5xl md:text-6xl font-extrabold z-50 shadow-2xl p-6 bg-white/20 backdrop-blur-md rounded-lg "
        variants={container}
        animate="animate"
      >
        {letters.map((char, index) => (
          <motion.span key={index} variants={child}>
            {char}
          </motion.span>
        ))}
        <motion.span variants={child}>👋</motion.span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 text-center text-lg sm:text-xl md:text-2xl max-w-xl z-50"
      >
        Frontend Developer | Building expressive interfaces with React & Tailwind ✨
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-10 space-x-4"
      > 
      </motion.div>
      <motion.div className='flex space-x-4'>
      <button className="mt-10 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-lg hover:bg-white/30 transition z-50">
        <a href="/VishakhaResume.pdf" download className="text-lg font-semibold">
          Download Resume
        </a>
      </button>
      <button className="mt-10 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-lg hover:bg-white/30 transition z-50">
        <NavLink to='/about' className="text-lg font-semibold">
          About Me
        </NavLink>
      </button>
      </motion.div>
       

     
      
    </section>
     
   
  
 
 

      </>
  );
};

 
