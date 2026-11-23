import { motion } from "framer-motion";
import {
  Terminal,
  Layout,
  Server,
  Database,
  Wrench,
  BrainCircuit,
} from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      category: "Programming Languages",
      icon: Terminal,
      description: "Core languages for systems, algorithms, and application logic",
      skills: ["C++", "Python", "JavaScript (ES6+)", "SQL"],
    },
    {
      category: "Frontend Development",
      icon: Layout,
      description: "Building responsive, component-driven client applications",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive UI"],
    },
    {
      category: "Backend & APIs",
      icon: Server,
      description: "Server architecture, endpoint design, and service integration",
      skills: ["FastAPI", "Node.js", "Express.js", "RESTful APIs", "API Integration"],
    },
    {
      category: "Databases & Graph Technologies",
      icon: Database,
      description: "Relational, graph, and schema architecture",
      skills: ["PostgreSQL", "Neo4j (Graph DB)", "Database Design", "SQL Queries"],
    },
    {
      category: "Developer Tools & Deployment",
      icon: Wrench,
      description: "Developer tooling, containerization, and hosting workflows",
      skills: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Render", "Linux/CLI"],
    },
    {
      category: "Computer Science Fundamentals",
      icon: BrainCircuit,
      description: "Fundamental CS principles and analytical problem solving",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Systems Debugging", "Problem Solving"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-[#38BDF8] mb-2">
          Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] font-heading">
          Technical Skills
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full mt-3"></div>
        <p className="text-slate-600 dark:text-[#94A3B8] text-sm max-w-xl mt-3">
          Technologies, frameworks, and foundational computer science competencies I use to architect and ship real-world software.
        </p>
      </div>

      {/* SKILL CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="p-6 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20 hover:border-indigo-400/50 dark:hover:border-[#6366F1]/45 hover:shadow-md dark:hover:shadow-[0_8px_30px_rgba(13,17,39,0.7)] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-[#131B38] text-indigo-600 dark:text-[#38BDF8] border border-indigo-200/70 dark:border-[#38BDF8]/20 group-hover:scale-105 transition-transform duration-200">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-[#F8FAFC] text-base group-hover:text-indigo-600 dark:group-hover:text-[#38BDF8] transition-colors">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-[#94A3B8] mb-5 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-[#6366F1]/15">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium font-mono bg-[#F4F2EC] text-slate-700 border border-slate-200/80 hover:border-indigo-400/50 hover:text-indigo-700 hover:bg-indigo-50/50 dark:bg-[#1B244A] dark:text-[#F8FAFC] dark:border-[#6366F1]/25 dark:hover:border-[#38BDF8]/50 dark:hover:text-[#38BDF8] dark:hover:bg-[#131B38] transition-all duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
