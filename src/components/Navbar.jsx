import { useState, useEffect } from "react";
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

  /* 🔒 Disable background scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full h-20 px-6 md:px-16
        bg-[#0A192F]/80 backdrop-blur-xl
        border-b border-[#00FF9D]/20
        flex items-center justify-between
        z-50">

        {/* LOGO */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold tracking-wider text-[#00FF9D]
          hover:drop-shadow-[0_0_12px_#00FF9D] transition"
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
                <span className="absolute left-0 -bottom-1 w-0 h-[2px]
                  bg-[#00FF9D] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#00FF9D] z-[60]"
        >
          {mobileOpen ? <X size={34} /> : <Menu size={34} />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55]"
          >
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-black/60"
            />

            {/* SLIDE PANEL */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full
              bg-[#0A192F]/95 backdrop-blur-xl
              flex items-center justify-center"
            >
              <ul className="flex flex-col gap-10 text-2xl font-semibold">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="text-[#E6F1FF] hover:text-[#00FF9D]
                      transition hover:scale-110"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
