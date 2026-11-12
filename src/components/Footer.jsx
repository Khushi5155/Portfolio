import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/90 dark:bg-[#070b12] text-slate-600 dark:text-slate-400 py-12 px-6 md:px-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-heading font-bold text-slate-900 dark:text-slate-200 text-sm">
            Khushi Kumari
          </span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
          <p className="text-slate-600 dark:text-slate-400">
            Full-Stack Developer | React Developer | AI Enthusiast
          </p>
        </div>

        {/* Center/Right: Socials & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Khushi5155"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/khushi-kumari-bb4305327"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:kkaayana5155@gmail.com"
              aria-label="Email"
              className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition"
            >
              <Mail size={16} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-700 dark:text-slate-400 dark:hover:text-white transition cursor-pointer"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-200 dark:border-slate-900 text-center text-[11px] text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {currentYear} Khushi Kumari. All rights reserved.</p>
        <p className="font-mono text-slate-500 dark:text-slate-400">
          Built with React 19, Tailwind CSS v4 &amp; Vite
        </p>
      </div>
    </footer>
  );
}
