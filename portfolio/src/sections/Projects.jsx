import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt // src/sections/Projects.jsx
from "react-parallax-tilt"; // npm install react-parallax-tilt

export default function Projects() {
  const projects = [
    {
      title: "OOPs Calculator",
      description:
        "C++ calculator built using OOP concepts like inheritance, polymorphism & classes.",
      tech: ["C++", "OOP", "VS Code"],
      github: "https://github.com/yourusername/oops-calculator",
      live: "#",
    },
    {
      title: "Mini Search Engine",
      description:
        "Fast file search using hash tables & linked lists — built in C++.",
      tech: ["C++", "Data Structures"],
      github: "https://github.com/yourusername/mini-search-engine",
      live: "#",
    },
    {
      title: "Desh Darshan – Crazy Facts",
      description:
        "Web app that shows Indian state facts using animations & clean UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/desh-darshan",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-[#0A192F] text-[#E6F1FF] px-6 py-20 flex flex-col items-center"
    >
      {/* Section Title */}
      <h2
        className="text-4xl font-bold tracking-wide"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        My <span className="text-[#00FF9D]">Projects</span> 🚀
      </h2>
      <div className="w-24 h-1 bg-[#00FF9D] mx-auto mt-2 mb-12 rounded-full"></div>

      {/* Project Cards */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            transitionSpeed={1500}
            glareEnable={true}
            glareMaxOpacity={0.2}
            className="bg-[rgba(255,255,255,0.03)] border border-transparent p-6 rounded-xl shadow-lg
                     hover:border-[#00FF9D] hover:shadow-[0_0_25px_#00FF9D]
                     transition-all duration-300 cursor-pointer backdrop-blur-md"
          >
            {/* Title */}
            <h3
              className="text-xl font-bold text-[#00FF9D]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="mt-3 text-sm text-[#8892B0]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-[#112240] border border-[#00FF9D]/20
                             hover:border-[#00FF9D] transition-all duration-300"
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
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-[#00FF9D]
                           hover:bg-[#00FF9D] hover:text-black transition-all duration-300"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <FaGithub /> Code
              </a>

              <a
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 bg-[#00FF9D] px-4 py-2 text-sm rounded-lg
                           hover:bg-[#00e68d] transition-all duration-300"
                style={{ fontFamily: "'Poppins', sans-serif" }}
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
