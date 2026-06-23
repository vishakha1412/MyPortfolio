import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const domains = [
  { label: "Web Development", path: "web", color: "from-purple-500 to-indigo-600" },
  { label: "CodingLanguage", path: "CodingLanguage", color: "from-green-500 to-teal-500" },
  { label: "AI/ML and Data Scinece", path: "ai", color: "from-pink-500 to-red-500" },
  { label: "Design", path: "design", color: "from-yellow-400 to-orange-500" },
  {label:"Deployment",path:" deployment",color:"from-pink-400 to-pink-700"},
  { label: "Others", path: "Others", color: "from-gray-500 to-gray-700" },
]

export const LandingSkill = () => (
  <motion.div
    className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-center px-4 py-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
     style={{ backgroundImage: 'url("/bg1.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <motion.h1
      className="text-4xl md:text-5xl font-extrabold  text-amber-200 mb-10"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Explore Skills by Domain
    </motion.h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      {domains.map(({ label, path, color }) => (
        <motion.div
          key={path}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-full max-w-xs"
        >
          <NavLink to={`/skill/${path}`}>
            <button
              className={`w-full px-6 py-4 text-white font-semibold rounded-xl shadow-lg bg-gradient-to-r ${color} hover:shadow-2xl transition-all duration-300`}
            >
              {label}
            </button>
          </NavLink>
        </motion.div>
      ))}
    </div>
    <button className="px-4 py-2 rounded-lg font-semibold text-black shadow-lg transition-all duration-300 bg-gradient-to-r from-fuchsia-300 via-slate-300 to-cyan-300 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 m-2 min-w-md max-md:min-w-full text-center hover:scale-105 hover:shadow-xl font-serif hover:text-white mt-10">
            <NavLink to='/landingproject' className="text-lg font-semibold">
              Explore my Projects
            </NavLink>
          </button>
  </motion.div>
)
