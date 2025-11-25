 import { NavLink } from 'react-router';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white shadow-lg  sticky top-0 z-50 border-b-2 border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
         
        <div className="text-xl font-bold tracking-wide ">
          <NavLink to='/' className='font-serif'>𝓿𝓲𝓼𝓱</NavLink>

        </div>

        
        <div className="space-x-6 hidden md:flex   ">
          
           <NavLink to="/about" className="hover:text-white-200 transition hover:bg-blue-600  hover:px-2 hover:rounded-4xl font-bold font-serif ">About</NavLink> 
           <NavLink to="/skill" className="hover:text-white-200 transition  hover:bg-blue-600  hover:px-2 hover:rounded-4xl font-bold font-serif">Skills</NavLink> 
             <NavLink to="/landingproject" className="hover:text-white-200 transition  hover:bg-blue-600  hover:px-2 hover:rounded-4xl font-bold font-serif">MyProjects</NavLink>
            
          <NavLink to="/experience" className="hover:text-white-200 transition  hover:bg-blue-600  hover:px-2 hover:rounded-4xl font-bold font-serif">Experience</NavLink>
           <NavLink to="/social" className="hover:text-white-200 transition hover:bg-blue-600  hover:px-2 hover:rounded-4xl  font-serif font-bold">Contact</NavLink> 

        </div>

         
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2      text-white flex flex-col">
            <NavLink  to="/about" className="hover:text-white-200 transition hover:bg-blue-600  hover:px-2 hover:rounded-4xl font-bold font-serif">About</NavLink> 
           <NavLink to="/skill" className="hover:text-white-200 transition  hover:bg-blue-600  hover:px-2 hover:rounded-4xl font-bold font-serif">Skills</NavLink> 
           <NavLink to="/landingproject" className="hover:text-white-200 transition  hover:bg-blue-600  hover:px-2 hover:rounded-4xl font-bold font-serif">MyProjects</NavLink>
              
          <NavLink to="/experience" className="hover:text-white-200 transition  hover:bg-blue-600  hover:px-2 hover:rounded-4xl font-bold font-serif">Experience</NavLink>
           <NavLink to="/social" className="hover:text-white-200 transition hover:bg-blue-600  hover:px-2 hover:rounded-4xl font-bold font-serif">Contact</NavLink> 
        </div>
      )}
    </nav>
  );
};

export default Header

  
