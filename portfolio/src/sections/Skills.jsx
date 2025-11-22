// src/sections/Skills.jsx
import CardItem from "../components/CardItem";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaTools } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss,} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: "90%", icon: <FaHtml5 /> },
        { name: "CSS", level: "85%", icon: <FaCss3Alt /> },
        { name: "JavaScript", level: "80%", icon: <FaJs /> },
        { name: "React + Vite", level: "75%", icon: <FaReact /> },
        { name: "Tailwind CSS", level: "80%", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Programming & OOPs",
      skills: [
        { name: "C++", level: "85%", icon: <SiCplusplus /> },
        { name: "OOPs Concepts", level: "80%", icon: <FaTools /> },
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git & GitHub", level: "80%"},
        { name: "VS Code", level: "85%"}, // ✔ FIXED
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen w-full flex items-center justify-center bg-[#0A192F] px-6 py-16"
    >
      <CardItem>
        <div className="text-center md:text-left animate-slideUp">
          <h2 className="text-4xl font-bold text-[#E6F1FF]">
            My <span className="text-[#00FF9D]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#00FF9D] mx-auto md:mx-0 mt-2 mb-8 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_#00FF9D] transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fadeIn"
              >
                <h3 className="text-xl font-semibold text-[#00FF9D] mb-4">{category.title}</h3>

                {category.skills.map((skill, idx) => (
                  <div key={idx} className="mb-4">
                    <div className="flex items-center gap-2 text-[#E6F1FF]">
                      <span className="text-2xl">{skill.icon}</span>
                      <p className="text-lg font-medium">{skill.name}</p>
                    </div>

                    <div className="w-full bg-gray-800 h-3 rounded-full mt-1 overflow-hidden">
                      <div
                        className="h-3 rounded-full bg-[#00FF9D] animate-skillBar"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                    <p className="text-right text-sm text-[#8892B0]">{skill.level}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </CardItem>
    </section>
  );
}
