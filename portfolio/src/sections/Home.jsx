// src/sections/Home.jsx
import CardItem from "../components/CardItem";
import profileImg from "../assets/profile.jpg";
import Button from "../components/Button";
import Particles from "react-tsparticles";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#0A192F] flex items-center justify-center overflow-hidden"
    >
      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00101E] opacity-70 z-0" />

      {/* PARTICLES */}
      <Particles
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "#0A192F" },
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#00FF9D" },
          },
          fullScreen: false,
        }}
      />

      {/* MAIN CONTENT */}
      <div className="pt-20 md:pt-28 flex flex-col items-center text-center md:text-left md:flex-row gap-10">

        {/* PROFILE IMAGE (Same style as screenshot) */}
        <div className="relative w-64 md:w-80 mx-auto">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full object-contain select-none"
          />

          {/* Bottom Fade to blend with background */}
          <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#0A192F] to-transparent" />
        </div>

        {/* TEXT SECTION */}
        <div className="max-w-lg animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-[#E6F1FF]">
            Hi, I'm <span className="text-[#00FF9D]">Khushi</span> 👋
          </h1>

          {/* TYPEWRITER */}
          <p className="mt-2 text-[#00FF9D] font-semibold text-xl typing-text">
            I build clean & modern web experiences.
          </p>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[#8892B0] font-inter text-lg leading-relaxed">
            A passionate
            <span className="text-[#00FF9D] font-semibold"> Web Developer</span>
            who loves turning ideas into interactive, user-friendly interfaces.
            Always curious, always learning — currently exploring
            <span className="text-[#00FF9D] font-semibold">
              {" "}
              React, Tailwind & AI-powered Web Apps.
            </span>
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <Button text="View Resume" link="/resume.pdf" />
            <Button text="Contact Me" id="contact" />
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-6 justify-center md:justify-start text-2xl">
            <a
              href="https://github.com/Khushi5155"
              className="hover:text-[#00FF9D] transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/khushi-kumari-bb4305327"
              className="hover:text-[#00FF9D] transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:kkaayana5155@gmail.com"
              className="hover:text-[#00FF9D] transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL DOWN ARROW */}
      <a
        href="#about"
        className="absolute bottom-8 animate-bounce text-[#00FF9D] text-3xl"
      >
        ↓
      </a>
    </section>
  );
}
