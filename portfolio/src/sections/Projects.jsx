// src/sections/Projects.jsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt"; // <--- INSTALL THIS!

export default function Projects() {
  const projects = [
    {
      title: "OOPs Calculator",
      description:
        "C++ calculator using OOP concepts like inheritance, polymorphism & classes.",
      tech: ["C++", "OOP", "VS Code"],
      github: "https://github.com/yourusername/oops-calculator",
      live: "#",
    },
    {
      title: "Mini Search Engine",
      description:
        "Search through multiple files using hash table & linked lists for fast retrieval.",
      tech: ["C++", "Data Structures"],
      github: "https://github.com/yourusername/mini-search-engine",
      live: "#",
    },
    {
      title: "Desh Darshan – Crazy Facts",
      description:
        "Web app showing facts about Indian states using modern UI + animations.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/desh-darshan",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-[#0A192F] text-white px-6 py-16 flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-[#E6F1FF]">
        My <span className="text-[#00FF9D]">Projects</span> 🚀
      </h2>
      <div className="w-24 h-1 bg-[#00FF9D] mx-auto mt-2 mb-12 rounded-full"></div>

      {/* Project Cards */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10} // Tilt effect
            tiltMaxAngleY={10}
            transitionSpeed={1500}
            glareEnable={true}
            glareMaxOpacity={0.2}
            className="bg-[#112240] p-6 rounded-xl shadow-lg border border-transparent hover:border-[#00FF9D]
                       hover:shadow-[0_0_20px_#00FF9D] transition-all duration-300 cursor-pointer"
          >
            {/* Project Title */}
            <h3 className="text-xl font-bold text-[#00FF9D]">{project.title}</h3>
            <p className="mt-3 text-gray-300 text-sm">{project.description}</p>

            {/* Tech Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-600 hover:border-[#00FF9D] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 bg-[#0A192F] border border-[#00FF9D] px-4 py-2 text-sm rounded-lg 
                           hover:bg-[#00FF9D] hover:text-black transition-all duration-300"
              >
                <FaGithub /> Code
              </a>

              <a
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 bg-[#00FF9D] px-4 py-2 text-sm rounded-lg hover:bg-[#00e68d] transition-all duration-300"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
