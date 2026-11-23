import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Trophy,
  ArrowUpRight,
  Sparkles,
  Info,
  X,
  CheckCircle2,
  Code2,
  Layers,
  BookOpen,
  Star,
  Activity,
  Terminal,
} from "lucide-react";
import { CASE_STUDIES, COMPACT_PROJECTS } from "../data/projectsData";
import CaseStudyModal from "../components/CaseStudyModal";

const CATEGORIES = ["All", "Full Stack", "AI / ML", "Frontend", "Open Source"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [selectedCompactProject, setSelectedCompactProject] = useState(null);

  const allProjects = [...CASE_STUDIES, ...COMPACT_PROJECTS];

  // Handle hash-based deep linking for case studies & browser back navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#case-study-")) {
        const id = hash.replace("#case-study-", "");
        const found = CASE_STUDIES.find((c) => c.id === id);
        if (found) {
          setSelectedCaseStudy(found);
          setSelectedCompactProject(null);
        }
      } else if (!hash.startsWith("#case-study-") && selectedCaseStudy) {
        setSelectedCaseStudy(null);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [selectedCaseStudy]);

  const handleOpenCaseStudy = (project) => {
    setSelectedCaseStudy(project);
    window.location.hash = `case-study-${project.id}`;
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudy(null);
    if (window.location.hash.startsWith("#case-study-")) {
      window.history.pushState(null, "", "#projects");
    }
  };

  const handleSwitchCaseStudy = (nextProject) => {
    setSelectedCaseStudy(nextProject);
    window.history.replaceState(null, "", `#case-study-${nextProject.id}`);
  };

  // Filter projects by category
  const filteredCaseStudies =
    activeCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.categories?.includes(activeCategory));

  const filteredCompactProjects =
    activeCategory === "All"
      ? COMPACT_PROJECTS
      : COMPACT_PROJECTS.filter((p) => p.categories?.includes(activeCategory));

  return (
    <section id="projects" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-10">
        <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-[#38BDF8] mb-2">
          Engineering Showcase
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] font-heading">
          Projects &amp; Case Studies
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full mt-3"></div>
        <p className="text-slate-600 dark:text-[#94A3B8] text-sm max-w-xl mt-3">
          Detailed software engineering case studies showcasing system architecture, graph systems, container orchestration, and verified outcomes.
        </p>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 rounded-2xl bg-[#F4F2EC] dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20 w-fit">
        {CATEGORIES.map((cat) => {
          const count =
            cat === "All"
              ? allProjects.length
              : allProjects.filter((p) => p.categories?.includes(cat)).length;

          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer select-none ${
                isActive
                  ? "bg-white dark:bg-[#1B244A] text-indigo-600 dark:text-[#38BDF8] shadow-xs border border-slate-200/90 dark:border-[#6366F1]/40 font-semibold"
                  : "text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:bg-slate-200/50 dark:hover:bg-[#131B38]"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700 dark:bg-[#0D1127] dark:text-[#38BDF8]"
                    : "bg-slate-200/80 text-slate-600 dark:bg-[#131B38] dark:text-[#94A3B8]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 1. MAJOR PROJECTS — DETAILED CASE STUDIES */}
      {filteredCaseStudies.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8]">
            <Sparkles size={14} className="text-indigo-600 dark:text-[#38BDF8]" />
            <span>Major Projects · Detailed Case Studies ({filteredCaseStudies.length})</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="flex flex-col justify-between rounded-3xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/25 hover:border-indigo-400/50 dark:hover:border-[#6366F1]/50 overflow-hidden shadow-xs dark:shadow-none hover:shadow-xl dark:hover:shadow-[0_12px_40px_rgba(13,17,39,0.8)] transition-all duration-300 group"
              >
                {/* PREVIEW HERO */}
                <div className="w-full h-52 sm:h-56 overflow-hidden relative bg-[#070913] flex items-center justify-center border-b border-slate-100 dark:border-[#6366F1]/15">
                  {project.id === "foundros" ? (
                    <div className="w-full h-full bg-gradient-to-br from-[#0D1127] via-[#070913] to-[#131B38] p-6 flex flex-col justify-between relative overflow-hidden">
                      {/* Graph Nodes Visual Decoration */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20%" cy="30%" r="4" fill="#38BDF8" />
                          <circle cx="80%" cy="35%" r="5" fill="#6366F1" />
                          <circle cx="50%" cy="70%" r="4" fill="#FBBF24" />
                          <circle cx="35%" cy="60%" r="3" fill="#38BDF8" />
                          <circle cx="70%" cy="80%" r="3" fill="#6366F1" />
                          <line x1="20%" y1="30%" x2="50%" y2="70%" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
                          <line x1="80%" y1="35%" x2="50%" y2="70%" stroke="#6366F1" strokeWidth="1" strokeDasharray="3 3" />
                          <line x1="35%" y1="60%" x2="20%" y2="30%" stroke="#38BDF8" strokeWidth="1" />
                        </svg>
                      </div>

                      {/* Clean header area for FoundrOS without top-level labels */}
                      <div className="relative z-10"></div>

                      <div className="space-y-1 relative z-10">
                        <div className="text-2xl font-bold font-heading text-white tracking-tight flex items-center gap-2">
                          <span className="text-[#38BDF8]">&lt;</span>
                          <span>FoundrOS</span>
                          <span className="text-[#38BDF8]">&gt;</span>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-[#38BDF8] border border-indigo-500/30 font-mono">
                            Live on Vercel
                          </span>
                        </div>
                        <p className="text-xs text-[#94A3B8] font-mono">
                          AI Startup Co-Pilot · Opportunity Matching Platform
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-95 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070913]/90 via-[#070913]/30 to-transparent" />
                    </>
                  )}

                  {/* Top Badge Overlay */}
                  {project.id !== "foundros" && project.badge && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#070913]/85 text-[#F8FAFC] border border-slate-700/80 backdrop-blur-md shadow-xs">
                      {project.badgeType === "trophy" && (
                        <Trophy size={13} className="text-amber-400" />
                      )}
                      {project.badgeType === "star" && (
                        <Star size={13} className="text-indigo-400" />
                      )}
                      <span>{project.badge}</span>
                    </div>
                  )}

                  {project.live && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/25 text-[#38BDF8] border border-indigo-400/40 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
                      <span>Live Site</span>
                    </div>
                  )}
                </div>

                {/* CARD BODY */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-indigo-600 dark:text-[#38BDF8] mb-1.5 block">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading tracking-tight group-hover:text-indigo-600 dark:group-hover:text-[#38BDF8] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-slate-600 dark:text-[#94A3B8] text-sm leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-[#6366F1]/15">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack?.slice(0, 4).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-medium bg-[#F4F2EC] text-slate-700 border border-slate-200/80 dark:bg-[#1B244A] dark:text-[#F8FAFC] dark:border-[#6366F1]/25"
                        >
                          {t.name}
                        </span>
                      ))}
                      {project.techStack?.length > 4 && (
                        <span className="px-2 py-0.5 rounded-lg text-xs font-mono text-slate-500 dark:text-[#64748B]">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Triggers */}
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <button
                        onClick={() => handleOpenCaseStudy(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/80 dark:bg-[#131B38] dark:hover:bg-[#1B244A] dark:text-[#38BDF8] dark:border-[#38BDF8]/30 transition-all duration-150 cursor-pointer shadow-xs"
                      >
                        <BookOpen size={14} />
                        <span>Read Case Study</span>
                        <ArrowUpRight size={13} />
                      </button>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 dark:bg-[#0D1127] dark:hover:bg-[#131B38] dark:text-[#94A3B8] dark:hover:text-white dark:border-[#6366F1]/25 transition"
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-400 hover:to-indigo-500 shadow-sm shadow-indigo-500/25 transition ml-auto"
                        >
                          <ExternalLink size={14} />
                          <span>Live Site</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* 2. COMPACT PROJECTS GALLERY */}
      {filteredCompactProjects.length > 0 && (
        <div className="pt-8 border-t border-slate-200/80 dark:border-[#6366F1]/15">
          <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8]">
            <Code2 size={14} className="text-indigo-600 dark:text-[#38BDF8]" />
            <span>Additional Software &amp; Systems Projects ({filteredCompactProjects.length})</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCompactProjects.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20 hover:border-indigo-400/50 dark:hover:border-[#6366F1]/45 hover:shadow-md dark:hover:shadow-[0_8px_30px_rgba(13,17,39,0.7)] transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-[#94A3B8] mb-2.5">
                      <span className="font-semibold text-indigo-600 dark:text-[#38BDF8] text-[11px] uppercase tracking-wider">
                        {item.type}
                      </span>
                      <div className="flex items-center gap-2">
                        {item.github && (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white transition"
                            aria-label={`GitHub for ${item.title}`}
                          >
                            <Github size={15} />
                          </a>
                        )}
                        {item.live && (
                          <a
                            href={item.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 dark:text-[#38BDF8] hover:underline transition"
                            aria-label={`Live Demo for ${item.title}`}
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h4 className="font-heading font-bold text-slate-900 dark:text-[#F8FAFC] text-base group-hover:text-indigo-600 dark:group-hover:text-[#38BDF8] transition-colors">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-[#6366F1]/15 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {item.tech.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#F4F2EC] text-slate-700 border border-slate-200/80 dark:bg-[#1B244A] dark:text-[#F8FAFC] dark:border-[#6366F1]/25"
                        >
                          {t}
                        </span>
                      ))}
                      {item.tech.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                          +{item.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedCompactProject(item)}
                      className="text-xs text-indigo-600 dark:text-[#38BDF8] hover:underline font-semibold cursor-pointer shrink-0"
                    >
                      Details →
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* FULL-PAGE IMMERSIVE CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <CaseStudyModal
            project={selectedCaseStudy}
            onClose={handleCloseCaseStudy}
            onSelectProject={handleSwitchCaseStudy}
            allCaseStudies={CASE_STUDIES}
          />
        )}
      </AnimatePresence>

      {/* COMPACT PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedCompactProject && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="compact-modal-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCompactProject(null)}
              className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[88vh] bg-[#FAF9F5] dark:bg-[#0D1127] border border-slate-200 dark:border-[#6366F1]/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
            >
              <div className="p-6 pb-4 border-b border-slate-200 dark:border-[#6366F1]/15 flex items-start justify-between gap-4 bg-white/70 dark:bg-[#070913]/60">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-[#38BDF8] block mb-1">
                    {selectedCompactProject.type}
                  </span>
                  <h3
                    id="compact-modal-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading"
                  >
                    {selectedCompactProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCompactProject(null)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-[#131B38] transition cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-5">
                {selectedCompactProject.problemStatement && (
                  <div className="p-4 rounded-xl bg-white dark:bg-[#131B38]/60 border border-slate-200/80 dark:border-[#6366F1]/20">
                    <p className="text-xs uppercase font-mono font-bold text-indigo-600 dark:text-[#38BDF8] mb-1">
                      Problem Context
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-[#94A3B8] leading-relaxed">
                      {selectedCompactProject.problemStatement}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8] mb-2">
                    System Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-[#F8FAFC] leading-relaxed">
                    {selectedCompactProject.longDescription || selectedCompactProject.description}
                  </p>
                </div>

                {selectedCompactProject.keyFeatures && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8] mb-2.5">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-[#94A3B8]">
                      {selectedCompactProject.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2
                            size={15}
                            className="text-indigo-600 dark:text-[#38BDF8] shrink-0 mt-0.5"
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCompactProject.technicalContribution && (
                  <div className="p-3.5 rounded-xl bg-[#F4F2EC] dark:bg-[#131B38] border border-slate-200/80 dark:border-[#6366F1]/20">
                    <p className="text-xs font-mono font-bold text-slate-500 dark:text-[#94A3B8] mb-1">
                      Engineering Contribution
                    </p>
                    <p className="text-xs text-slate-700 dark:text-[#F8FAFC]">
                      {selectedCompactProject.technicalContribution}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8] mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCompactProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white text-slate-800 border border-slate-200 dark:bg-[#1B244A] dark:text-[#F8FAFC] dark:border-[#6366F1]/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-slate-200 dark:border-[#6366F1]/15 bg-white dark:bg-[#070913]/70 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCompactProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-white transition cursor-pointer"
                >
                  Close
                </button>
                <div className="flex items-center gap-2">
                  {selectedCompactProject.github && (
                    <a
                      href={selectedCompactProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-100 dark:bg-[#131B38] text-slate-800 dark:text-white border border-slate-200 dark:border-[#6366F1]/30 transition"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}
                  {selectedCompactProject.live && (
                    <a
                      href={selectedCompactProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-400 hover:to-indigo-500 transition"
                    >
                      <ExternalLink size={14} />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
