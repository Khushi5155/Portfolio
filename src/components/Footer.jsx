import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-[#6366F1]/15 bg-white/70 dark:bg-[#070913]/95 text-slate-600 dark:text-[#94A3B8] py-8 px-6 md:px-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* ROW 1: BRANDING & QUICK NAVIGATION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="font-heading font-bold text-slate-900 dark:text-[#F8FAFC] text-sm tracking-tight">
              Khushi Kumari
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
              Software Engineer &amp; Full-Stack Developer
            </p>
          </div>

          {/* Quick Navigation */}
          <nav aria-label="Footer Quick Links">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-indigo-600 dark:text-[#94A3B8] dark:hover:text-[#38BDF8] transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ROW 2: SOCIALS, COPYRIGHT & BACK TO TOP */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-slate-200/60 dark:border-[#1E293B] text-xs">
          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Khushi5155"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 dark:bg-[#131B38] dark:hover:bg-[#1B244A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] border border-slate-200/70 dark:border-[#1E293B] transition"
            >
              <Github size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/khushi-kumari-bb4305327"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0077B5] hover:text-[#005582] dark:bg-[#131B38] dark:hover:bg-[#1B244A] dark:text-[#38BDF8] border border-slate-200/70 dark:border-[#1E293B] transition"
            >
              <Linkedin size={15} />
            </a>

            <a
              href="mailto:kkaayana5155@gmail.com"
              aria-label="Send Email"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-indigo-600 dark:bg-[#131B38] dark:hover:bg-[#1B244A] dark:text-[#94A3B8] dark:hover:text-[#38BDF8] border border-slate-200/70 dark:border-[#1E293B] transition"
            >
              <Mail size={15} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-slate-500 dark:text-[#94A3B8]/70 text-center">
            © {currentYear} Khushi Kumari. Crafted with React 19 &amp; Tailwind CSS.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-indigo-600 border border-slate-200/70 dark:bg-[#131B38] dark:hover:bg-[#1B244A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] dark:border-[#1E293B] text-xs font-medium transition cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
