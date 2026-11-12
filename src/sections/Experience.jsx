import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer Intern",
      organization: "Yuga Yatra Retail (OPC) Private Limited",
      duration: "November 2026 – January 2027",
      location: "Remote",
      type: "Internship",
      statusBadge: "Active / Current",
      highlights: [
        "Contributing as a Software Engineer Intern across core software development workflows and internal engineering systems.",
        "Collaborating remotely on technical requirements, code quality, and implementation tasks.",
      ],
    },
    {
      role: "Open Source Contributor (Rank #2)",
      organization: "Social Winter of Code (SWOC 2026)",
      duration: "Winter 2026",
      location: "Remote / Open Source",
      type: "Open Source",
      statusBadge: "Top 2 Contributor",
      highlights: [
        "Ranked as the #2 nationwide contributor across participating repositories during the program.",
        "Resolved developer issues, authored feature pull requests, and collaborated through Git and code reviews.",
      ],
    },
    {
      role: "Open Source Contributor (Top 25)",
      organization: "GirlScript Summer of Code (GSSoC 2025)",
      duration: "Summer 2025",
      location: "Remote / Open Source",
      type: "Open Source",
      statusBadge: "Top 25 Contributor",
      highlights: [
        "Selected as an official open-source contributor and ranked among the Top 25 participants nationwide.",
        "Awarded an official Letter of Recommendation (LOR) for exemplary code quality, issue resolution, and collaboration.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
          Track Record
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
          Experience &amp; Open Source
        </h2>
        <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3"></div>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mt-3">
          Industry software engineering internships and national open-source contribution tenure.
        </p>
      </div>

      {/* TIMELINE / CARDS */}
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-6 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 before:hidden md:before:block">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
            className="relative md:pl-12 group"
          >
            {/* Timeline node icon */}
            <div className="hidden md:flex absolute left-4 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500 items-center justify-center group-hover:border-emerald-600 dark:group-hover:border-emerald-400 transition-colors shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/90 shadow-xs dark:shadow-none transition-all duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800/70">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-heading">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                      {exp.statusBadge}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 shrink-0">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} className="text-slate-400 dark:text-slate-500" />
                    {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} className="text-slate-400 dark:text-slate-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
