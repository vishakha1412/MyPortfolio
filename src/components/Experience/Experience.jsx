import React from 'react'
import { NavLink } from 'react-router'

 
import { FcBiotech } from "react-icons/fc";

export const Experience = () => {
  return (
     <>
     <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br  from-teal-400 via-blue-600 to-teal-400 px-6 text-whites"   >
      <div>
        <h2 className='text-white  ' data-aos="zoom-out">💼 Experience</h2>
        <div className='bg-white/10 backdrop-blur-md  border-white/20  object-cover text-centers rounded-xl p-6 shadow-lg max-w-md mx-auto font-bold  transition-all duration-150 text-white ' data-aos="zoom-out"> 
          <h1 className='text-white'>SIH Participation</h1>
          <div className=  'text-white ' > <FcBiotech />Participation in national level hackthon.</div>

        </div>

        
         

      </div>
       <button className="mt-10 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-lg hover:bg-white/30 transition">
        <NavLink to='/social' className="text-lg font-semibold">
          Contact Me
        </NavLink>
      </button>
      </div>
     </>
  )
}
//<div className='bg-white/10 backdrop-blur-md  border-white/20  object-cover text-centers rounded-xl p-6 shadow-lg max-w-md mx-auto font-bold  transition-all duration-150 text-white ' data-aos="zoom-out"> <FcBiotech /> No formal gigs yet — but I’ve been learning by doing. From debugging React apps at 2AM to crafting playful UIs and wrangling APIs, every project in my portfolio is a hands-on dive into the dev world. I treat each one as a mini-experiment in design, code, and growth.</div>
