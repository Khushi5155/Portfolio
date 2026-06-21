// src/sections/About.jsx
import CardItem from "../components/CardItem";
 
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center bg-[#0A192F]
                 px-5 sm:px-6"
    >
      <div className="w-full max-w-3xl animate-slideUp
                      text-left md:text-left">
 
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#E6F1FF]">
          About <span className="text-[#00FF9D]">Me</span>
        </h2>
 
        <div className="w-20 sm:w-24 h-1 bg-[#00FF9D]
                        mt-2 mb-5 rounded-full"></div>
 
        {/* Description */}
        <p className="text-[#8892B0] text-base sm:text-lg
                      leading-relaxed font-inter">
          I'm a{" "}
          <span className="text-[#00FF9D] font-semibold">
            3rd-year B.Tech CSE student
          </span>{" "}
          who builds full-stack web applications end-to-end — from database
          schema and API design through to deployment and production
          debugging. I don't just prototype; I ship apps that real users can
          rely on.
        </p>
 
        <p className="mt-4 text-[#8892B0] text-base sm:text-lg
                      leading-relaxed font-inter">
          My stack centers on{" "}
          <span className="text-[#00FF9D] font-semibold">
            React, Tailwind CSS, Node.js / Express, and FastAPI
          </span>
          , backed by MongoDB and cloud deployment on{" "}
          <span className="text-[#00FF9D] font-semibold">Vercel and Render</span>.
          I've built and deployed an NGO volunteer management platform with
          JWT auth and AI-powered matching, a subject-wise attendance tracker
          with a predictive engine, and an AI-powered fake news detection
          system. I'm just as comfortable designing the logic as I am
          chasing down a production error.
        </p>
 
        <p className="mt-4 text-[#E6F1FF] italic text-base sm:text-lg font-inter">
          "I don't just write code — I ship products, end to end."
        </p>
 
        {/* Skills */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2
                        gap-3 text-[#E6F1FF] font-inter text-sm sm:text-base">
          {[
            "Full-Stack Development (MERN + FastAPI)",
            "REST API Design & Integration",
            "Cloud Deployment (Vercel, Render)",
            "AI-Integrated Web Applications",
          ].map((skill) => (
            <div key={skill} className="flex items-center gap-3">
              <span className="text-[#00FF9D]">✔</span>
              {skill}
            </div>
          ))}
        </div>
 
        {/* Resume Button */}
        <div className="mt-8 flex justify-start">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-[#00FF9D]
                       rounded-lg text-sm sm:text-base
                       hover:bg-[#00FF9D] hover:text-black
                       transition-all duration-300 font-semibold"
          >
            View Resume 
          </a>
        </div>
      </div>
    </section>
  );
}
 