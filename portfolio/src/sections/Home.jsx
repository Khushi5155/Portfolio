// src/sections/Home.jsx
import CardItem from "../components/CardItem";
import profileImg from "../assets/profile.jpg";
import Button from "../components/Button";
import Particles from "react-tsparticles";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-[#0A192F] flex items-center justify-center overflow-hidden">

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00101E] opacity-70 z-0" />

      {/* PARTICLES (full screen) */}
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

      {/* MAIN CARD */}
     
        <div className="pt-20 md:pt-28 flex flex-col items-center text-center md:text-left md:flex-row gap-10">

          {/* Floating Profile Image */}
          <img
            src={profileImg}
            alt="Profile"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-[3px] border-[#00FF9D]
            shadow-[0_0_20px_#00FF9D] hover:scale-110 transition-transform duration-500 animate-floating"
          />

          {/* Text Section */}
          <div className="max-w-lg animate-slideUp">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-[#E6F1FF]">
              Hi, I'm <span className="text-[#00FF9D]">Khushi</span> 👋
            </h1>

            {/* TYPEWRITER EFFECT */}
            <p className="mt-2 text-[#00FF9D] font-semibold text-xl typing-text">
              I build clean & modern web experiences.
            </p>

            <p className="mt-4 text-[#8892B0] font-inter text-lg leading-relaxed">
  A passionate
  <span className="text-[#00FF9D] font-semibold"> Web Developer</span>   
   who loves turning ideas into interactive, user-friendly interfaces.
 
  Always curious, always learning — currently exploring
  <span className="text-[#00FF9D] font-semibold"> React, Tailwind & AI-powered Web Apps.</span>
</p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <Button text="View Resume" link="/resume.pdf" />
              <Button text="Contact Me" id="contact" />
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-6 justify-center md:justify-start text-2xl">
              <a href="https://github.com/Khushi5155" className="hover:text-[#00FF9D] transition-all duration-300">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/khushi-kumari-bb4305327?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxXZ7%2FxLLRFSHA8JaNUTAAA%3D%3D" className="hover:text-[#00FF9D] transition-all duration-300">
                <FaLinkedin />
              </a>
              <a href="kkaayana5155@gmail.com" className="hover:text-[#00FF9D] transition-all duration-300">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
   

      {/* Scroll Down Arrow */}
      <a href="#about" className="absolute bottom-8 animate-bounce text-[#00FF9D] text-3xl">
        ↓
      </a>
    </section>
  );
}
