// src/sections/Skills.jsx
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaTools,
  FaFigma,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiPython,
  SiFigma,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React + Vite", "Tailwind CSS"],
      icons: [
        <FaHtml5 className="text-orange-500 text-3xl" />,
        <FaCss3Alt className="text-blue-500 text-3xl" />,
        <FaJs className="text-yellow-400 text-3xl" />,
        <FaReact className="text-cyan-400 text-3xl" />,
        <SiTailwindcss className="text-sky-400 text-3xl" />,
      ],
    },
    {
      title: "Programming & OOPs",
      skills: ["C++", "C", "Python", "OOPs Concepts"],
      icons: [
        <SiCplusplus className="text-blue-500 text-3xl" />,
        <FaTools className="text-gray-300 text-3xl" />,
        <SiPython className="text-yellow-400 text-3xl" />,
        <FaTools className="text-gray-300 text-3xl" />,
      ],
    },
    {
      title: "Design & Tools",
      skills: ["Figma", "UI / UX Design", "VS Code", "Git & GitHub"],
      icons: [
        <SiFigma className="text-pink-500 text-3xl" />,
        <FaFigma className="text-purple-400 text-3xl" />,
        <FaTools className="text-gray-300 text-3xl" />,
        <FaTools className="text-gray-300 text-3xl" />,
      ],
    },
  ];

  // Java REMOVED below ✔
  const learningNow = ["DSA in C++", "API Integration", "Responsive UI"];
  const learningIcons = [
    <SiCplusplus className="text-blue-500 text-3xl" />,
    <FaTools className="text-gray-300 text-3xl" />,
    <FaReact className="text-cyan-400 text-3xl" />,
  ];

  return (
    <section
      id="skills"
      className="min-h-screen w-full flex items-center justify-center bg-[#0A192F] px-6 py-16"
    >
      <div className="text-center md:text-left animate-slideUp max-w-5xl">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#E6F1FF]">
          My <span className="text-[#00FF9D]">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-[#00FF9D] mx-auto md:mx-0 mt-2 mb-10 rounded-full"></div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              className="bg-[#112240] p-6 rounded-xl shadow-lg transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_#00FF9D]"
            >
              <h3 className="text-xl font-semibold text-[#00FF9D] mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-[#0A192F] border border-[#00FF9D]/40 rounded-lg flex items-center gap-2 text-[#E6F1FF] text-sm hover:bg-[#00FF9D] hover:text-black transition-all duration-300"
                  >
                    {category.icons[idx]} <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#E6F1FF]">
            Currently <span className="text-[#00FF9D]">Learning 🚀</span>
          </h3>
          <div className="w-32 h-1 bg-[#00FF9D] mt-2 mb-6 rounded-full"></div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-r from-[#112240] to-[#0A192F] p-6 rounded-xl shadow-lg border border-[#00FF9D]/30"
          >
            <div className="flex flex-wrap gap-3">
              {learningNow.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 border border-[#00FF9D]/40 rounded-lg flex items-center gap-2 text-[#E6F1FF] text-sm hover:bg-[#00FF9D] hover:text-black transition-all duration-300"
                >
                  {learningIcons[idx]} <span>{item}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
