import React, { useState } from 'react';
import { projects } from '../../components/Project/projects';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Miniprojects = () => {
  const featuredProjects = projects.slice(0, 3);

  const [showModal, setShowModal] = useState(false);

  const handleViewProject = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      setShowModal(true);
    }
  };

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center px-6 py-20 text-gray-900"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10 tracking-tight text-transparent bg-clip-text bg-white/90 font-serif"
      >
        Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border w-auto border-gray-400 border-t-4 shadow-gray-200"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{project.domain}</p>
            <p className="text-gray-700 text-sm line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Conditional navigation */}
            <button
              onClick={() => handleViewProject(project.link)}
              className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
            >
              View Project →
            </button>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12"
      >
        <NavLink
          to="/landingproject"
          className="px-4 py-2 rounded-lg font-semibold text-black shadow-lg transition-all duration-300 bg-gradient-to-r from-fuchsia-300 via-slate-300 to-cyan-300 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 m-2 min-w-md max-md:min-w-full text-center hover:scale-105 hover:shadow-xl font-serif hover:text-white"
        >
          {"Explore More Projects ->"}
        </NavLink>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
            <h3 className="text-lg font-semibold text-red-600 mb-4">
              ⚠️ No Hosted Link
            </h3>
            <p className="text-gray-700 mb-6">
              This project does not have a hosted link yet.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
