import React from 'react'
import { NavLink, useNavigate } from 'react-router';
 
export const Skills = () => {
  const navigate=useNavigate();
 const skills = [
  { name: 'HTML', url: '/' },
  { name: 'CSS', url: '/' },
  { name: 'JavaScript', url: '/' },
  { name: 'React.js', url: ' https://react.dev/' },
  { name: 'Tailwind', url: ' https://tailwindcss.com/docs/installation/using-vite' },
//  { name: 'Node.js', url: 'https://twitter.com/vishakha_codes' },
  //{ name: 'Express.js', url: 'https://twitter.com/vishakha_codes' },
//  { name: 'MongoDB', url: 'https://twitter.com/vishakha_codes' },
  { name: 'Java', url: 'https://twitter.com/vishakha_codes' },
  { name: 'Git', url: 'https://twitter.com/vishakha_codes' },
  { name: 'Responsive Design', url: 'https://twitter.com/vishakha_codes' },
  { name: 'Redux', url: ' https://redux-toolkit.js.org/' },
 // { name: 'Mongoose', url: 'https://twitter.com/vishakha_codes' },
  { name: 'API Integration', url: 'https://twitter.com/vishakha_codes' },
  { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
 // { name: 'Figma', url: 'https://twitter.com/vishakha_codes' },
  { name: 'VS Code', url: 'https://twitter.com/vishakha_codes' },
  { name: 'Postman', url: 'https://twitter.com/vishakha_codes' },
  {name:'Python',url:'https://www.python.org/'}
 

 ]

   return (
    <section className="">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl  mt-15 font-bold text-center mb-6">🚀 Skills & Tech Stack</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center space-x-4">
          {skills.map((skill, index) => (
            <li
              key={index}
               data-aos="fade-right"
              className="bg-white/10 backdrop-blur-md border border-white/20 py-4 px-4 shadow hover:scale-115 transition transform  rounded-full animation-spin  flex justify-center items-center curser-arrow min-h-20 min-w-2xs" onClick={navigate('/')}
            >
              <NavLink to={skill.url}>{skill.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
       
    </section>
  );

    
  
}
