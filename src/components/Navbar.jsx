import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileText, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Achievements", id: "achievements" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Scroll listener for background blur and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ["home", ...navItems.map((item) => item.id)];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <>
      <nav
        aria-label="Primary Navigation"
        className={`fixed top-0 left-0 w-full h-18 px-6 md:px-12 flex items-center justify-between z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF9F5]/90 dark:bg-[#070913]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-[#6366F1]/15 shadow-xs dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* BRAND IDENTITY */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-slate-900 dark:text-[#F8FAFC] transition select-none"
        >
          <span className="font-heading font-bold text-lg md:text-xl tracking-tight text-slate-900 dark:text-[#F8FAFC] group-hover:text-indigo-600 dark:group-hover:text-[#38BDF8] transition-colors">
            Khushi Kumari
          </span>
        </a>

        {/* DESKTOP FLOATING NAVIGATION DOCK */}
        <div className="hidden lg:flex items-center gap-3">
          <ul className="flex items-center gap-1 p-1.5 rounded-full bg-white/80 dark:bg-[#0D1127]/80 border border-slate-200/80 dark:border-[#6366F1]/20 backdrop-blur-md shadow-xs dark:shadow-none text-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    className={`relative z-10 block px-3.5 py-1.5 rounded-full transition-colors duration-200 font-medium ${
                      isActive
                        ? "text-indigo-600 dark:text-[#38BDF8] font-semibold"
                        : "text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-[#F8FAFC]"
                    }`}
                  >
                    {item.name}
                  </a>

                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-slate-100 dark:bg-[#1B244A] border border-slate-200 dark:border-[#6366F1]/30 shadow-2xs z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* THEME TOGGLE (DESKTOP) */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-slate-100 border border-slate-200/80 dark:border-[#6366F1]/20 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] dark:hover:bg-[#131B38] transition-all duration-200 cursor-pointer"
          >
            {isDark ? (
              <Sun size={17} className="text-[#FBBF24]" />
            ) : (
              <Moon size={17} className="text-slate-700" />
            )}
          </button>

          {/* RESUME CTA BUTTON */}
          <a
            href="/resume.pdf"
            download="Khushi_Kumari_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200/90 dark:bg-[#6366F1]/15 dark:text-[#38BDF8] dark:border-[#6366F1]/30 dark:hover:bg-[#6366F1]/25 transition-all duration-200 shadow-2xs"
          >
            <FileText size={13} />
            <span>Resume</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* MOBILE ACTIONS HEADER */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* THEME TOGGLE (MOBILE HEADER) */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-slate-600 hover:text-indigo-600 hover:bg-slate-100 border border-slate-200 dark:border-[#6366F1]/20 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] dark:hover:bg-[#131B38] transition cursor-pointer"
          >
            {isDark ? (
              <Sun size={18} className="text-[#FBBF24]" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>

          <a
            href="/resume.pdf"
            download="Khushi_Kumari_Resume.pdf"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-[#6366F1]/15 dark:text-[#38BDF8] dark:border-[#6366F1]/30"
          >
            Resume
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-700 dark:text-[#F8FAFC] hover:text-indigo-600 dark:hover:text-[#38BDF8] hover:bg-slate-100 dark:hover:bg-[#131B38] rounded-lg transition cursor-pointer"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE SLIDE-IN DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xs z-[55] lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[82%] sm:w-[320px] bg-[#FAF9F5] dark:bg-[#0D1127] border-l border-slate-200 dark:border-[#6366F1]/20 z-[60] p-6 flex flex-col justify-between lg:hidden shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-[#6366F1]/15">
                  <span className="font-heading font-bold text-base text-slate-900 dark:text-[#F8FAFC]">
                    Navigation
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleTheme}
                      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                      className="p-1.5 text-slate-600 dark:text-[#94A3B8] hover:text-indigo-600 dark:hover:text-[#F8FAFC] rounded-lg border border-slate-200 dark:border-[#6366F1]/20"
                    >
                      {isDark ? (
                        <Sun size={17} className="text-[#FBBF24]" />
                      ) : (
                        <Moon size={17} className="text-slate-700" />
                      )}
                    </button>
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-white rounded-lg"
                      aria-label="Close menu"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <ul className="mt-6 flex flex-col gap-1.5">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                          activeSection === item.id
                            ? "bg-indigo-50 text-indigo-700 dark:bg-[#1B244A] dark:text-[#38BDF8] font-semibold"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:bg-[#131B38] dark:hover:text-[#F8FAFC]"
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-[#6366F1]/15">
                <a
                  href="/resume.pdf"
                  download="Khushi_Kumari_Resume.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-400 hover:to-indigo-500 shadow-md shadow-indigo-500/20 transition"
                >
                  <FileText size={16} />
                  Download Resume
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
