import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FcBiotech, FcFlashOn, FcMindMap } from "react-icons/fc";
import { motion } from "framer-motion";

// Experience Data
const experiences = [
  {
    icon: <FcBiotech />,
    title: "SIH Hackathon 2025",
    description:
      "Participated in Smart India Hackathon as part of a cross-functional team. Tackled real-world challenges with scalable tech solutions, collaborating on backend logic, UI flows, and final pitch delivery.",
    date: "2025",
  },
  {
    icon: <FcFlashOn />,
    title: "IEEE Ignite Volunteer 2025",
    description:
      "Volunteered at Ignite, a flagship event by IEEE Society. Managed logistics, coordinated speaker sessions, and designed interactive onboarding materials to ensure an inclusive and engaging experience for attendees.",
    date: "2025",
  },
  {
    icon: <FcMindMap />,
    title: "PBEL Virtual Internship – Generative AI",
    description:
      "Currently pursuing a PBEL Virtual Internship focused on Generative AI. Working on hands-on projects involving LangChain, multi-agent systems, and AI-driven workflows to build scalable, real-world applications.",
    date: "2026",
  },
];

// Reusable Card
const ExperienceCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.05 }}
    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg max-w-sm cursor-pointer"
  >
    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
      {icon} {title}
    </h3>
    <p className="text-white/90 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

// Timeline Item
const TimelineItem = ({ icon, title, description, date, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.3 }}
    className={`mb-12 flex ${index % 2 === 0 ? "justify-start" : "justify-end"} w-full`}
  >
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg max-w-sm">
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        {icon} {title}
      </h3>
      <p className="text-white/90 text-sm leading-relaxed">{description}</p>
      <span className="block mt-3 text-xs text-white/70 font-mono">{date}</span>
    </div>
  </motion.div>
);

export const Experience = () => {
  const [view, setView] = useState("grid"); // toggle between grid and timeline

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-teal-400 via-blue-600 to-teal-400 px-6 py-12 text-white"
      style={{
        backgroundImage: 'url("/bg1.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8"
      >
        💼 Experience
      </motion.h2>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setView("grid")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            view === "grid" ? "bg-white text-black" : "bg-black/30 text-white"
          }`}
        >
          Grid View
        </button>
        <button
          onClick={() => setView("timeline")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            view === "timeline" ? "bg-white text-black" : "bg-black/30 text-white"
          }`}
        >
          Timeline View
        </button>
      </div>

      {/* Conditional Rendering */}
      {view === "grid" ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              icon={exp.icon}
              title={exp.title}
              description={exp.description}
              delay={index * 0.3}
            />
          ))}
        </div>
      ) : (
        <div className="relative w-full max-w-4xl">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-white/30"></div>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              icon={exp.icon}
              title={exp.title}
              description={exp.description}
              date={exp.date}
              index={index}
            />
          ))}
        </div>
      )}

      {/* Contact Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 rounded-lg font-semibold text-black shadow-lg transition-all duration-300 bg-gradient-to-r from-fuchsia-300 via-slate-300 to-cyan-300 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 m-2 min-w-md max-md:min-w-full text-center hover:shadow-xl font-serif hover:text-white mt-10"
      >
        <NavLink to="/certificate" className="text-lg font-semibold">
          Contact Me
        </NavLink>
      </motion.button>
    </div>
  );
};
