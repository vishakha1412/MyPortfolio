import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const domains = [
  { label: "Web Development", path: "web", color: "from-purple-500 to-indigo-600" },
  { label: "CodingLanguage", path: "CodingLanguage", color: "from-green-500 to-teal-500" },
  { label: "AI/ML", path: "ai", color: "from-pink-500 to-red-500" },
  { label: "Design", path: "design", color: "from-yellow-400 to-orange-500" },
  { label: "Data Science", path: "data", color: "from-blue-500 to-cyan-500" },
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
  </motion.div>
)
