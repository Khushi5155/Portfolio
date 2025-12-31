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
    <>
      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMobileOpen(false)}
        className="fixed inset-0 bg-black/50 z-[55]"
      />

      {/* SIDE DRAWER */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-[75%] sm:w-[60%]
        bg-[#0A192F] backdrop-blur-xl
        border-l border-[#00FF9D]/20
        z-[60] px-6 py-8"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-[#00FF9D]"
        >
          <X size={30} />
        </button>

        {/* MENU */}
        <ul className="mt-20 flex flex-col gap-8 text-xl font-medium">
          {navItems.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <a
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="text-[#E6F1FF] hover:text-[#00FF9D]
                transition"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.aside>
    </>
  )}
</AnimatePresence>

    </>
  );
}
