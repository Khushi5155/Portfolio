import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Wrench,
  BrainCircuit,
  Terminal,
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
      category: "Databases & Data Modeling",
      icon: Database,
      description: "Relational, graph, and schema architecture",
      skills: ["PostgreSQL", "Neo4j (Graph DB)", "Database Design", "SQL Queries"],
    },
    {
      category: "Tools & Deployment",
      icon: Wrench,
      description: "Developer tooling, containerization, and hosting workflows",
      skills: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Render", "Linux/CLI"],
    },
    {
      category: "Core Computer Science",
      icon: BrainCircuit,
      description: "Fundamental CS principles and analytical problem solving",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Systems Debugging", "Problem Solving"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
          Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
          Technical Skills
        </h2>
        <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3"></div>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mt-3">
          Technologies, frameworks, and foundational computer science competencies I use to build real-world software.
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
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/90 shadow-xs dark:shadow-none transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-heading font-semibold text-slate-900 dark:text-white text-base">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 hover:border-emerald-500/50 hover:text-emerald-700 dark:bg-slate-800/70 dark:text-slate-200 dark:border-slate-700/60 dark:hover:border-emerald-500/40 dark:hover:text-emerald-300 transition-colors"
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
