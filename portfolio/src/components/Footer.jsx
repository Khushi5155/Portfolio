import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-[#E6F1FF] py-10 mt-20 border-t border-[#00FF9D]/30">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* BRANDING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold tracking-wide"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <span className="text-[#00FF9D]">&lt;/&gt;</span> Khushi.dev
        </motion.h2>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex gap-6"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="icon-btn hover:text-[#00FF9D] transition-all duration-300"
          >
            <Github size={22} />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="icon-btn hover:text-[#00FF9D] transition-all duration-300"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="mailto:khushi@gmail.com"
            className="icon-btn hover:text-[#00FF9D] transition-all duration-300"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      {/* FOOTER BOTTOM */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-8 text-center text-sm text-[#8892B0]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        © {new Date().getFullYear()}  
        <span className="text-[#00FF9D] font-semibold"> Khushi</span>.  
        Built with <Heart size={14} className="inline text-[#00FF9D]" /> dedication & passion.
      </motion.div>
    </footer>
  );
}
