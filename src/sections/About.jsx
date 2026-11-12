import { motion } from "framer-motion";
import { GraduationCap, Award, Code2, Rocket, ArrowRight, FileText } from "lucide-react";
import Button from "../components/Button";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      subtitle: "9.0 / 10 CGPA",
      detail: "B.Tech Computer Science & Engineering at GGSIPU (5th Semester).",
    },
    {
      icon: Award,
      title: "Open Source Contributor",
      subtitle: "Top 25 GSSoC • Top 2 SWOC",
      detail: "Recognized national contributor across production open-source repositories.",
    },
    {
      icon: Rocket,
      title: "Hackathon Competitor",
      subtitle: "FOSS Hack & HackHazards",
      detail: "Winner at FOSS Hack 2026 (Dockfleet) & HackHazards 2026 (FoundrOS).",
    },
    {
      icon: Code2,
      title: "Full-Stack & Systems",
      subtitle: "React • FastAPI • Neo4j",
      detail: "Hands-on experience architecting schema, APIs, and modern client UIs.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
          Overview
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
          About Me
        </h2>
        <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* NARRATIVE COLUMN (Col 1-7) */}
        <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
          <p>
            I am a 5th-semester Computer Science &amp; Engineering undergraduate at{" "}
            <span className="text-slate-900 dark:text-white font-semibold">Guru Gobind Singh Indraprastha University</span>,
            maintaining a <span className="text-emerald-600 dark:text-emerald-400 font-semibold">9.0/10 CGPA</span>.
          </p>

          <p>
            My engineering focus centers on building reliable full-stack applications, scalable backend
            APIs, and AI-powered tools. I enjoy working across the complete product lifecycle: modeling
            relational and graph database schemas, implementing robust services with{" "}
            <span className="text-slate-900 dark:text-slate-100 font-medium">Node.js, Express, and FastAPI</span>, and creating
            clean, responsive web applications with{" "}
            <span className="text-slate-900 dark:text-slate-100 font-medium">React, Next.js, and Tailwind CSS</span>.
          </p>

          <p>
            Beyond coursework, I actively ship code in high-stakes environments. I ranked among the{" "}
            <span className="text-slate-900 dark:text-white font-medium">Top 25 Contributors in GirlScript Summer of Code 2025</span>,{" "}
            <span className="text-slate-900 dark:text-white font-medium">Top 2 in Social Winter of Code 2026</span>, and was part of
            winning teams at national hackathons like{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">FOSS Hack 2026</span> (team winner for Dockfleet out of 2,360+ teams)
            and <span className="text-emerald-600 dark:text-emerald-400 font-medium">HackHazards 2026</span> (winner for FoundrOS out of 2,657 projects).
          </p>

          <p className="text-slate-600 dark:text-slate-400 text-sm italic pt-2 border-l-2 border-emerald-500/50 pl-4">
            "I focus on shipping production-minded software — verified APIs, clean schemas, and responsive interfaces that solve tangible problems."
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
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 shadow-xs dark:shadow-none transition-all duration-200"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">
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
