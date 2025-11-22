import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "OOPs Calculator",
      description:
        "A C++ project using Object-Oriented Programming concepts like inheritance, polymorphism & classes.",
      tech: ["C++", "OOP", "VS Code"],
      github: "https://github.com/yourusername/oops-calculator",
      live: "#",
    },
    {
      title: "Mini Search Engine",
      description:
        "Search through multiple files using a hash table & linked lists for fast retrieval.",
      tech: ["C++", "Data Structures"],
      github: "https://github.com/yourusername/mini-search-engine",
      live: "#",
    },
    {
      title: "Desh Darshan – Crazy Facts (Web App)",
      description:
        "Interactive facts about Indian states with animations & modern UI using only HTML, CSS & JS.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/desh-darshan",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0A192F] text-white px-6 py-16 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-10 border-b-4 border-pink-500 pb-2">
        My Projects 🚀
      </h2>

      {/* Project Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#112240] p-5 rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-pink-400">{project.title}</h3>
            <p className="mt-3 text-gray-300">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-800 px-3 py-1 text-sm rounded-full border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-5 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg"
              >
                <FaGithub /> Code
              </a>

              <a
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}