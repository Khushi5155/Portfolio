import { motion } from "framer-motion";
import {
  ArrowDown,
  FileText,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  GraduationCap,
} from "lucide-react";
import profileImg from "../assets/profile1.jpeg";
import Button from "../components/Button";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] w-full flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-200/20 dark:bg-slate-800/20 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.025] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* TEXT CONTENT (Col 1-7) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 dark:bg-slate-900/90 dark:border-slate-800 dark:text-slate-300 mb-5 backdrop-blur-sm shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-status-pulse"></span>
            <span className="font-medium">Open to Freelance Projects</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 dark:text-white font-heading leading-tight">
            Hi, I'm <span className="text-emerald-600 dark:text-emerald-400">Khushi Kumari.</span>
          </h1>

          {/* Supporting Headline */}
          <p className="mt-2.5 text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300 font-heading">
            Full-Stack Developer | React Developer | AI Enthusiast
          </p>

          {/* Introduction Paragraphs */}
          <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            <p>
              I'm a Computer Science undergraduate at{" "}
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                Guru Gobind Singh Indraprastha University
              </span>
              , passionate about turning ideas into useful, user-friendly web applications.
            </p>
            <p>
              I enjoy building responsive interfaces, developing backend APIs, integrating databases,
              and exploring AI-powered solutions.
            </p>
            <p className="text-slate-700 dark:text-slate-300 font-medium pt-0.5">

            </p>
          </div>

          {/* Academic Information Strip */}
          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 text-xs font-mono text-slate-700 dark:text-slate-300">
            <GraduationCap size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="font-medium">B.Tech CSE | 9.0 CGPA | GGSIPU |  of 2028</span>
          </div>

          {/* PRIMARY ACTIONS */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-7 w-full sm:w-auto">
            <Button
              href="#projects"
              text="View My Work"
              variant="primary"
              size="md"
              icon={FolderGit2}
            />
            <Button
              href="#contact"
              text="Let's Discuss Your Project"
              variant="secondary"
              size="md"
              icon={MessageSquare}
            />
            <Button
              href="/resume.pdf"
              download="Khushi_Kumari_Resume.pdf"
              text="Download Resume"
              variant="secondary"
              size="md"
              icon={FileText}
            />
          </div>

          {/* SOCIAL & QUICK CONTACT */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 w-full justify-center lg:justify-start">
            <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
              Connect
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Khushi5155"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-kumari-bb4305327"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:kkaayana5155@gmail.com"
                aria-label="Send Email"
                className="p-2 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs transition-all duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* PROFILE CARD / MEDIA (Col 8-12) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-64 sm:w-72 md:w-80 group">
            {/* Subtle glow rim */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-emerald-500/20 to-slate-300/30 dark:to-slate-800/20 blur-lg opacity-40 group-hover:opacity-70 transition duration-500" />

            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/90 p-2 shadow-xl dark:shadow-2xl">
              <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[4/5]">
                <img
                  src={profileImg}
                  alt="Khushi Kumari"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Floating Meta Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs shadow-md">
                  <div>
                    <p className="text-slate-900 dark:text-white font-semibold">Khushi Kumari</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">B.Tech CSE • CGPA 9.0</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                    GGSIPU '28
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL DOWN INDICATOR */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-200/50 dark:hover:bg-slate-900/50 transition duration-200"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
