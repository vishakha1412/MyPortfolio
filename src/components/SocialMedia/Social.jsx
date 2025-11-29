import React from 'react'
import { NavLink, useNavigate } from 'react-router'
 


export const Social = () => {
  const navigate=useNavigate();

  const socialLinks = [
  { name: 'LinkedIn', url:'https://www.linkedin.com/in/vishakha-sharma-0a056032a' },
  { name: 'Instagram', url: 'https://www.instagram.com/vishakhasharma8810/' },
  { name: 'Github', url: 'https://github.com/vishakha14' },
  { name: 'Email', url: 'mailto:vish60617@gmail.com' },
  
];


  return (
    <>
     <div className="min-h-screen flex flex-col  items-center  bg-gradient-to-br  from-teal-400 via-blue-600 to-teal-400 px-6 text-white" 
     style={{ scrollBehavior: 'smooth', backgroundImage:'url(/bg1.jpg)' , backgroundSize: 'cover', backgroundPosition: 'center' }}> 
    
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-2  mt-5">
        <span>🚀</span> CONNECT WITH ME...
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl text-lg font-medium text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl text-cente min-h-40 min-w-2xs flex items-center justify-center"
          >
            {link.name}
          </a>
        ))}
      </div>
       <button className="mt-10 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-lg hover:bg-white/30 transition">
              <NavLink to='/' className="text-lg font-semibold">
                Back to Home
              </NavLink>
            </button>
    </div>

   
    </>
    

 
    
     
 
     
  )
}
