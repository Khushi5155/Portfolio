// src/sections/Contact.jsx
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-[#0A192F] text-white flex flex-col items-center justify-center px-6 py-16"
    >
      {/* SECTION HEADER */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#E6F1FF]">
          Get In <span className="text-[#00FF9D]">Touch</span> 📩
        </h2>
        <div className="w-24 h-1 bg-[#00FF9D] mx-auto mt-2 mb-10 rounded-full"></div>
        <p className="text-[#8892B0] max-w-xl text-center">
          Feel free to contact me for collaboration, projects, or just to say hi! 😊  
          I’m always open to new opportunities.
        </p>
      </div>

      {/* CONTACT CARD */}
      <div className="bg-[#112240] w-full max-w-lg p-8 mt-10 rounded-xl shadow-lg border border-transparent hover:border-[#00FF9D] hover:shadow-[0_0_20px_#00FF9D] transition-all duration-300 backdrop-blur-lg">
        
        {/* NAME & EMAIL FORM */}
        <form action="https://formspree.io/f/yourFormID" method="POST" className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-gray-800 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-[#00FF9D]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-gray-800 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-[#00FF9D]"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="bg-gray-800 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-[#00FF9D]"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#00FF9D] text-black py-3 rounded-md mt-3 font-semibold hover:bg-[#00e68d] transition-all duration-300"
          >
            Send Message 🚀
          </button>
        </form>

        {/* CONTACT LINKS */}
        <div className="mt-8 text-center">
          <p className="text-[#8892B0] mb-4">Or connect with me on:</p>

          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="mailto:your@email.com"
              className="hover:text-[#00FF9D] transition-all duration-300"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-[#00FF9D] transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="hover:text-[#00FF9D] transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="tel:+910000000000"
              className="hover:text-[#00FF9D] transition-all duration-300"
            >
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
