import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-[#E6F1FF] py-10 mt-20 border-t border-[#00FF9D]/30">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding / Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold tracking-wide"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <span className="text-[#00FF9D]">&lt;/&gt;</span> YourName.dev
        </motion.h2>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex gap-6"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="icon-btn"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="icon-btn"
          >
            <Linkedin size={22} />
          </a>
          <a href="mailto:youremail@gmail.com" className="icon-btn">
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-8 text-center text-sm text-[#8892B0]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        © {new Date().getFullYear()} <span className="text-[#00FF9D]">YourName</span>.  
        Made with <Heart size={14} className="inline text-[#00FF9D]" /> & passion.
      </motion.div>
    </footer>
  );
}
