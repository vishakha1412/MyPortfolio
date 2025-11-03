import React from 'react'
 
import { AuraList } from './AuraList'
import { NavLink } from 'react-router'
import { MyntraClon } from './MyntraClon'
import { BookStore } from './BookStore'
import { Trendteller  } from './TrendTeller'
 
//import { TrendTeller } from './TrendTeller'
//  <NavLink to='https://trend-teller.vercel.app/'><TrendTeller /></NavLink>
export const Project = () => {
  return (
     <>
     <div className="h-full gap-5 flex flex-col justify-center items-center  bg-gradient-to-br  from-teal-400 via-blue-600 to-teal-400 px-6 text-white ">
       <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-x-2 gap-4 text-center overflow-hidden h-full m-8'> 
      <NavLink  to='https://aura-list.vercel.app/'> <AuraList /></NavLink> 
      <NavLink to ='https://myntraclone-sigma.vercel.app/'><MyntraClon/></NavLink>
      <NavLink to='https://book-store-tau-mauve.vercel.app/'><BookStore /></NavLink>
       <NavLink to='https://trend-teller.vercel.app/'><Trendteller/></NavLink>
    
       
       </div>
     </div>
     </>
  )
}
