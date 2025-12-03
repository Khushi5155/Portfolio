// src/sections/Achievements.jsx
import { FaTrophy, FaMedal, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy className="text-[#00FF9D] text-4xl" />,
      title: "Top 25 Contributor – GSSoC 2025",
      description:
        "Selected as an official contributor for GirlScript Summer of Code and ranked among the Top 25 performers.",
    },
    {
      icon: <FaMedal className="text-[#00FF9D] text-4xl" />,
      title: "3rd Position – CodeIgniter DSA Challenge",
      description:
        "Achieved 3rd place in the DSA-based coding challenge, demonstrating strong logic and problem-solving skills.",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen w-full flex items-center justify-center bg-[#0A192F] px-6 py-20"
    >
      <div className="text-center md:text-left max-w-5xl animate-slideUp">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#E6F1FF]">
          My <span className="text-[#00FF9D]">Achievements</span>
        </h2>
        <div className="w-28 h-1 bg-[#00FF9D] mx-auto md:mx-0 mt-2 mb-12 rounded-full"></div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              className="bg-[#112240] border border-[#00FF9D]/30 p-6 rounded-xl
                         shadow-lg hover:shadow-[0_0_20px_#00FF9D]
                         transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                
                {/* Icon Box */}
                <div className="p-3 rounded-lg bg-[#0A192F] border border-[#00FF9D]/40">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-[#00FF9D]">
                    {item.title}
                  </h3>
                  <p className="text-[#B8C2D8] mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LOR + Certificates Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-[#E6F1FF]">
            Additional <span className="text-[#00FF9D]">Credentials</span>
          </h3>
          <div className="w-32 h-1 bg-[#00FF9D] mt-2 mb-6 rounded-full"></div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mt-4">

            {/* View LOR Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/lor.pdf" // <-- replace with your LOR file/image
              target="_blank"
              className="px-6 py-3 border border-[#00FF9D] text-[#E6F1FF]
                        rounded-lg hover:bg-[#00FF9D] hover:text-black
                        transition-all duration-300 font-semibold"
            >
              View Letter of Recommendation ⭐
            </motion.a>

            {/* View Certificates Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/certificates" // <-- link to certificates page OR Google Drive folder
              target="_blank"
              className="px-6 py-3 border border-[#00FF9D] text-[#E6F1FF]
                        rounded-lg hover:bg-[#00FF9D] hover:text-black
                        transition-all duration-300 font-semibold"
            >
              View All Certificates 🎓
            </motion.a>

          </div>
        </div>

      </div>
    </section>
  );
}
