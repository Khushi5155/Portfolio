import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Users2,
  ArrowRight,
  FileText,
} from "lucide-react";
import Button from "../components/Button";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Foundation",
      subtitle: "B.Tech CSE · 9.0 / 10 CGPA",
      detail:
        "Computer Science undergraduate at Guru Gobind Singh Indraprastha University with a focus on core software fundamentals.",
    },
    {
      icon: Code2,
      title: "Full-Stack Engineering",
      subtitle: "Frontend & Backend Development",
      detail:
        "Hands-on experience developing modular interfaces, integrating RESTful services, and managing database schemas.",
    },
    {
      icon: Users2,
      title: "Collaborative Development",
      subtitle: "Open Source & Team Projects",
      detail:
        "Engaged in collaborative open-source workflows, team hackathons, and iterative product development.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-[#38BDF8] mb-2">
          Overview
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] font-heading">
          About Me
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* NARRATIVE COLUMN (Col 1-7) */}
        <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-[#94A3B8] leading-relaxed text-base">
          <p className="text-lg text-slate-800 dark:text-[#F8FAFC] font-medium leading-relaxed">
            I&apos;m a Computer Science undergraduate at GGSIPU and a Software Engineer Intern, passionate about building practical and user-friendly web applications.
          </p>

          <p>
            I enjoy working across frontend and backend technologies, solving problems, and turning ideas into real-world products. I continuously learn through hands-on projects, open-source contributions, and collaborative development.
          </p>

          <p>
            Whether implementing responsive client interfaces or structuring robust backend integrations, I focus on clean code, dependable architecture, and thoughtful user experiences.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button
              href="/resume.pdf"
              download="Khushi_Kumari_Resume.pdf"
              text="Download Full Resume"
              variant="primary"
              size="sm"
              icon={FileText}
            />
            <Button
              href="#contact"
              text="Get in Touch"
              variant="secondary"
              size="sm"
              icon={ArrowRight}
            />
          </div>
        </div>

        {/* HIGHLIGHT CARDS (Col 8-12) */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="p-5 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20 hover:border-indigo-400/50 dark:hover:border-[#6366F1]/50 shadow-xs dark:shadow-none transition-all duration-200 group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-[#131B38] text-indigo-600 dark:text-[#38BDF8] border border-indigo-200/70 dark:border-[#38BDF8]/20 shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-[#F8FAFC] font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-[#38BDF8] mt-0.5 font-mono">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-1 leading-normal">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
