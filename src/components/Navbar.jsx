import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "achievements" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-20 px-6 md:px-16 
        bg-[#0A192F]/80 backdrop-blur-xl border-b border-[#00FF9D]/30
        flex justify-between items-center z-50">

        {/* LOGO */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold tracking-wider text-[#00FF9D]
          hover:drop-shadow-[0_0_10px_#00FF9D] transition"
        >
          &lt;Khushi /&gt;
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={`#${item.id}`}
                className="text-[#E6F1FF] hover:text-[#00FF9D] transition"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00FF9D]
                  group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-[#00FF9D]"
        >
          <Menu size={32} />
        </button>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#0A192F]/95 backdrop-blur-xl z-[60]"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-[#00FF9D]"
            >
              <X size={36} />
            </button>

            {/* MENU ITEMS */}
            <ul className="h-full flex flex-col items-center justify-center gap-10 text-2xl">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-[#E6F1FF] hover:text-[#00FF9D]
                    transition hover:scale-110"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
