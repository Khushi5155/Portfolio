// src/sections/About.jsx
import CardItem from "../components/CardItem";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center bg-[#0A192F] px-6"
    >
      <CardItem>
        <div className="text-center md:text-left animate-slideUp">

          {/* Heading */}
          <h2 className="text-4xl font-bold text-[#E6F1FF]">
            About <span className="text-[#00FF9D]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#00FF9D] mx-auto md:mx-0 mt-2 mb-6 rounded-full"></div>

          {/* Description */}
          <p className="text-[#8892B0] text-lg leading-relaxed font-inter">
            I am a passionate & dedicated 
            <span className="text-[#00FF9D] font-semibold"> Web Developer</span>  
            who loves crafting clean & interactive user experiences.
            I mostly work with <span className="text-[#00FF9D] font-semibold">React + Vite</span>  
            and <span className="text-[#00FF9D] font-semibold">Tailwind CSS</span>.
            <br />
            I enjoy solving problems, learning new technologies, and turning
            ideas into meaningful digital experiences 🚀.
          </p>

          {/* Skills / Timeline-ish */}
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
              <span className="text-[#00FF9D]">✔</span> Continuous Learning
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
      </CardItem>
    </section>
  );
}
