export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-4 bg-[#0A192F]/70 backdrop-blur-lg shadow-lg flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold tracking-widest text-green-400">
        &lt;Khushi /&gt;
      </h1>

      <ul className="hidden md:flex gap-8 text-lg">
        <li className="hover:text-green-400 cursor-pointer">Home</li>
        <li className="hover:text-green-400 cursor-pointer">Skills</li>
        <li className="hover:text-green-400 cursor-pointer">Projects</li>
        <li className="hover:text-green-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
