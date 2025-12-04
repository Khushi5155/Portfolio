import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import disaster from "../assets/disaster.png";
import mannmitra from "../assets/mannmitra.jpeg";
import kalaficial from "../assets/live1.png";
import deshDarshan from "../assets/desh_darshan.jpeg";
import oopsImg from "../assets/images.png";
import miniSearchImg from "../assets/image.avif";


export default function Projects() {
  const projects = [
   
   
   

    // ⭐ ALERTAX — EXISTING
    {
      title: "AlertaX – AI Disaster Alert System",
      image: disaster,
      description:
        "AI-powered Disaster Alert System delivering real-time, location-based alerts using smart maps, live APIs, and predictive models. Features live data streaming, interactive maps, shelters, and emergency tools.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python (Flask)",
        "MongoDB",
        "Socket.io",
        "WebSockets",
      ],
      github: "https://github.com/Khushi5155/AlertaX",
      live: "",
    },

    // ⭐ NEW — MANNMITRA SIH PROJECT
    {
      title: "MannMitra – Digital Mental Wellness Ecosystem",
      image: mannmitra,
      description:
        "A culturally intelligent, AI-powered mental wellness system built for Indian students. Features a Wisdom-AI chatbot, PHQ-9/GAD-7 assessment tools, mood tracking, peer support, and counselor/admin dashboards—created for Smart India Hackathon.",
      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "AI/ML",
        "NLP",
      ],
      github: "https://github.com/Khushi5155/SIH-25", // add your repo
      live: "",        
    },
    {
  title: "Kala.ficial – Global Art Showcase Platform",
  image: kalaficial,
  description:
    "A global digital platform empowering emerging and undiscovered artists to showcase their creativity through online and offline exhibitions. Artists can connect, collaborate, get notified about exhibitions worldwide, and grow their artistic journey in a supportive global community.",
  tech: [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "REST APIs",
  ],
  github: "https://github.com/Khushi5155/kala.ficial", // replace with your GitHub repo
  live: "",         // replace with your live link
},
  {
  title: "Desh Darshan – Explore India",
  image: deshDarshan,
  description:
    "An immersive web experience that lets users explore India’s states and UTs through stunning tourist destinations, famous cultural spots, and surprising crazy facts. Features dynamic category sliders, a spin-to-reveal engine, smooth animations, and a visually engaging UI. ",
  tech: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/Khushi5155/DeshDarshan",
  live: "",
},


    {
  title: "OOPs Calculator – Object-Oriented C++ Console App",
  image: oopsImg,
  description:
    "A clean and modular calculator built using core Object-Oriented Programming principles such as abstraction, inheritance, and polymorphism. Designed with a structured class architecture, the app supports multiple operations, function overloading, and an intuitive CLI experience.",
  tech: ["C++", "OOP", "Inheritance", "Polymorphism"],
  github: "https://github.com/Khushi5155/Oops-Calculator",
  live: "",
},
 {
  title: "Mini Search Engine – File Indexing & Retrieval System",
  image: miniSearchImg,
  description:
    "A lightweight yet powerful search engine built using efficient data structures like Hash Tables and Linked Lists for fast text indexing and retrieval. It scans multiple files, stores word-frequency mappings, and delivers quick, accurate search results using optimized lookup operations.",
  tech: ["C++", "DSA", "Hash Tables", "Linked Lists"],
  github: "https://github.com/yourusername/mini-search-engine",
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
              {/* Project Image */}
<div className="w-full h-40 rounded-xl overflow-hidden mb-4">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover rounded-xl 
               transform group-hover:scale-110 transition-all duration-700"
  />
</div>

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
