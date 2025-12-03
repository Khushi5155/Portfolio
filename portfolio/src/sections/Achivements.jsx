// src/sections/Achievements.jsx
import { FaTrophy, FaMedal, FaCertificate, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
    icon: <FaTrophy className="text-[#00FF9D] text-4xl" />,
    title: "Top 25 Contributor – GSSoC 2025",
    description:
      "Selected as an official contributor for GirlScript Summer of Code and achieved a Top 25 rank among contributors.",
  },
  {
    icon: <FaMedal className="text-[#00FF9D] text-4xl" />,
    title: "3rd Position – CodeIgniter DSA Challenge",
    description:
      "Secured 3rd place in a Data Structures & Algorithms coding challenge, showcasing strong problem-solving skills.",
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
                         transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">

                {/* Icon */}
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
      </div>
    </section>
  );
}
