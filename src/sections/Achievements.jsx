import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  Star,
  X,
  ExternalLink,
  FileText,
  CheckCircle2,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Achievements() {
  const [openLOR, setOpenLOR] = useState(false);
  const [openCertificates, setOpenCertificates] = useState(false);
  const [activeCertIndex, setActiveCertIndex] = useState(null);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (activeCertIndex !== null) {
          setActiveCertIndex(null);
        } else {
          setOpenLOR(false);
          setOpenCertificates(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCertIndex]);

  // Body scroll locking
  useEffect(() => {
    const isModalOpen = openLOR || openCertificates || activeCertIndex !== null;
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [openLOR, openCertificates, activeCertIndex]);

  const awards = [
    {
      title: "Team Winner – Dockfleet",
      event: "FOSS Hack 2026",
      scope: "National Open-Source Hackathon",
      scale: "Team Winner · 2,360+ Teams · 5,400+ Participants",
      projectAssociation: "Dockfleet – Lightweight Container Orchestrator",
      description:
        "Won national open-source competition for architecting Dockfleet, a self-healing container orchestrator with real-time web telemetry.",
      icon: Trophy,
      badge: "Team Winner",
      badgeColor: "text-amber-600 bg-amber-50 border-amber-200/80 dark:text-[#FBBF24] dark:bg-amber-500/10 dark:border-amber-500/25",
    },
    {
      title: "Winner (Top 25) – FoundrOS",
      event: "HackHazards 2026",
      scope: "Global Innovation Hackathon",
      scale: "Top 25 Winner · 2,657 Projects · 31,623 Participants",
      projectAssociation: "FoundrOS – AI Startup Co-Pilot",
      description:
        "Selected as a winning project among the top 25 submissions for FoundrOS, an AI co-pilot matching startup profiles with grants using Neo4j.",
      icon: Trophy,
      badge: "Top 25 Winner",
      badgeColor: "text-amber-600 bg-amber-50 border-amber-200/80 dark:text-[#FBBF24] dark:bg-amber-500/10 dark:border-amber-500/25",
    },
    {
      title: "Rank #2 Contributor Nationwide",
      event: "Social Winter of Code 2026",
      scope: "National Open Source Contribution Program",
      scale: "Rank #2 Nationwide",
      projectAssociation: "Community Open Source Ecosystem",
      description:
        "Achieved the #2 national contributor rank for actively resolving complex issues, authoring production pull requests, and Git collaboration.",
      icon: Medal,
      badge: "Rank #2 Nationwide",
      badgeColor: "text-indigo-700 bg-indigo-50 border-indigo-200/80 dark:text-[#38BDF8] dark:bg-[#131B38] dark:border-[#38BDF8]/25",
    },
    {
      title: "Top 25 Contributor & Official LOR",
      event: "GirlScript Summer of Code 2025",
      scope: "National Open Source Program",
      scale: "Top 25 Contributor Nationwide",
      projectAssociation: "Open-Source Web Repositories",
      description:
        "Recognized among the Top 25 performers out of thousands of nationwide participants; awarded an official Letter of Recommendation.",
      icon: Award,
      badge: "Top 25 & LOR",
      badgeColor: "text-indigo-700 bg-indigo-50 border-indigo-200/80 dark:text-[#38BDF8] dark:bg-[#131B38] dark:border-[#6366F1]/30",
      hasLOR: true,
    },
    {
      title: "3rd Place – CodeIgnite 2025",
      event: "Delhi Technical Campus (DTC)",
      scope: "Competitive DSA & Algorithmic Problem Solving",
      scale: "3rd Position (Team) · 100+ Teams",
      projectAssociation: "Algorithmic Challenges & Logic",
      description:
        "Awarded Certificate of Coding Excellence for rapid algorithmic problem-solving, time-complexity optimization, and data structure execution.",
      icon: Star,
      badge: "3rd Place",
      badgeColor: "text-amber-700 bg-amber-50 border-amber-200/80 dark:text-amber-300 dark:bg-amber-500/10 dark:border-amber-500/25",
    },
  ];

  const certificates = [
    { src: "/certificates/image.png", name: "Certificate of Merit · Coding Challenge" },
    { src: "/certificates/image1.png", name: "Technical Excellence · Innovation Challenge" },
    { src: "/certificates/image2.png", name: "Hackathon Recognition & Participation" },
    { src: "/certificates/image3.png", name: "Open Source Contributor Recognition" },
    { src: "/certificates/image4.png", name: "Data Structures & Algorithms Certification" },
    { src: "/certificates/image5.png", name: "Algorithmic Problem Solving & Complexity" },
    { src: "/certificates/image6.png", name: "Web Development & Frontend Engineering" },
    { src: "/certificates/image7.png", name: "Technical Workshop & Systems Engineering" },
    { src: "/certificates/image8.png", name: "Certificate of Participation & Technical Merit" },
    { src: "/certificates/image9.png", name: "Program Completion & Project Development" },
    { src: "/certificates/image10.png", name: "Hackathon Finalist & Team Award" },
    { src: "/certificates/image11.png", name: "Competition Award & Coding Sprint" },
    { src: "/certificates/image12.png", name: "Excellence in Software Engineering" },
  ];

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-[#38BDF8] mb-2">
          Recognition
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] font-heading">
          Achievements &amp; Honors
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full mt-3"></div>
        <p className="text-slate-600 dark:text-[#94A3B8] text-sm max-w-xl mt-3">
          Verifiable awards, national hackathon wins, and open-source rankings.
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
              className="p-6 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20 hover:border-indigo-400/50 dark:hover:border-[#6366F1]/45 hover:shadow-md dark:hover:shadow-[0_8px_30px_rgba(13,17,39,0.7)] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-[#131B38] text-indigo-600 dark:text-[#38BDF8] border border-indigo-200/70 dark:border-[#38BDF8]/20 group-hover:scale-105 transition-transform duration-200">
                    <Icon size={20} />
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs font-semibold text-indigo-600 dark:text-[#38BDF8] uppercase tracking-wider mb-1 font-mono">
                  {item.event}
                </p>
                <h3 className="font-heading font-bold text-slate-900 dark:text-[#F8FAFC] text-base group-hover:text-indigo-600 dark:group-hover:text-[#38BDF8] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">
                  {item.scale}
                </p>

                <p className="mt-3 text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-[#6366F1]/15 flex items-center justify-between text-[11px] text-slate-500 dark:text-[#64748B]">
                <span className="truncate">{item.scope}</span>
                {item.hasLOR && (
                  <button
                    onClick={() => setOpenLOR(true)}
                    className="text-indigo-600 dark:text-[#38BDF8] hover:underline font-semibold cursor-pointer shrink-0 ml-2"
                  >
                    View LOR →
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CREDENTIAL VERIFICATION CALLOUT */}
      <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <h4 className="font-heading font-bold text-slate-900 dark:text-[#F8FAFC] text-sm">
            Letters &amp; Verified Documentation
          </h4>
          <p className="text-xs text-slate-600 dark:text-[#94A3B8] mt-1">
            Examine official Letter of Recommendation and inspect 13 verified course &amp; hackathon credentials.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => setOpenLOR(true)}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white dark:bg-[#131B38] text-slate-800 dark:text-[#F8FAFC] hover:text-indigo-600 dark:hover:text-[#38BDF8] border border-slate-200 dark:border-[#6366F1]/30 hover:border-indigo-300 dark:hover:border-[#6366F1]/50 shadow-2xs transition cursor-pointer"
          >
            <FileText size={14} className="text-indigo-600 dark:text-[#38BDF8]" />
            <span>View GSSoC LOR</span>
          </button>
          <button
            onClick={() => setOpenCertificates(true)}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-400 hover:to-indigo-500 shadow-md shadow-indigo-500/20 transition cursor-pointer"
          >
            <Award size={14} />
            <span>Browse Certificates ({certificates.length})</span>
          </button>
        </div>
      </div>

      {/* LOR MODAL */}
      <AnimatePresence>
        {openLOR && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lor-modal-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenLOR(false)}
              className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-[#FAF9F5] dark:bg-[#0D1127] border border-slate-200 dark:border-[#6366F1]/30 rounded-3xl p-6 shadow-2xl flex flex-col z-10"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-[#6366F1]/15">
                <div>
                  <h3
                    id="lor-modal-title"
                    className="text-base font-bold text-slate-900 dark:text-[#F8FAFC] font-heading"
                  >
                    Official Letter of Recommendation
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                    GirlScript Summer of Code 2025 · Top 25 Contributor
                  </p>
                </div>
                <button
                  onClick={() => setOpenLOR(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-[#131B38] transition cursor-pointer"
                  aria-label="Close Letter of Recommendation"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="overflow-auto py-4 flex items-center justify-center">
                <img
                  src="/lor-gssoc.jpg"
                  alt="GirlScript Summer of Code Letter of Recommendation"
                  className="max-h-[68vh] rounded-xl shadow-md object-contain border border-slate-200/80 dark:border-[#6366F1]/20"
                />
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-[#6366F1]/15 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-[#64748B]">
                  Verified Credential Document
                </span>
                <a
                  href="/lor-gssoc.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-indigo-600 dark:text-[#38BDF8] hover:underline font-semibold"
                >
                  <span>Open Full Resolution</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CERTIFICATES GALLERY MODAL */}
      <AnimatePresence>
        {openCertificates && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenCertificates(false)}
              className="absolute inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[88vh] bg-[#FAF9F5] dark:bg-[#0D1127] border border-slate-200 dark:border-[#6366F1]/30 rounded-3xl p-6 shadow-2xl flex flex-col z-10"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-[#6366F1]/15">
                <div>
                  <h3
                    id="cert-modal-title"
                    className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#F8FAFC] font-heading"
                  >
                    Verified Certificate Gallery ({certificates.length})
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                    Hackathons, coding challenges, and engineering completions (Click any certificate to enlarge)
                  </p>
                </div>
                <button
                  onClick={() => setOpenCertificates(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-[#131B38] transition cursor-pointer"
                  aria-label="Close certificate gallery"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Grid Gallery */}
              <div className="overflow-y-auto py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pr-1">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveCertIndex(index)}
                    className="rounded-2xl overflow-hidden bg-white dark:bg-[#131B38]/60 border border-slate-200/90 dark:border-[#6366F1]/20 p-2.5 group hover:border-indigo-400/50 dark:hover:border-[#38BDF8]/40 transition-all duration-200 cursor-pointer shadow-2xs"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-950 flex items-center justify-center relative">
                      <img
                        src={cert.src}
                        alt={cert.name}
                        loading="lazy"
                        className="w-full h-full object-contain filter brightness-95 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="p-2 rounded-full bg-white/90 text-slate-900 shadow-md">
                          <Maximize2 size={14} />
                        </span>
                      </div>
                    </div>
                    <p className="mt-2.5 text-xs font-semibold text-slate-800 dark:text-[#F8FAFC] truncate">
                      {cert.name}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-[#6366F1]/15 flex justify-end">
                <button
                  onClick={() => setOpenCertificates(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-[#131B38] text-slate-700 dark:text-[#F8FAFC] hover:bg-slate-200 dark:hover:bg-[#1B244A] transition"
                >
                  Close Gallery
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* INDIVIDUAL CERTIFICATE LIGHTBOX VIEW */}
      <AnimatePresence>
        {activeCertIndex !== null && (
          <div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCertIndex(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[92vh] bg-[#070913] border border-slate-800 rounded-3xl p-5 flex flex-col z-10 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <p className="text-sm font-semibold text-white truncate">
                  {certificates[activeCertIndex].name}
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={certificates[activeCertIndex].src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
                    title="Open original"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <button
                    onClick={() => setActiveCertIndex(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="overflow-auto py-4 flex items-center justify-center">
                <img
                  src={certificates[activeCertIndex].src}
                  alt={certificates[activeCertIndex].name}
                  className="max-h-[70vh] rounded-xl object-contain shadow-lg"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <button
                  onClick={() =>
                    setActiveCertIndex(
                      (activeCertIndex - 1 + certificates.length) % certificates.length
                    )
                  }
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition cursor-pointer"
                >
                  <ChevronLeft size={14} />
                  <span>Previous</span>
                </button>
                <span className="font-mono">
                  {activeCertIndex + 1} / {certificates.length}
                </span>
                <button
                  onClick={() =>
                    setActiveCertIndex((activeCertIndex + 1) % certificates.length)
                  }
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
