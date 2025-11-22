export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-[#0A192F] text-white px-6 text-center"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4 border-b-4 border-pink-500 pb-2">
        About Me
      </h2>

      {/* Content */}
      <p className="max-w-2xl text-lg leading-relaxed">
        I am a passionate web developer who loves building interactive and
        modern websites using <span className="text-pink-500">React + Vite</span> 
        and Tailwind CSS.  
        I enjoy solving problems, learning new technologies, 
        and turning ideas into beautiful UI. 🚀
      </p>

      {/* Button */}
      <a
        href="/src/assets/resume.pdf"
        target="_blank"
        className="mt-6 px-6 py-2 border border-pink-500 rounded-lg hover:bg-pink-500 hover:text-black transition-all duration-300"
      >
        View Resume 📄
      </a>
    </section>
  );
}