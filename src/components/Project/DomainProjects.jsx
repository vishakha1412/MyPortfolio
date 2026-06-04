 import { useParams } from "react-router-dom";
import { projects } from "./projects";
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const DomainProjects = () => {
  const { domain } = useParams();
  const filtered = projects.filter((p) => p.domain === domain);

  return (
    <>
      <style>
        {`
          @layer utilities {
            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            @keyframes slideUp {
              0% { transform: translateY(20px); opacity: 0; }
              100% { transform: translateY(0); opacity: 1; }
            }
            .animate-fade-in {
              animation: fadeIn 0.6s ease-out;
            }
            .animate-slide-up {
              animation: slideUp 0.5s ease-out;
            }
          }
        `}
      </style>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden animate-slide-up"
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
             <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline transition duration-300 float-start"
                  >
                    View Project →
                  </a>
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
              </div>
            ))}
          </div>
            <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <NavLink
          to="/landingproject"
   className="px-4 py-2 rounded-lg font-semibold text-black shadow-lg transition-all duration-300 bg-gradient-to-r from-fuchsia-300 via-slate-300 to-cyan-300 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 m-2 min-w-md max-md:min-w-full text-center hover:scale-105 hover:shadow-xl font-serif hover:text-white mt-10"
        >
          Back to Projects
        </NavLink>
      </motion.div>
        </div>
      )}
    </>
  );
};

export default DomainProjects;

