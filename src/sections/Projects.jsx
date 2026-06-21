import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

import disaster from "../assets/disaster.png";
import mannmitra from "../assets/mannmitra.jpeg";
import kalaficial from "../assets/live1.png";
import deshDarshan from "../assets/desh_darshan.jpeg";
import oopsImg from "../assets/images.png";
import miniSearchImg from "../assets/image.avif";

import attendease from "../assets/attendease.png";
import claimguard from "../assets/claimguard.png";
import dockfleet from "../assets/dockfleet.png";

export default function Projects() {
  const projects = [
    {
      title: "AlertaX – AI Disaster Alert System",
      image: disaster,
      description:
        "AI-powered Disaster Alert System delivering real-time alerts using smart maps, live APIs, predictive analytics, emergency tools, and shelter discovery.",
      tech: ["HTML", "CSS", "JavaScript", "Flask", "MongoDB"],
      github: "https://github.com/Khushi5155/AlertaX",
      live: "",
    },

    {
      title: "MannMitra – Digital Mental Wellness Ecosystem",
      image: mannmitra,
      description:
        "AI-powered mental wellness ecosystem featuring chatbot guidance, assessments, mood tracking, peer support and dashboards.",
      tech: ["React", "Node.js", "MongoDB", "AI/ML"],
      github: "https://github.com/Khushi5155/SIH-25",
      live: "",
    },

    {
      title: "AttendEase – Attendance Tracker",
      image: attendease,
      description:
        "Track subject-wise attendance, predict shortage recovery and simulate skip decisions.",
      tech: ["React", "Vite", "Tailwind", "LocalStorage"],
      github: "https://github.com/Khushi5155/attendease",
      live: "https://attendease-six-rouge.vercel.app/",
    },

    {
      title: "ClaimGuard AI",
      image: claimguard,
      description:
        "AI-powered insurance claim verification and intelligent document analysis.",
      tech: ["React", "Node", "MongoDB", "AI"],
      github: "https://github.com/Khushi5155/ClaimGuard-AI",
      live: "",
    },

    {
      title: "DockFleet",
      image: dockfleet,
      description:
        "Fleet and logistics management platform with operational visibility.",
      tech: ["React", "Express", "MongoDB"],
      github: "https://github.com/Khushi5155/Dockfleet",
      live: "",
    },

    {
      title: "Kala.ficial",
      image: kalaficial,
      description:
        "Global platform helping artists showcase and grow their work.",
      tech: ["React", "Node", "MongoDB"],
      github: "https://github.com/Khushi5155/kala.ficial",
      live: "",
    },

    {
      title: "Desh Darshan",
      image: deshDarshan,
      description:
        "Interactive experience exploring India's destinations and culture.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Khushi5155/DeshDarshan",
      live: "",
    },

    {
      title: "OOPs Calculator",
      image: oopsImg,
      description:
        "Calculator built using abstraction, inheritance and polymorphism.",
      tech: ["C++", "OOP"],
      github: "https://github.com/Khushi5155/Oops-Calculator",
      live: "",
    },

    {
      title: "Mini Search Engine",
      image: miniSearchImg,
      description:
        "Text indexing and retrieval using efficient data structures.",
      tech: ["C++", "DSA"],
      github: "https://github.com/Khushi5155/MiniSearchEngine",
      live: "",
    },
  ];

  return (
    <section
      id="projects"
      className="
      w-full
      overflow-hidden
      bg-[#081B29]
      text-white
      py-28
      px-0
    "
    >
      {/* Heading */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-5xl font-bold text-[#00FF9D]">
          My Projects
        </h2>

        <p className="mt-5 text-[#B8C2D8] max-w-3xl mx-auto">
          A collection of projects focused on solving real-world
          problems through design, engineering, and AI.
        </p>
      </div>

      {/* Grid */}
      <div
        className="
        w-full
        px-10
        xl:px-20
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
      "
      >
        {projects.map((project, index) => (
          <Tilt
            key={index}
            glareEnable
            glareMaxOpacity={0.15}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            className="h-full"
          >
            <div
              className="
              h-full
              flex
              flex-col
              bg-[#0F253E]
              rounded-3xl
              overflow-hidden
              border
              border-[#00FF9D]/20
              hover:border-[#00FF9D]
              transition-all
              duration-500
            "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-[220px]
                object-cover
                transition
                duration-500
                hover:scale-105
              "
              />

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-2xl font-semibold text-[#00FF9D]">
                  {project.title}
                </h3>

                <p className="mt-4 text-[#B8C2D8] text-sm flex-1">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      bg-[#112240]
                      text-[#9FEFCC]
                    "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-8 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    px-4
                    py-2
                    border
                    border-[#00FF9D]
                    rounded-lg
                    flex
                    items-center
                    gap-2
                    hover:bg-[#00FF9D]
                    hover:text-black
                    transition
                  "
                  >
                    <FaGithub />
                    Code
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      px-4
                      py-2
                      rounded-lg
                      bg-[#00FF9D]
                      text-black
                      flex
                      items-center
                      gap-2
                    "
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
