export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-4 
      bg-[#0A192F]/80 backdrop-blur-xl border-b border-[#00FF9D]/40
      flex justify-between items-center z-50">
      
      {/* BRAND LOGO / NAME */}
      <h1 className="text-3xl font-bold tracking-wider text-[#00FF9D] font-poppins 
        hover:drop-shadow-[0_0_8px_#00FF9D] transition-all duration-300 cursor-pointer">
        &lt;Khushi /&gt;
      </h1>

      {/* NAV LINKS */}
      <ul className="hidden md:flex gap-10 text-lg font-inter">
        <li className="text-[#E6F1FF] hover:text-[#00FF9D] 
          transition duration-300 cursor-pointer hover:scale-110">
          Home
        </li>
        <li className="text-[#E6F1FF] hover:text-[#00FF9D] 
          transition duration-300 cursor-pointer hover:scale-110">
          Skills
        </li>
        <li className="text-[#E6F1FF] hover:text-[#00FF9D] 
          transition duration-300 cursor-pointer hover:scale-110">
          Projects
        </li>
        <li className="text-[#E6F1FF] hover:text-[#00FF9D] 
          transition duration-300 cursor-pointer hover:scale-110">
          Contact
        </li>
      </ul>
    </nav>
  );
}
