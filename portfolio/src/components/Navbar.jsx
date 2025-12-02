import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-4 
      bg-[#0A192F]/80 backdrop-blur-xl border-b border-[#00FF9D]/40
      flex justify-between items-center z-50 shadow-[0_0_20px_#00FF9D40]">

      {/* LOGO */}
      <h1 className="text-3xl font-bold tracking-wider text-[#00FF9D] font-poppins 
        hover:drop-shadow-[0_0_10px_#00FF9D] transition-all duration-300 cursor-pointer">
        <a href="#home">&lt;Khushi /&gt;</a>
      </h1>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-12 text-lg font-inter">
        {["Home", "Skills", "Projects", "Achivements", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-[#E6F1FF] hover:text-[#00FF9D] 
                hover:drop-shadow-[0_0_10px_#00FF9D] transition-all duration-300
                cursor-pointer relative group"
            >
              {item}

              {/* underline animation */}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#00FF9D] 
                group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-[#00FF9D] hover:scale-110 transition duration-300"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0A192F]/95 backdrop-blur-xl 
          border-l border-[#00FF9D]/40 transform transition-transform duration-300 
          ${mobileOpen ? "translate-x-0" : "translate-x-full"} shadow-[0_0_20px_#00FF9D40]`}
      >
        <ul className="flex flex-col gap-8 text-xl p-10 font-inter">
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                onClick={() => setMobileOpen(false)}
                href={`#${item.toLowerCase()}`}
                className="text-[#E6F1FF] hover:text-[#00FF9D] 
                  hover:drop-shadow-[0_0_10px_#00FF9D] transition-all duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
