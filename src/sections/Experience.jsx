import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Briefcase,
  GitBranch,
  Terminal,
} from "lucide-react";

export default function Experience() {
  const workExperiences = [
    {
      role: "Software Engineer Intern",
      organization: "Yuga Yatra Retail (OPC) Private Limited",
      duration: "November 2026 – January 2027",
      location: "Remote",
      type: "Internship",
      statusBadge: "Active / Current",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/80 dark:bg-[#131B38] dark:text-[#38BDF8] dark:border-[#38BDF8]/25",
      highlights: [
        "Contributing as a Software Engineer Intern across core software development workflows and internal engineering systems.",
        "Collaborating remotely with engineering leads on technical requirements, code quality, and feature implementations.",
        "Working on backend API integration, application logic, and full-stack technical debugging.",
      ],
      technologies: ["JavaScript", "React.js", "REST APIs", "Node.js", "Git"],
    },
    {
      role: "Front-End Development Intern",
      organization: "Pratinik Infotech",
      duration: "Internship",
      location: "Remote",
      type: "Internship",
      statusBadge: "Completed",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-[#1B244A] dark:text-[#F8FAFC] dark:border-[#6366F1]/30",
      highlights: [
        "Developed responsive client-side web interfaces using React.js, modern JavaScript (ES6+), and CSS/Tailwind utilities.",
        "Constructed modular, reusable UI components ensuring consistent user experience and mobile responsiveness.",
        "Integrated RESTful API endpoints with client state to render dynamic data efficiently.",
        "Participated in code reviews, technical testing, and front-end performance optimizations.",
      ],
      technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "REST APIs"],
    },
  ];

  const openSourcePrograms = [
    {
      role: "Open Source Contributor (Rank #2 Nationwide)",
      organization: "Social Winter of Code (SWOC 2026)",
      duration: "Winter 2026",
      location: "Remote / Open Source",
      type: "Open Source",
      statusBadge: "Rank #2 Nationwide",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200/80 dark:bg-[#131B38] dark:text-[#38BDF8] dark:border-[#38BDF8]/30",
      highlights: [
        "Ranked as the #2 nationwide contributor across participating repositories during the entire program tenure.",
        "Resolved developer issues, authored clean production pull requests, and collaborated across Git review workflows.",
        "Optimized frontend components, refactored backend logic, and contributed to project documentation.",
      ],
      technologies: ["Git", "GitHub", "Pull Requests", "Code Reviews", "Full-Stack"],
    },
    {
      role: "Open Source Contributor (Top 25 Nationwide & LOR)",
      organization: "GirlScript Summer of Code (GSSoC 2025)",
      duration: "Summer 2025",
      location: "Remote / Open Source",
      type: "Open Source",
      statusBadge: "Top 25 Contributor",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/80 dark:bg-[#131B38] dark:text-[#38BDF8] dark:border-[#6366F1]/30",
      highlights: [
        "Selected as an official open-source contributor and ranked among the Top 25 participants nationwide.",
        "Awarded an official Letter of Recommendation (LOR) for exemplary code quality, issue resolution speed, and teamwork.",
        "Delivered production code contributions across community web repositories with strict version control hygiene.",
      ],
      technologies: ["Open Source", "Git", "GitHub", "Issue Resolution", "Collaboration"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-[#38BDF8] mb-2">
          Track Record
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] font-heading">
          Professional Experience &amp; Open Source
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full mt-3"></div>
        <p className="text-slate-600 dark:text-[#94A3B8] text-sm max-w-xl mt-3">
          Software engineering internships and nationwide open-source contributions.
        </p>
      </div>

      <div className="space-y-16">
        {/* PART 1: INDUSTRY WORK EXPERIENCE */}
        <div>
          <div className="flex items-center gap-2.5 mb-6 text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8]">
            <Briefcase size={15} className="text-indigo-600 dark:text-[#38BDF8]" />
            <span>Industry Internships &amp; Engineering Roles</span>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-6 before:w-0.5 before:bg-slate-200 dark:before:bg-[#6366F1]/20 before:hidden md:before:block">
            {workExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="relative md:pl-12 group"
              >
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-4 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-white dark:bg-[#070913] border-2 border-indigo-500 dark:border-[#6366F1] items-center justify-center group-hover:border-[#38BDF8] transition-colors shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-[#38BDF8]"></span>
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20 hover:border-indigo-400/50 dark:hover:border-[#6366F1]/45 hover:shadow-md dark:hover:shadow-[0_8px_30px_rgba(13,17,39,0.7)] transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-[#6366F1]/15">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
                          {exp.role}
                        </h3>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${exp.badgeColor}`}
                        >
                          {exp.statusBadge}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-[#38BDF8] mt-1">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-[#94A3B8] shrink-0 font-mono">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={13} className="text-slate-400 dark:text-[#64748B]" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} className="text-slate-400 dark:text-[#64748B]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-[#94A3B8]">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={15}
                          className="text-indigo-600 dark:text-[#38BDF8] shrink-0 mt-0.5"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-[#6366F1]/15 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-[#F4F2EC] text-slate-700 border border-slate-200/80 dark:bg-[#1B244A] dark:text-[#F8FAFC] dark:border-[#6366F1]/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PART 2: OPEN SOURCE PROGRAMS (SEPARATE TRACK) */}
        <div>
          <div className="flex items-center gap-2.5 mb-6 text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8]">
            <GitBranch size={15} className="text-indigo-600 dark:text-[#38BDF8]" />
            <span>National Open-Source Programs &amp; Leadership</span>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-6 before:w-0.5 before:bg-slate-200 dark:before:bg-[#6366F1]/20 before:hidden md:before:block">
            {openSourcePrograms.map((prog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="relative md:pl-12 group"
              >
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-4 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-white dark:bg-[#070913] border-2 border-[#38BDF8] items-center justify-center group-hover:border-indigo-400 transition-colors shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20 hover:border-indigo-400/50 dark:hover:border-[#6366F1]/45 hover:shadow-md dark:hover:shadow-[0_8px_30px_rgba(13,17,39,0.7)] transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-[#6366F1]/15">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
                          {prog.role}
                        </h3>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${prog.badgeColor}`}
                        >
                          {prog.statusBadge}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-[#38BDF8] mt-1">
                        {prog.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-[#94A3B8] shrink-0 font-mono">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={13} className="text-slate-400 dark:text-[#64748B]" />
                        {prog.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} className="text-slate-400 dark:text-[#64748B]" />
                        {prog.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-[#94A3B8]">
                    {prog.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={15}
                          className="text-[#38BDF8] shrink-0 mt-0.5"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-[#6366F1]/15 flex flex-wrap gap-1.5">
                    {prog.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-[#F4F2EC] text-slate-700 border border-slate-200/80 dark:bg-[#1B244A] dark:text-[#F8FAFC] dark:border-[#6366F1]/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
