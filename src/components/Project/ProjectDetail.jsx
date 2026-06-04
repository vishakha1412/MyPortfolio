 import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects"; // adjust path to your projects.js

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);
 

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg"
        >
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-sm text-gray-400 mb-2">{project.domain}</p>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
                <span key={index} className="px-2 py-1 text-xs rounded bg-gray-700 text-gray-300">
                    {tech}
                </span>
            ))}
        </div>
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm font-medium text-blue-400 hover:underline"
        >
            View Project
        </a>
        <NavLink
            to={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 ml-4 text-sm font-medium text-blue-400 hover:underline"
        >
            View Code
        </NavLink>
      </motion.div>
      
    </div>
  );
};

export default ProjectDetail;


// Note: Ensure that your projects.js file includes an 'images' array for each project, like this:
/* still not connected with any other component, just a template for project details page;*/
