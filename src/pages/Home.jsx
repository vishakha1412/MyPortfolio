import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Intro } from '../components/Intro/Intro';
import TechAnimation from './components/TechAnimation';
import {Miniprojects} from './components/Miniprojects';
import { Connection } from './components/Connection';

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const rout=[
    {name:"About ->",link:"/about"},
    {name:"Experience ->",link:"/experience"},
    {name:"Projects ->",link:"/landingproject"},
    {name:"Certificates ->",link:"/certificate"},
    {name:"Skills ->",link:"/skill"},
  

  ]
 
 

  return (
    <div className='bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 min-h-screen' 
      style={{
        backgroundImage: 'url("/bg1.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
         backgroundPosition: 'center',
         zIndex: '60',
      }}
      aria-label="Home page with intro, about, projects, certificates, and contact sections"
            
            >
      
      <Intro/> 
     
     <TechAnimation/>
  
    <section
  id="about"
  className="flex flex-col justify-center items-center px-6 py-8 text-black  mt-10  mx-6 rounded-xl shadow-lg shadow-gray-400    border-2 border-gray-300    "
>
 
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-extrabold mb-2 tracking-wide text-transparent bg-clip-text font-serif  bg-white/90 "
  >
    About Me
  </motion.h2>

 
  <motion.div className="max-w-fit text-center bg-gradient-to-r from-gray-200 via-yellow-50 to-gray-300 p-6 rounded-lg shadow space-y-6 border-2 border-gray-300">
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="max-w-3xl text-center  leading-relaxed text-gray-700 text-lg font-semibold"
  >
  I’m Vishakha Sharma, a third‑year B.Tech student specializing in full‑stack development with the MERN stack. I focus on building scalable, user‑centric applications and am currently exploring Generative AI and multi‑agent systems to integrate intelligent workflows into modern products.
  </motion.p>
  </motion.div>

 
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="mt-5"
  >
    <NavLink
      to="/about"
      className="px-4 py-2 rounded-lg font-semibold text-black shadow-lg transition-all duration-300 bg-gradient-to-r from-fuchsia-300 via-slate-300 to-cyan-300 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 m-2 min-w-md max-md:min-w-full text-center hover:scale-105 hover:shadow-xl font-serif hover:text-white"
    >
      Learn More About Me
    </NavLink>
  </motion.div>
</section>

<Miniprojects/>

   <div className=" w-full flex flex-col items-center justify-center px-4 py-10 text-white">
        {
            rout.map((item,index)=><NavLink key={index} to={item.link} className="px-4 py-2 rounded-lg font-semibold text-black shadow-lg transition-all duration-300 bg-gradient-to-r from-fuchsia-300 via-slate-300 to-cyan-300 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 m-2 min-w-md max-md:min-w-full text-center hover:scale-105 hover:shadow-xl font-serif hover:text-white">
                {item.name}
            </NavLink>)
        }
       
   </div>

     <Connection/>
    </div>
  );
};
