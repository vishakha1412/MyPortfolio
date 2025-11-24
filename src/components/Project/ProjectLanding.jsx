import { useNavigate } from "react-router-dom";
import { domains } from "./domain";

const ProjectLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-blue-500 min-h-screen flex flex-col  ">
      <h1 className="text-3xl font-bold mb-6">Explore Projects by Domain</h1>
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
    </div>
  );
};

export default ProjectLanding;
