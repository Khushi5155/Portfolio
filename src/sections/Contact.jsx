// src/sections/Contact.jsx
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
 
export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
 
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name} (${email})`
    );
 
    window.location.href = `mailto:kkaayana5155@gmail.com?subject=${subject}&body=${body}`;
  }
 
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-[#0A192F] text-white flex flex-col items-center justify-center px-6 py-20"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2
          className="text-4xl md:text-5xl font-bold text-[#E6F1FF]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Let's Build Something  
          <span className="text-[#00FF9D]"> Amazing Together</span> 
        </h2>
 
        <div className="w-28 h-1 bg-[#00FF9D] mx-auto mt-3 rounded-full"></div>
 
        <p className="text-[#8892B0] max-w-xl mx-auto mt-4 text-lg">
          Whether you have a project idea, want to collaborate, or just want to say Hello —  
          I'm always excited to connect and explore new opportunities 
        </p>
      </motion.div>
 
      {/* CONTACT CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#112240] w-full max-w-xl p-8 rounded-2xl shadow-xl border border-[#00FF9D]/20 hover:border-[#00FF9D] hover:shadow-[0_0_25px_#00FF9D] transition-all duration-300 backdrop-blur-xl"
      >
        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="bg-gray-800/70 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-[#00FF9D]"
          />
 
          <motion.input
            whileFocus={{ scale: 1.02 }}
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="bg-gray-800/70 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-[#00FF9D]"
          />
 
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            placeholder="Your Message..."
            rows="5"
            required
            className="bg-gray-800/70 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-[#00FF9D]"
          ></motion.textarea>
 
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-[#00FF9D] text-black py-3 rounded-md font-semibold text-lg shadow-md hover:bg-[#00e68d] transition-all duration-300"
          >
            Send Message ✉️
          </motion.button>
 
          <p className="text-xs text-[#8892B0] text-center -mt-1">
            This opens your email app with the message pre-filled — nothing is sent automatically.
          </p>
        </form>
 
        {/* SOCIALS */}
        <div className="mt-10 text-center">
          <p className="text-[#8892B0] mb-4">Or reach me directly here</p>
 
          <div className="flex justify-center gap-8">
            <a
              href="mailto:kkaayana5155@gmail.com"
              className="icon-btn hover:text-[#00FF9D] transition-all duration-300"
            >
              <Mail size={26} />
            </a>
 
            <a
              href="https://github.com/Khushi5155"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn hover:text-[#00FF9D] transition-all duration-300"
            >
              <Github size={26} />
            </a>
 
            <a
              href="https://www.linkedin.com/in/khushi-kumari-bb4305327"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn hover:text-[#00FF9D] transition-all duration-300"
            >
              <Linkedin size={26} />
            </a>
 
            <a
              href="tel:+917982645256"
              className="icon-btn hover:text-[#00FF9D] transition-all duration-300"
            >
              <Phone size={26} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
 