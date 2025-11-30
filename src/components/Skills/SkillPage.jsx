 import React from 'react'
import { useParams } from 'react-router-dom'
import { skillByDomain } from './SkillData'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export const SkillPage = () => {
  const { domain } = useParams()
  const skills = skillByDomain[domain] || []

  return (
    <motion.div
      className="min-h-screen px-4 py-10  bg-gradient-to-br from-yellow-100 to-pink to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-indigo-300 overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-6">
          <h2 className="text-3xl md:text-4xl font-extrabold capitalize tracking-wide">
            {domain} Skills
          </h2>
        </div>
   <motion.ul
          className="px-8 py-8 space-y-4 text-left text-gray-800"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="text-lg md:text-xl font-medium bg-gray-100 hover:bg-indigo-100 px-4 py-2 rounded-lg transition-all duration-300 shadow-sm"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
       
      </motion.div>
         <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <NavLink
          to="/skill"
   className=" text-center bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-purple-600 hover:via-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full shadow-xl font-semibold text-lg transition-all duration-300"
        >
          Back to Skills
        </NavLink>
      </motion.div>
    </motion.div>
  )
}
