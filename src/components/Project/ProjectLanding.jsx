import { useNavigate } from "react-router-dom";
import { domains } from "./domain";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const ProjectLanding = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="p-8 bg-blue-500 min-h-screen flex flex-col  " style={{ backgroundImage: 'url("/bg1.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
       <motion.h1
      className="text-4xl md:text-5xl font-extrabold  text-amber-200 mb-10 text-center"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Explore Projects by Domain
    </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {domains.map(({ name, icon }) => (
          <button
            key={name}
            onClick={() => navigate(`/projects/${name}`)}
            className="flex items-center gap-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-lg shadow hover:scale-105 transition"
          >
            <span className="text-2xl">{icon}</span>
            <span className="text-lg font-semibold">{name}</span>
          </button>
        ))}
      </div>
      <button className="mt-10 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-purple-500 hover:via-cyan-500 hover:to-blue-500  backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-lg hover:bg-white/30 transition w-[40%] mx-auto">
               <NavLink to='/experience' className="text-lg font-semibold">
                 Explore my Experience
               </NavLink>
             </button>
     
    </div>
    
     </>
  );
};

export default ProjectLanding;
