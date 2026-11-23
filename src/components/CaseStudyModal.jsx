import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Trophy,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";

export default function CaseStudyModal({
  project,
  onClose,
  onSelectProject,
  allCaseStudies,
}) {
  const currentIndex = allCaseStudies.findIndex((p) => p.id === project.id);
  const prevProject =
    allCaseStudies[(currentIndex - 1 + allCaseStudies.length) % allCaseStudies.length];
  const nextProject =
    allCaseStudies[(currentIndex + 1) % allCaseStudies.length];

  // Close on Escape & navigate with arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onSelectProject(prevProject);
      } else if (e.key === "ArrowRight") {
        onSelectProject(nextProject);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onSelectProject, prevProject, nextProject]);

  // Lock body scroll
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-[#FAF9F5] dark:bg-[#070913] overflow-y-auto text-slate-800 dark:text-[#F8FAFC]"
    >
      {/* STICKY TOP NAVIGATION DOCK */}
      <header className="sticky top-0 left-0 w-full z-50 bg-[#FAF9F5]/90 dark:bg-[#070913]/90 backdrop-blur-md border-b border-slate-200/90 dark:border-[#6366F1]/15 px-6 md:px-12 py-3.5 flex items-center justify-between gap-4">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-indigo-600 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] transition cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </button>

        <div className="hidden sm:flex items-center gap-3">
          <span className="text-xs font-mono text-slate-500 dark:text-[#64748B]">
            Case Study {currentIndex + 1} of {allCaseStudies.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onSelectProject(prevProject)}
              aria-label="Previous Case Study"
              className="p-1.5 rounded-lg border border-slate-200 dark:border-[#6366F1]/20 hover:bg-slate-100 dark:hover:bg-[#131B38] text-slate-600 dark:text-[#94A3B8] transition cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              aria-label="Next Case Study"
              className="p-1.5 rounded-lg border border-slate-200 dark:border-[#6366F1]/20 hover:bg-slate-100 dark:hover:bg-[#131B38] text-slate-600 dark:text-[#94A3B8] transition cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/30 hover:border-indigo-400 dark:hover:border-[#6366F1] transition"
            >
              <Github size={13} />
              <span>Source Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-400 hover:to-indigo-500 shadow-sm transition"
            >
              <ExternalLink size={13} />
              <span>Live Site</span>
            </a>
          )}
          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-[#131B38] transition cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>
      </header>

      {/* CASE STUDY CONTENT WRAPPER */}
      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-12 md:py-16">
        {/* HERO HEADER */}
        <section className="pb-10 border-b border-slate-200/90 dark:border-[#6366F1]/15">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 dark:bg-[#131B38] dark:text-[#38BDF8] border border-indigo-200/80 dark:border-[#38BDF8]/30">
              {project.type}
            </span>
            {project.badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-[#FBBF24] border border-amber-200/80 dark:border-amber-500/30">
                <Trophy size={13} className="text-amber-500" />
                <span>{project.badge}</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] font-heading leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {project.summary}
          </p>

          {/* METADATA STRIP */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 p-5 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20 shadow-xs">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-[#64748B]">
                Role
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-900 dark:text-[#F8FAFC]">
                {project.role}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-[#64748B]">
                Timeline
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-900 dark:text-[#F8FAFC]">
                {project.timeline}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-[#64748B]">
                Categories
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-[#38BDF8]">
                {project.categories?.join(" · ")}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-[#64748B]">
                Repository
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-[#38BDF8] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span>Open Source</span>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 01: EXECUTIVE OVERVIEW */}
        <section className="py-10 border-b border-slate-200/90 dark:border-[#6366F1]/15">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-[#38BDF8]">
              01
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8]">
              Overview
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
            Executive Summary
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-[#94A3B8] leading-relaxed">
            {project.overview}
          </p>
          {project.achievement && (
            <div className="mt-6 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 dark:bg-[#131B38]/60 dark:border-amber-500/25 flex items-start gap-3">
              <Trophy size={18} className="text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-amber-900 dark:text-[#FBBF24]">
                  Recognized Achievement
                </p>
                <p className="text-xs text-amber-800 dark:text-[#94A3B8] mt-0.5">
                  {project.achievement}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* SECTION 02: PROBLEM & SOLUTION */}
        <section className="py-10 border-b border-slate-200/90 dark:border-[#6366F1]/15">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-[#38BDF8]">
              02
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8]">
              Analysis
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
            Problem Statement &amp; Technical Solution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* The Problem Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20">
              <div className="flex items-center gap-2 mb-3 text-rose-600 dark:text-rose-400">
                <AlertTriangle size={18} />
                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-[#F8FAFC]">
                  The Problem
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {/* The Solution Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20">
              <div className="flex items-center gap-2 mb-3 text-indigo-600 dark:text-[#38BDF8]">
                <Lightbulb size={18} />
                <h3 className="font-heading font-bold text-slate-900 dark:text-[#F8FAFC]">
                  The Solution
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {project.proposedSolution}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 03: SYSTEM ARCHITECTURE VISUALIZATION */}
        <section className="py-10 border-b border-slate-200/90 dark:border-[#6366F1]/15">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-[#38BDF8]">
              03
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8]">
              Architecture
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
            System Topology &amp; Interaction Pipeline
          </h2>

          <ArchitectureDiagram
            architecture={project.architecture}
            title={project.title}
          />
        </section>

        {/* SECTION 04: TECHNOLOGY STACK */}
        <section className="py-10 border-b border-slate-200/90 dark:border-[#6366F1]/15">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-[#38BDF8]">
              04
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8]">
              Technologies
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
            Technology Stack Breakdown
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mt-6">
            {project.techStack?.map((t, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white dark:bg-[#0D1127] border border-slate-200/80 dark:border-[#6366F1]/20 flex items-center justify-between"
              >
                <span className="text-xs font-mono font-semibold text-slate-900 dark:text-[#F8FAFC]">
                  {t.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-[#1B244A] dark:text-[#94A3B8]">
                  {t.category}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 05: KEY FEATURES */}
        <section className="py-10 border-b border-slate-200/90 dark:border-[#6366F1]/15">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-[#38BDF8]">
              05
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8]">
              Capabilities
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
            Key Implemented Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {project.keyFeatures?.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20 hover:border-indigo-400/50 dark:hover:border-[#6366F1]/45 transition"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1 rounded-md bg-indigo-50 text-indigo-600 dark:bg-[#131B38] dark:text-[#38BDF8]">
                    <CheckCircle2 size={16} />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-[#F8FAFC] text-sm">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 06: CONTRIBUTIONS */}
        <section className="py-10 border-b border-slate-200/90 dark:border-[#6366F1]/15">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-[#38BDF8]">
              06
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8]">
              Contributions
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
            Documented Engineering Contributions
          </h2>

          <div className="mt-6 space-y-3">
            {project.contributions?.map((c, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-[#0D1127] border border-slate-200/80 dark:border-[#6366F1]/20 flex items-start gap-3.5"
              >
                <div className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-[#1B244A] text-indigo-600 dark:text-[#38BDF8] flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-[#94A3B8] leading-relaxed">
                  {c}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 07: CHALLENGES & SOLUTIONS */}
        <section className="py-10 border-b border-slate-200/90 dark:border-[#6366F1]/15">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-[#38BDF8]">
              07
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8]">
              Challenges
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
            Technical Challenges &amp; Implemented Solutions
          </h2>

          <div className="space-y-4 mt-6">
            {project.challenges?.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20"
              >
                <div className="flex items-start gap-3 pb-3 mb-3 border-b border-slate-100 dark:border-[#6366F1]/15">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400 shrink-0">
                    CHALLENGE
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-[#F8FAFC]">
                    {item.challenge}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 shrink-0">
                    SOLUTION
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 08: OUTCOMES & LEARNINGS */}
        <section className="py-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-[#38BDF8]">
              08
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8]">
              Takeaways
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
            Project Outcomes &amp; Technical Learnings
          </h2>

          <div className="mt-6 space-y-3">
            {project.outcomes?.map((out, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-[#0D1127] border border-slate-200/80 dark:border-[#6366F1]/20 flex items-start gap-3"
              >
                <CheckCircle2
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
                />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-[#94A3B8] leading-relaxed">
                  {out}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CASE STUDY SWITCHER */}
        <footer className="mt-14 pt-8 border-t border-slate-200/90 dark:border-[#6366F1]/15">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="w-full sm:w-auto p-4 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/80 dark:border-[#6366F1]/20 hover:border-indigo-400 text-left transition cursor-pointer"
            >
              <span className="text-[11px] font-mono text-slate-400 dark:text-[#64748B] flex items-center gap-1">
                <ChevronLeft size={13} /> Previous Study
              </span>
              <p className="font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-[#F8FAFC] mt-1">
                {prevProject.title}
              </p>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="w-full sm:w-auto p-4 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/80 dark:border-[#6366F1]/20 hover:border-indigo-400 text-right transition cursor-pointer"
            >
              <span className="text-[11px] font-mono text-slate-400 dark:text-[#64748B] flex items-center justify-end gap-1">
                Next Study <ChevronRight size={13} />
              </span>
              <p className="font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-[#F8FAFC] mt-1">
                {nextProject.title}
              </p>
            </button>
          </div>
        </footer>
      </main>
    </motion.div>
  );
}
