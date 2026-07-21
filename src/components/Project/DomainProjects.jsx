import { useParams } from "react-router-dom";
import { projects } from "./projects";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Swal from "sweetalert2";

const DomainProjects = () => {
  const { domain } = useParams();
  const filtered = projects.filter((p) => p.domain === domain);

  // Separate projects
  const underDevProjects = filtered.filter((p) => p.underDevelopment);
  const normalProjects = filtered.filter((p) => !p.underDevelopment);

  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (link) => {
    if (!link || link.trim() === "" || link.includes("not available")) {
      Swal.fire({
        icon: "info",
        title: "Not Deployed",
        text: "This project is not deployed yet.",
      });
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {filtered.length === 0 ? (
        <div className="p-8 bg-gradient-to-br from-yellow-100 to-pink-200 min-h-screen flex items-center justify-center animate-fade-in">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            No projects found in the "<span className="text-pink-600">{domain}</span>" domain.
          </h2>
        </div>
      ) : (
        <div className="p-6 sm:p-8 bg-gradient-to-br from-yellow-100 via-pink-200 to-purple-200 min-h-screen animate-fade-in">
          <h1 className="text-4xl font-bold text-pink-700 mb-10 text-center drop-shadow-md">
            {domain} Projects
          </h1>

          {/* Under Development Section */}
          {underDevProjects.length > 0 && (
            <div className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-teal-700 mb-6 text-center"
              >
                🚧 Under Development 🚀
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {underDevProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-xl border-2 border-dashed border-teal-400 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover rounded-t-2xl opacity-80"
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-teal-600 mb-2 tracking-tight">
                        {project.title}
                      </h2>
                      <p className="text-gray-700 mb-3 leading-relaxed">{project.description}</p>
                      <p className="text-sm text-gray-500 mb-4">
                        <span className="font-semibold text-pink-500">Tech:</span>{" "}
                        {project.tech.join(", ")}
                      </p>
                      <p className="text-xs text-red-500 font-semibold">⚠️ Currently under development</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Normal Projects Section */}
          {normalProjects.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
                Available Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {normalProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover rounded-t-2xl"
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-purple-600 mb-2 tracking-tight">
                        {project.title}
                      </h2>
                      <p className="text-gray-700 mb-3 leading-relaxed">{project.description}</p>
                      <p className="text-sm text-gray-500 mb-4">
                        <span className="font-semibold text-pink-500">Tech:</span>{" "}
                        {project.tech.join(", ")}
                      </p>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleProjectClick(project.link)}
                          className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline transition duration-300 float-start"
                        >
                          View Project →
                        </button>
                        <NavLink
                          to={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block float-end mt-4 ml-4 text-sm font-medium text-blue-600 hover:underline"
                        >
                          View Code →
                        </NavLink>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DomainProjects;
