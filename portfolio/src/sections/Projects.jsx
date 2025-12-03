// src/sections/Projects.jsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

export default function Projects() {
  const projects = [
    {
      title: "OOPs Calculator",
      description:
        "A modular C++ console calculator using object-oriented principles like polymorphism, abstraction, and function overloading. Clean CLI-based UI + efficient class structure.",
      tech: ["C++", "OOP", "CLI App"],
      github: "https://github.com/yourusername/oops-calculator",
      live: "#",
    },
    {
      title: "Mini Search Engine",
      description:
        "A fast miniature search engine built using hash tables and linked lists for efficient indexing and file scanning. Designed for quick searching in large text files.",
      tech: ["C++", "DSA", "Hash Table"],
      github: "https://github.com/yourusername/mini-search-engine",
      live: "#",
    },
    {
      title: "Desh Darshan – Crazy Facts",
      description:
        "A fun and interactive web app that displays surprising facts about all Indian states with animations, a dynamic UI, and smooth button interactions.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/desh-darshan",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-[#0A192F] text-[#E6F1FF] py-24 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold font-poppins tracking-wide">
        My <span className="text-[#00FF9D]">Projects</span>
      </h2>
      <div className="w-28 h-1 bg-[#00FF9D] mt-3 mb-14 rounded-full"></div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   gap-12 w-full max-w-7xl px-6 mx-auto"
      >
        {projects.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            transitionSpeed={1500}
            glareEnable={true}
            glareMaxOpacity={0.2}
            className="group p-[2px] rounded-2xl 
                       bg-gradient-to-br from-[#00FF9D] via-transparent to-transparent
                       hover:from-[#00FF9D] hover:via-[#00c77d]/40 hover:to-transparent
                       transition-all duration-500 shadow-lg"
          >
            {/* Card Body */}
            <div
              className="bg-[#0F253E]/80 backdrop-blur-xl rounded-2xl p-6 h-full relative
                         border border-[#00FF9D]/20 
                         shadow-[0_0_12px_rgba(0,255,157,0.15)]
                         group-hover:shadow-[0_0_25px_rgba(0,255,157,0.45)]
                         transition-all duration-500"
            >
              {/* Floating Neon Light */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#00FF9D]/10 
                              rounded-full blur-2xl opacity-0 
                              group-hover:opacity-70 transition-all duration-700">
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#00FF9D] tracking-wide font-poppins">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-[#B8C2D8] leading-relaxed font-inter">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full 
                               bg-[#112240] border border-[#00FF9D]/30 
                               text-[#9FEFCC] font-inter shadow-sm
                               hover:bg-[#00FF9D] hover:text-black transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                             border border-[#00FF9D] text-[#00FF9D]
                             hover:bg-[#00FF9D] hover:text-black
                             font-poppins text-sm transition-all duration-300
                             hover:shadow-[0_0_15px_#00FF9D]"
                >
                  <FaGithub /> Code
                </a>

                {/* Live */}
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                             bg-[#00FF9D] text-black 
                             hover:bg-[#00e68a] 
                             transition-all duration-300 
                             font-poppins text-sm
                             hover:shadow-[0_0_15px_#00FF9D]"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
