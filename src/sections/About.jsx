// src/sections/About.jsx
import CardItem from "../components/CardItem";

export default function About() {
  return (
    <section
  id="about"
  className="min-h-screen w-full flex items-center justify-center bg-[#0A192F] px-6"
>
  <div className="text-center md:text-left animate-slideUp max-w-3xl">

    {/* Heading */}
    <h2 className="text-4xl font-bold text-[#E6F1FF]">
      About <span className="text-[#00FF9D]">Me</span>
    </h2>
    <div className="w-24 h-1 bg-[#00FF9D] mx-auto md:mx-0 mt-2 mb-6 rounded-full"></div>

    {/* Description */}
    <p className="text-[#8892B0] text-lg leading-relaxed font-inter">
      I am a <span className="text-[#00FF9D] font-semibold">2nd-year B.Tech CSE student</span>  
      with a growing passion for web development and modern UI/UX design.  
      As a beginner, I focus on building my skills every day and believe that
      <span className="text-[#00FF9D] font-semibold"> consistent learning</span> 
      is the real key to growth.
    </p>

    <p className="mt-4 text-[#8892B0] text-lg leading-relaxed font-inter">
      I love working with technologies like  
      <span className="text-[#00FF9D] font-semibold"> HTML, CSS, JavaScript, React, and Tailwind CSS</span>.  
      I'm dedicated, hard-working, and passionate about turning ideas into 
      clean, responsive, and user-friendly digital experiences 🚀.
    </p>

    <p className="mt-4 text-[#E6F1FF] font-inter italic text-lg">
      “I may be a beginner today, but I am preparing to become a professional tomorrow.”
    </p>

    {/* Skills */}
    <div className="mt-6 text-[#E6F1FF] space-y-2 font-inter">
      <div className="flex gap-3 items-center">
        <span className="text-[#00FF9D]">✔</span> Frontend Development
      </div>
      <div className="flex gap-3 items-center">
        <span className="text-[#00FF9D]">✔</span> Modern UI / UX Design
      </div>
      <div className="flex gap-3 items-center">
        <span className="text-[#00FF9D]">✔</span> React | Vite | Tailwind
      </div>
      <div className="flex gap-3 items-center">
        <span className="text-[#00FF9D]">✔</span> Passion for Learning & Growth
      </div>
    </div>

    {/* Resume Button */}
    <div className="mt-8">
      <a
        href="/resume.pdf"
        target="_blank"
        className="px-6 py-2 border border-[#00FF9D] rounded-lg
                  hover:bg-[#00FF9D] hover:text-black
                  transition-all duration-300 font-semibold"
      >
        View Resume 📄
      </a>
    </div>
  </div>
</section>

  );
}
