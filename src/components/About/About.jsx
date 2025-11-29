import React from 'react'
import { NavLink } from 'react-router-dom';

export const About = () => {
return (
    <>
        <div className="min-h-screen bg-gradient-to-br   from-teal-400 via-blue-600 to-teal-400 text-center  px-6 text-white flex flex-col justify-center items-center"  style={{backgroundImage: 'url("/bg1.jpg")', backgroundRepeat: 'no-repeat' , backgroundSize: 'cover',opacity:'0.9' ,}}>
            <h1 className='text-center text-2xl border-b-4'>About Me</h1>
            <div className='flex max-md:flex-col md:flex-row items-center justify-center max-md:mb-6 md:mb-0 md:space-x-6 '>
                
            <div>
                <img src="/vish.jpg" alt="Profile"  data-aos="zoom-out" className="max-w-md  h-116 rounded-2xl border-4 border-white mb-4 shadow-lg mt-3 " />
            </div>
             
            <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg max-w-md lg:max-w-lg mx-auto font-bold  transition-all duration-150  hover:outline-amber-200' data-aos="zoom-out">
                I am Vishakha Sharma.<br/>
                 
                
                I enjoy learning new skills and building creative solutions to real-world problems.<br/> 
                <br/>
                Hey! I'm currently in my second year of B.Tech, riding the highs and lows of the engineering hustle. Somewhere between 8 AM lectures and late-night code bugs, I’ve found myself drawn to the world of frontend development—especially building with React, Tailwind CSS, and APIs that make things actually feel alive. What started as curiosity has turned into a full-on creative quest: designing mood-based interfaces, experimenting with dashboard ideas, and piecing together projects that reflect who I am (and who I’m becoming). Still learning, still growing—and loving the process, even when it's messy.



            </div>
          
            </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6   text-center  flex justify-center items-center '>
                <div className='bg-gray/20 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg  font-semibold transition-all duration-150  hover:outline-amber-200' data-aos="fade-up">
                  <h2 className='text-xl mb-2'>Education</h2>
                  <p>B.Tech in Computer Science<br/>JSS ACADEMY OF TECHNICAL EDUCATION<br/>2024 - 2028</p>
                </div>
                <div className='bg-gray/20 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg  font-semibold transition-all duration-150  hover:outline-amber-200' data-aos="fade-up" data-aos-delay="100">
                  <h2 className='text-xl mb-2'>Interests</h2>
                  <p>Frontend Development, UI/UX Design, Problem Solving</p>
                </div>
                

            </div>
             <button className="mt-10 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-lg hover:bg-white/30 transition">
        <NavLink to='/skill' className="text-lg font-semibold">
          Explore my Skills
        </NavLink>
      </button>
        </div>
       
    </>
)
}
