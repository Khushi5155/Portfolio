// src/sections/Contact.jsx
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-[#0A192F] text-white flex flex-col items-center px-6 py-20"
    >
      {/* SECTION HEADER */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#E6F1FF] font-poppins">
          Let's <span className="text-[#00FF9D]">Connect</span>
        </h2>
        <div className="w-28 h-1 bg-[#00FF9D] mt-3 mx-auto rounded-full"></div>

        <p className="mt-5 text-[#8892B0] max-w-2xl mx-auto font-inter text-sm sm:text-base leading-relaxed">
          Whether you have a project in mind, want to collaborate, or simply say hello—  
          my inbox is always open. I’d love to hear from you! 🤝✨
        </p>
      </div>

      {/* CONTACT CARD */}
      <div
        className="bg-[#112240]/70 backdrop-blur-xl w-full max-w-xl p-10 mt-12 
        rounded-2xl shadow-xl border border-[#00FF9D]/20
        hover:border-[#00FF9D]/50 hover:shadow-[0_0_25px_#00FF9D] 
        transition-all duration-500"
      >
        {/* CONTACT FORM */}
        <form
          action="https://formspree.io/f/yourFormID"
          method="POST"
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-[#0A192F] border border-[#1f3b5b] text-white p-3 rounded-lg 
                       outline-none focus:ring-2 focus:ring-[#00FF9D] focus:border-[#00FF9D]
                       transition-all duration-300 font-inter"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-[#0A192F] border border-[#1f3b5b] text-white p-3 rounded-lg 
                       outline-none focus:ring-2 focus:ring-[#00FF9D] focus:border-[#00FF9D]
                       transition-all duration-300 font-inter"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="bg-[#0A192F] border border-[#1f3b5b] text-white p-3 rounded-lg 
                       outline-none focus:ring-2 focus:ring-[#00FF9D] focus:border-[#00FF9D]
                       transition-all duration-300 font-inter resize-none"
            required
          ></textarea>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#00FF9D] text-black py-3 rounded-lg mt-2 
                       font-semibold font-poppins tracking-wide
                       hover:bg-[#00e68d] active:scale-[0.98]
                       transition-all duration-300 shadow-[0_0_12px_#00ff9d]"
          >
            Send Message 🚀
          </button>
        </form>

        {/* SOCIAL LINKS */}
        <div className="mt-10 text-center">
          <p className="text-[#8892B0] mb-3 font-inter">Connect with me on:</p>

          <div className="flex justify-center gap-8 text-2xl">
            <a
              href="mailto:your@email.com"
              className="hover:text-[#00FF9D] transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-[#00FF9D] transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="hover:text-[#00FF9D] transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="tel:+910000000000"
              className="hover:text-[#00FF9D] transition-all duration-300 hover:scale-110"
            >
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
