// src/sections/Projects.jsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

export default function Projects() {
  const projects = [
    {
      title: "OOPs Calculator",
      description:
        "Console-based C++ calculator using OOP concepts like polymorphism, classes, and function overloading.",
      tech: ["C++", "OOP", "CLI App"],
      github: "https://github.com/yourusername/oops-calculator",
      live: "#",
    },
    {
      title: "Mini Search Engine",
      description:
        "A fast miniature search engine implemented with hash tables + linked lists for optimized file scanning.",
      tech: ["C++", "DSA", "Hashing"],
      github: "https://github.com/yourusername/mini-search-engine",
      live: "#",
    },
    {
      title: "Desh Darshan – Crazy Facts",
      description:
        "A fun web app that reveals surprising facts about all Indian states with animations and clean UI.",
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
        Featured <span className="text-[#00FF9D]">Projects</span>
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
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            transitionSpeed={1500}
            glareEnable={true}
            glareMaxOpacity={0.25}
            className="relative group p-[2px] rounded-2xl 
                       bg-gradient-to-br from-[#00FF9D] to-transparent 
                       hover:from-[#00FF9D] hover:to-[#00c77d] 
                       transition-all duration-500"
          >
            {/* Card Content */}
            <div
              className="bg-[#0F253E]/80 backdrop-blur-xl rounded-2xl p-6 h-full
                         border border-[#00FF9D]/10 shadow-xl
                         group-hover:shadow-[0_0_30px_rgba(0,255,157,0.4)]
                         transition-all duration-500 relative"
            >
              {/* Floating Glow Circle */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#00FF9D]/10 
                              rounded-full blur-2xl opacity-0 
                              group-hover:opacity-60 transition-all duration-700">
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
                               text-[#9FEFCC] font-inter"
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
                             transition-all duration-300 
                             font-poppins text-sm 
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
                             hover:bg-[#01e48a] 
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
