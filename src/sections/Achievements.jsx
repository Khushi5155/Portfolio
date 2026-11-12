import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Medal, Award, Star, X, ExternalLink, FileText } from "lucide-react";

export default function Achievements() {
  const [openLOR, setOpenLOR] = useState(false);
  const [openCertificates, setOpenCertificates] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenLOR(false);
        setOpenCertificates(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const awards = [
    {
      title: "Team Winner – Dockfleet",
      event: "FOSS Hack 2026",
      scope: "National Open-Source Hackathon",
      scale: "2,360+ Teams • 5,400+ Participants",
      description:
        "Won national open-source hackathon for Dockfleet—a self-healing container orchestrator with real-time telemetry.",
      icon: Trophy,
      badge: "Winner",
      badgeColor: "text-amber-600 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/20",
    },
    {
      title: "Winner (Top 25) – FoundrOS",
      event: "HackHazards 2026",
      scope: "Global Innovation Hackathon",
      scale: "Top 25 / 2,657 Projects • 31,623 Participants",
      description:
        "Selected as a winning project among the top 25 submissions for FoundrOS, an AI co-pilot matching startup profiles with grants using Neo4j.",
      icon: Trophy,
      badge: "Top 25 Winner",
      badgeColor: "text-amber-600 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/20",
    },
    {
      title: "Top 2 Contributor Nationwide",
      event: "Social Winter of Code 2026",
      scope: "Open Source Contribution Program",
      scale: "Rank #2 Nationwide",
      description:
        "Achieved the #2 national contributor rank for actively resolving issues, authoring production pull requests, and open-source collaboration.",
      icon: Medal,
      badge: "Rank #2",
      badgeColor: "text-slate-700 bg-slate-100 border-slate-300 dark:text-slate-200 dark:bg-slate-500/10 dark:border-slate-500/20",
    },
    {
      title: "Top 25 Contributor & LOR",
      event: "GirlScript Summer of Code 2025",
      scope: "National Open Source Program",
      scale: "Top 25 Contributor Nationwide",
      description:
        "Recognized among the Top 25 performers out of thousands of participants; received an official Letter of Recommendation.",
      icon: Award,
      badge: "Top 25",
      badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20",
    },
    {
      title: "3rd Place – CodeIgnite 2025",
      event: "Delhi Technical Campus",
      scope: "Competitive DSA & Logic Challenge",
      scale: "3rd Position (Team)",
      description:
        "Awarded Certificate of Coding Excellence for rapid algorithmic problem-solving and data structure implementation.",
      icon: Star,
      badge: "3rd Place",
      badgeColor: "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-300 dark:bg-amber-500/10 dark:border-amber-500/20",
    },
  ];

  const certificates = [
    { src: "/certificates/image.png", name: "Coding Challenge Certificate" },
    { src: "/certificates/image1.png", name: "Technical Excellence" },
    { src: "/certificates/image2.png", name: "Hackathon Recognition" },
    { src: "/certificates/image3.png", name: "Open Source Contributor" },
    { src: "/certificates/image4.png", name: "DSA Certification" },
    { src: "/certificates/image5.png", name: "Algorithmic Problem Solving" },
    { src: "/certificates/image6.png", name: "Web Development" },
    { src: "/certificates/image7.png", name: "Technical Workshop" },
    { src: "/certificates/image8.png", name: "Participation & Merit" },
    { src: "/certificates/image9.png", name: "Program Completion" },
    { src: "/certificates/image10.png", name: "Hackathon Finalist" },
    { src: "/certificates/image11.png", name: "Competition Award" },
    { src: "/certificates/image12.png", name: "Excellence in Engineering" },
  ];

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
          Recognition
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
          Achievements &amp; Honors
        </h2>
        <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3"></div>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mt-3">
          Verifiable awards, national hackathon wins, and open-source honors.
        </p>
      </div>

      {/* AWARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/90 shadow-xs dark:shadow-none transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Icon size={20} />
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                  {item.event}
                </p>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">
                  {item.scale}
                </p>

                <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center text-[11px] text-slate-500 dark:text-slate-500">
                <span>{item.scope}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CREDENTIAL VERIFICATION BUTTONS */}
      <div className="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-heading font-semibold text-slate-900 dark:text-white text-sm">
            Letters &amp; Verified Documentation
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            View official Letter of Recommendation and verified course/hackathon certificates.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setOpenLOR(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-white border border-slate-300 dark:border-slate-700 shadow-2xs transition cursor-pointer"
          >
            <FileText size={14} className="text-emerald-600 dark:text-emerald-400" />
            <span>View GSSoC LOR</span>
          </button>
          <button
            onClick={() => setOpenCertificates(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 transition cursor-pointer"
          >
            <Award size={14} />
            <span>View Certificates ({certificates.length})</span>
          </button>
        </div>
      </div>

      {/* LOR MODAL */}
      <AnimatePresence>
        {openLOR && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenLOR(false)}
              className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col z-10"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                    Letter of Recommendation
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    GirlScript Summer of Code 2025 – Top 25 Contributor
                  </p>
                </div>
                <button
                  onClick={() => setOpenLOR(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="overflow-auto py-4 flex items-center justify-center">
                <img
                  src="/lor-gssoc.jpg"
                  alt="GirlScript Summer of Code Letter of Recommendation"
                  className="max-h-[70vh] rounded-lg shadow-md object-contain"
                />
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <a
                  href="/lor-gssoc.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                >
                  <span>Open Full Resolution</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CERTIFICATES MODAL */}
      <AnimatePresence>
        {openCertificates && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenCertificates(false)}
              className="absolute inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col z-10"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                    Verified Certificates
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Hackathons, coding challenges, and open-source programs
                  </p>
                </div>
                <button
                  onClick={() => setOpenCertificates(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="overflow-y-auto py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pr-1">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 p-2 group hover:border-emerald-500/40 transition"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-lg bg-black flex items-center justify-center">
                      <img
                        src={cert.src}
                        alt={cert.name}
                        loading="lazy"
                        className="w-full h-full object-contain filter brightness-95 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="mt-2 text-[11px] font-medium text-slate-800 dark:text-slate-300 truncate">
                      {cert.name}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
