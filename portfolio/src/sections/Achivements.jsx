import { FaTrophy, FaMedal } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function Achievements() {
  const [openLOR, setOpenLOR] = useState(false);

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
      <div className="max-w-5xl w-full">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#E6F1FF]">
          My <span className="text-[#00FF9D]">Achievements</span>
        </h2>
        <div className="w-28 h-1 bg-[#00FF9D] mt-2 mb-12 rounded-full"></div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#112240] border border-[#00FF9D]/30 p-6 rounded-xl
                         shadow-lg hover:shadow-[0_0_20px_#00FF9D]
                         transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-[#0A192F] border border-[#00FF9D]/40">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00FF9D]">
                    {item.title}
                  </h3>
                  <p className="text-[#B8C2D8] mt-2 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-wrap gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setOpenLOR(true)}
            className="px-6 py-3 border border-[#00FF9D] text-[#E6F1FF]
                       rounded-lg hover:bg-[#00FF9D] hover:text-black
                       transition-all duration-300 font-semibold"
          >
            View Letter of Recommendation ⭐
          </motion.button>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {openLOR && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm
                         flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-[#0A192F] w-[90%] md:w-[70%] h-[80%]
                           rounded-xl border border-[#00FF9D]/40 shadow-xl relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setOpenLOR(false)}
                  className="absolute top-4 right-4 text-[#00FF9D] hover:scale-110"
                >
                  <X size={28} />
                </button>

                {/* PDF Viewer */}
                <iframe
                  src="/lor-gssoc.jpg"
                  className="w-full h-full rounded-xl"
                  title="Letter of Recommendation"
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
