import React from 'react'
import { Skills } from './Skills'
import { NavLink } from 'react-router-dom';

export const Skill = () => {
  return (
     <>
      <>
          <div className="min-h-screen flex flex-col  items-center  bg-gradient-to-br  from-teal-400 via-blue-600 to-teal-400 px-6 text-white">
           <Skills/>
            <button className="mt-10 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-lg hover:bg-white/30 transition">
        <NavLink to='/project' className="text-lg font-semibold">
          Explore my  projects
        </NavLink>
      </button>
            </div>
          
          </>
     </>
  )
}
