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
      setScrolled(window.scrollY > 30);

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
        className={`fixed top-0 left-0 w-full h-18 px-6 md:px-12 flex items-center justify-between z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f8fafc]/90 dark:bg-[#090d16]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm shadow-slate-900/5 dark:shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* LOGO */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-white transition"
        >
          <span className="font-heading font-bold text-lg md:text-xl tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            Khushi Kumari
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-status-pulse"></span>
            <span className="hidden sm:inline">Open to Roles</span>
          </span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-2">
          <ul className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/60 backdrop-blur-sm text-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`px-3 py-1.5 rounded-full transition-all duration-200 text-xs font-medium ${
                      isActive
                        ? "bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* THEME TOGGLE BUTTON (DESKTOP) */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-slate-100 border border-slate-200/80 dark:border-slate-800/80 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-800/60 transition-all duration-200 cursor-pointer"
          >
            {isDark ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-slate-700" />
            )}
          </button>

          {/* RESUME CTA */}
          <a
            href="/resume.pdf"
            download="Khushi_Kumari_Resume.pdf"
            className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-200"
          >
            <FileText size={13} />
            <span>Resume</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* THEME TOGGLE (MOBILE HEADER) */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-1.5 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-slate-100 border border-slate-200 dark:border-slate-800 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-800/60 transition cursor-pointer"
          >
            {isDark ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>

          <a
            href="/resume.pdf"
            download="Khushi_Kumari_Resume.pdf"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"
          >
            Resume
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition cursor-pointer"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[80%] sm:w-[320px] bg-white dark:bg-[#0c1220] border-l border-slate-200 dark:border-slate-800 z-[60] p-6 flex flex-col justify-between lg:hidden shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
                  <span className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">
                    Navigation
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleTheme}
                      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                      className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white rounded-md border border-slate-200 dark:border-slate-800"
                    >
                      {isDark ? (
                        <Sun size={18} className="text-amber-400" />
                      ) : (
                        <Moon size={18} className="text-slate-700" />
                      )}
                    </button>
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-md"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <ul className="mt-6 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                          activeSection === item.id
                            ? "bg-slate-100 text-emerald-700 dark:bg-slate-800/80 dark:text-emerald-400 font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-white"
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="/resume.pdf"
                  download="Khushi_Kumari_Resume.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition"
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
