import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "PesaGuard",
      desc: "A budget management system built with React, Express, MongoDB and JWT authentication.",
      live: "#",
      code: "#"
    },
    {
      title: "Meal Finder",
      desc: "A fast recipe finder app using the MealDB API, fully responsive with Tailwind.",
      live: "#",
      code: "#"
    },
    {
      title: "E-commerce DB",
      desc: "A complete relational database schema for an e-commerce store using MySQL.",
      live: "#",
      code: "#"
    },
    {
      title: "Bandits Surveillance System",
      desc: "AI-assisted security system for tracking threats, predicting attack locations, and alert automation.",
      live: "#",
      code: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-16">
        My Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={false}               // ✅ no initial/fade-in animation
            whileHover={{ scale: 1.02 }}  // subtle hover scale
            className="relative backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-gray-700 
                       bg-gray-800/60 hover:border-blue-400 transition-all"
          >

            {/* Gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-3xl"></div>

            <h3 className="text-2xl font-semibold mb-3 text-red-200">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6">{project.desc}</p>

            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 
                           text-white rounded-xl transition shadow"
              >
                <ExternalLink size={18} /> Live Demo
              </a>

              <a
                href={project.code}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 
                           text-white rounded-xl transition shadow"
              >
                <Github size={18} /> Code
              </a>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
