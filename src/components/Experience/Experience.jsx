import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcBiotech, FcConferenceCall, FcFlashOn } from "react-icons/fc";

export const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-teal-400 via-blue-600 to-teal-400 px-6 py-12 text-white"
    style={{
        backgroundImage: 'url("/bg1.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <h2 className="text-3xl font-bold mb-8" data-aos="zoom-out">💼 Experience</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg max-w-sm transition-all duration-300 hover:scale-105" data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><FcBiotech /> SIH Hackathon 2025 </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Participated in *Smart India Hackathon* as part of a cross-functional team. We tackled real-world challenges with scalable tech solutions, collaborating on backend logic, UI flows, and final pitch delivery.
          </p>
        </div>

       
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg max-w-sm transition-all duration-300 hover:scale-105" data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><FcFlashOn /> IEEE Ignite Volunteer 2025</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Volunteered at *Ignite*, a flagship event by IEEE Society. Managed logistics, coordinated speaker sessions, and designed interactive onboarding materials to ensure an inclusive and engaging experience for attendees.
          </p>
        </div>
 </div>
         
      <button className="mt-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500  backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-lg hover:bg-white/30 transition">
        <NavLink to='/certificate' className="text-lg font-semibold">
          Contact Me
        </NavLink>
      </button>
    </div>
  );
};
