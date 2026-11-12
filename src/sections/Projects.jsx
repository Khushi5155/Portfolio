import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Trophy,
  ArrowUpRight,
  Sparkles,
  Info,
  X,
  CheckCircle2,
  Code2,
} from "lucide-react";

import claimguardImg from "../assets/claimguard.png";
import dockfleetImg from "../assets/dockfleet.png";
import attendeaseImg from "../assets/attendease.png";
import mannmitraImg from "../assets/mannmitra.jpeg";
import disasterImg from "../assets/disaster.png";
import kalaficialImg from "../assets/live1.png";
import deshDarshanImg from "../assets/desh_darshan.jpeg";
import oopsImg from "../assets/images.png";
import searchEngineImg from "../assets/image.avif";

const ALL_PROJECTS = [
  {
    id: "foundros",
    title: "FoundrOS – AI Startup Co-Pilot",
    type: "AI & Graph Systems",
    badge: "Winner • HackHazards 2026",
    badgeType: "trophy",
    categories: ["Full Stack", "AI / ML", "Open Source"],
    isFeatured: true,
    description:
      "An AI-powered platform matching early-stage startup profiles with grants, accelerator cohorts, and hackathons using graph relationships in Neo4j. Engineered the client interface deployed on Vercel and integrated backend workflows on Render.",
    longDescription:
      "FoundrOS is an intelligent matching engine for entrepreneurs navigating early-stage funding and accelerator ecosystems. Rather than relying on rigid keyword search, it structures startup requirements, eligibility criteria, and funding programs as a knowledge graph in Neo4j to find high-probability opportunities.",
    keyFeatures: [
      "Graph-based opportunity matching using Neo4j relationship queries",
      "FastAPI backend services managing startup profile ingestion and scoring",
      "Responsive client interface built with React and deployed to Vercel",
      "Awarded Winner at HackHazards 2026 (selected in the Top 25 out of 2,657 projects and 31,623 participants)",
    ],
    tech: ["React", "FastAPI", "Neo4j", "Python", "Vercel", "Render", "REST APIs"],
    github: "https://github.com/Khushi5155/Foundr-OS",
    live: "https://foundros-pi.vercel.app/",
  },
  {
    id: "claimguard",
    title: "ClaimGuard-AI – Fact Verification Engine",
    type: "NLP & Fact Verification",
    badge: "AI Fact Checking",
    badgeType: "star",
    categories: ["Full Stack", "AI / ML"],
    isFeatured: true,
    image: claimguardImg,
    description:
      "A claim-analysis application with a pipeline for claim extraction, similarity analysis, evidence retrieval, and source checking. Includes Tavily web-search fallback and a local fact base with calibrated scoring.",
    longDescription:
      "ClaimGuard-AI analyzes claims within news stories and user input text. It extracts individual verifiable claims, checks them against a curated factual database, and falls back to Tavily live web search when local evidence is inconclusive. The scoring algorithm was specifically calibrated so lower semantic similarity is not falsely flagged as disproof.",
    keyFeatures: [
      "Sentence-level NLP claim extraction and semantic similarity analysis",
      "Dual-layer verification: local knowledge base with Tavily search API fallback",
      "Calibrated credibility scoring model preventing false disproof on novel assertions",
      "FastAPI REST endpoints serving scored claims and source citations to a React UI",
    ],
    tech: ["React", "Python", "FastAPI", "Tavily API", "NLP", "Scoring Engine"],
    github: "https://github.com/Khushi5155/ClaimGuard-AI",
    live: null,
  },
  {
    id: "dockfleet",
    title: "Dockfleet – Container Orchestrator",
    type: "DevOps & Systems",
    badge: "Team Winner • FOSS Hack 2026",
    badgeType: "trophy",
    categories: ["Full Stack", "Open Source"],
    isFeatured: true,
    image: dockfleetImg,
    description:
      "A lightweight, self-healing alternative to Docker Compose for local stacks. Parses YAML service configs, monitors container health continuously, auto-restarts failed services, and visualizes telemetry on a real-time web dashboard.",
    longDescription:
      "Built as a collaborative team project for FOSS Hack 2026, Dockfleet automates local container lifecycle management for multi-service environments. When microservices experience crash loops or unhandled exceptions, Dockfleet detects health drops and initiates self-healing restarts while streaming logs to a web UI.",
    keyFeatures: [
      "Team Winner at FOSS Hack 2026 (national open-source competition with 2,360+ teams)",
      "Continuous health monitoring with configurable auto-restart policies",
      "Single-file YAML service declaration for zero-fuss local orchestration",
      "Real-time telemetry dashboard built with FastAPI, Tailwind CSS, and Alpine.js",
    ],
    tech: ["Python", "FastAPI", "Docker", "SQLite", "Tailwind CSS", "Alpine.js"],
    github: "https://github.com/Khushi5155/Dockfleet",
    live: null,
  },
  {
    id: "attendease",
    title: "AttendEase – Attendance Analytics",
    type: "Full-Stack Web App",
    badge: "Live Product",
    badgeType: "live",
    categories: ["Full Stack", "Frontend"],
    isFeatured: true,
    image: attendeaseImg,
    description:
      "A subject-wise attendance analytics tool solving university aggregate percentage blind spots. Tracks each course independently, calculates cutoff margins (75%), predicts makeup class counts, and simulates skipping.",
    longDescription:
      "AttendEase addresses a critical problem for university students: aggregate attendance numbers frequently mask individual subject shortages. AttendEase tracks course-by-course metrics, accurately calculates how many future lectures must be attended consecutively to recover to 75%, and provides an interactive skip simulator.",
    keyFeatures: [
      "Subject-wise tracking preventing hidden shortages behind aggregate averages",
      "Predictive recovery algorithm calculating minimum consecutive classes needed",
      "Interactive 'Can I Skip?' simulator forecasting the post-absence percentage",
      "Zero-dependency client persistence using LocalStorage with responsive mobile UI",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/Khushi5155/attendease",
    live: "https://attendease-six-rouge.vercel.app/",
  },
  {
    id: "mannmitra",
    title: "MannMitra – Mental Wellness Ecosystem",
    type: "Hackathon • Smart India Hackathon",
    badge: "SIH Project",
    badgeType: "star",
    categories: ["Full Stack", "AI / ML"],
    isFeatured: false,
    image: mannmitraImg,
    description:
      "AI-assisted mental wellness platform designed for Indian students. Features clinical assessment tools (PHQ-9/GAD-7), mood tracking, peer support, and counselor dashboards.",
    longDescription:
      "Created for Smart India Hackathon (SIH 2024–25), MannMitra combines clinical assessment frameworks with culturally empathetic conversational AI to help students identify early stress and depressive indicators before crisis points.",
    keyFeatures: [
      "Validated clinical screening tests (PHQ-9 and GAD-7) with automated score categorization",
      "Contextual AI conversational chatbot for guided mindfulness and stress reduction",
      "Administrative and counselor triage dashboard for student welfare teams",
      "Full-stack MERN architecture with MongoDB document schemas",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "NLP"],
    github: "https://github.com/Khushi5155/SIH-25",
    live: null,
  },
  {
    id: "alertax",
    title: "AlertaX – AI Disaster Alert System",
    type: "Real-time Systems",
    badge: "Emergency Tech",
    badgeType: null,
    categories: ["Full Stack", "AI / ML"],
    isFeatured: false,
    image: disasterImg,
    description:
      "Location-based emergency response platform streaming real-time hazard data, interactive evacuation route maps, and shelter capacity tracking.",
    longDescription:
      "AlertaX is a real-time hazard notification system designed to bridge information gaps during natural emergencies. It aggregates meteorological data, seismic feeds, and crowd reports to push location-specific evacuation guidance.",
    keyFeatures: [
      "Real-time hazard notifications over WebSockets for low-latency dispatch",
      "Interactive map overlays highlighting flood/storm perimeters and verified shelters",
      "Flask backend integrating third-party emergency alert APIs and MongoDB storage",
    ],
    tech: ["Python (Flask)", "JavaScript", "WebSockets", "MongoDB", "Leaflet/Maps"],
    github: "https://github.com/Khushi5155/AlertaX",
    live: null,
  },
  {
    id: "minisearch",
    title: "Mini Search Engine – Indexing & Retrieval",
    type: "Core CS & Algorithms",
    badge: "Systems C++",
    badgeType: null,
    categories: ["Open Source"],
    isFeatured: false,
    image: searchEngineImg,
    description:
      "Multi-file document indexing and text retrieval system built in C++ utilizing word-frequency hash maps and linked lists for sub-linear search lookup.",
    longDescription:
      "A systems-level text retrieval tool implemented in C++ without external library dependencies. Parses raw document corpora, sanitizes tokens, indexes word frequencies in custom hash tables, and delivers rapid keyword retrieval.",
    keyFeatures: [
      "Custom hash table implementation using linked-list chaining for collision management",
      "Fast multi-file inverted index construction with term-frequency mapping",
      "Optimized CLI search queries with sub-linear retrieval speed",
    ],
    tech: ["C++", "Data Structures", "Hash Tables", "Linked Lists", "File I/O"],
    github: "https://github.com/Khushi5155/MiniSearchEngine",
    live: null,
  },
  {
    id: "kalaficial",
    title: "Kala.ficial – Global Art Showcase",
    type: "Full-Stack Web",
    badge: "Community Platform",
    badgeType: null,
    categories: ["Full Stack", "Frontend"],
    isFeatured: false,
    image: kalaficialImg,
    description:
      "Community portfolio and exhibition portal connecting emerging visual artists with global online showcases and physical gallery exhibition calls.",
    longDescription:
      "Kala.ficial is a dedicated platform for visual artists to present digital portfolios, connect with peers, and receive alerts for physical and virtual exhibitions.",
    keyFeatures: [
      "Artist profile management and high-resolution portfolio curation",
      "RESTful API endpoints for artwork submissions, categories, and exhibition listings",
      "Full MERN stack implementation with Node.js, Express, and MongoDB",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/Khushi5155/kala.ficial",
    live: null,
  },
  {
    id: "oopscalc",
    title: "OOPs Calculator – Modular Architecture",
    type: "Object-Oriented Architecture",
    badge: "OOP C++",
    badgeType: null,
    categories: ["Open Source"],
    isFeatured: false,
    image: oopsImg,
    description:
      "Modular C++ console application demonstrating core OOP principles including polymorphic operator hierarchies, inheritance, and encapsulation.",
    longDescription:
      "A structured C++ application created to demonstrate clean object-oriented architecture in mathematical computation, featuring modular class design and function overloading.",
    keyFeatures: [
      "Extensible operator hierarchy using abstract base classes and inheritance",
      "Polymorphic evaluation of basic arithmetic and advanced mathematical operations",
      "Strict separation of input parsing, computation logic, and formatted CLI output",
    ],
    tech: ["C++", "OOP Principles", "Inheritance", "Polymorphism"],
    github: "https://github.com/Khushi5155/Oops-Calculator",
    live: null,
  },
  {
    id: "deshdarshan",
    title: "Desh Darshan – Cultural Tourism",
    type: "Interactive Frontend",
    badge: "Interactive UI",
    badgeType: null,
    categories: ["Frontend"],
    isFeatured: false,
    image: deshDarshanImg,
    description:
      "Interactive travel portal exploring cultural heritage and destination facts across Indian states with dynamic category sliders.",
    longDescription:
      "An interactive web experience exploring tourism destinations, historic landmarks, and cultural insights across India's states and union territories.",
    keyFeatures: [
      "Dynamic state and category exploration sliders with smooth CSS transitions",
      "Interactive 'spin-to-reveal' fact engine uncovering cultural trivia",
      "Lightweight frontend implementation with semantic HTML5, CSS3, and JavaScript",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "UI Animations"],
    github: "https://github.com/Khushi5155/DeshDarshan",
    live: null,
  },
];

const CATEGORIES = ["All", "Full Stack", "AI / ML", "Frontend", "Open Source"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when project details modal is active
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  const filteredProjects =
    activeCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.categories.includes(activeCategory));

  const featured = filteredProjects.filter((p) => p.isFeatured);
  const secondary = filteredProjects.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-10">
        <span className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
          Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
          Projects &amp; Systems
        </h2>
        <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3"></div>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mt-3">
          Production web applications, graph-based AI matching platforms, and open-source container tools.
        </p>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 rounded-xl bg-slate-200/70 dark:bg-slate-900/70 border border-slate-300/80 dark:border-slate-800/80 w-fit">
        {CATEGORIES.map((cat) => {
          const count =
            cat === "All"
              ? ALL_PROJECTS.length
              : ALL_PROJECTS.filter((p) => p.categories.includes(cat)).length;

          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer select-none ${
                isActive
                  ? "bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 shadow-xs border border-slate-300/80 dark:border-slate-700/80"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-300/40 dark:hover:bg-slate-800/40"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive
                    ? "bg-emerald-500/20 text-emerald-800 dark:text-emerald-300"
                    : "bg-slate-300/70 dark:bg-slate-800 text-slate-600 dark:text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* FEATURED PROJECTS (if any match the filter) */}
      {featured.length > 0 && (
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
            <Sparkles size={14} className="text-emerald-600 dark:text-emerald-400" />
            <span>Featured Highlights</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featured.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden shadow-sm dark:shadow-none transition-all duration-200 group"
              >
                {/* COVER / MEDIA */}
                <div className="w-full h-48 sm:h-52 overflow-hidden relative bg-slate-950 flex items-center justify-center">
                  {project.id === "foundros" ? (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 p-6 flex flex-col justify-between border-b border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                          Neo4j Graph Engine
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          <Trophy size={12} /> Top 25 / 2,657 Projects
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xl font-bold font-heading text-white tracking-tight flex items-center gap-2">
                          <span className="text-emerald-400">&lt;FoundrOS&gt;</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">Live</span>
                        </div>
                        <p className="text-xs text-slate-400 font-mono">
                          Graph-driven AI matching for grants &amp; accelerators
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-90 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    </>
                  )}

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-950/80 text-slate-200 border border-slate-800 backdrop-blur-md">
                    {project.badgeType === "trophy" && (
                      <Trophy size={13} className="text-amber-400" />
                    )}
                    <span>{project.badge}</span>
                  </div>

                  {project.live && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Live Demo</span>
                    </div>
                  )}
                </div>

                {/* CARD BODY */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400 mb-1.5">
                      {project.type}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2.5 flex-wrap">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 dark:text-slate-200 dark:hover:text-white dark:border-slate-700/80 transition cursor-pointer"
                      >
                        <Info size={14} className="text-emerald-600 dark:text-emerald-400" />
                        <span>View Details</span>
                      </button>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-slate-300 dark:hover:text-white dark:border-slate-800 transition"
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition ml-auto"
                        >
                          <ExternalLink size={14} />
                          <span>Live Site</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* ADDITIONAL ENGINEERING WORK */}
      {secondary.length > 0 && (
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
            <Code2 size={14} className="text-emerald-600 dark:text-emerald-400" />
            <span>Additional Engineering Work ({secondary.length})</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {secondary.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 shadow-xs dark:shadow-none transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <span className="font-medium text-emerald-700 dark:text-emerald-400/90 text-[11px]">
                        {item.type}
                      </span>
                      <div className="flex items-center gap-2">
                        {item.github && (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                            aria-label={`GitHub for ${item.title}`}
                          >
                            <Github size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h4 className="font-heading font-semibold text-slate-900 dark:text-white text-base">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {item.tech.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700/40"
                        >
                          {t}
                        </span>
                      ))}
                      {item.tech.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-500">
                          +{item.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(item)}
                      className="text-xs text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 font-medium cursor-pointer shrink-0"
                    >
                      Details →
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Modal Header */}
              <div className="p-6 pb-4 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/40">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      {selectedProject.type}
                    </span>
                    {selectedProject.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                        {selectedProject.badge}
                      </span>
                    )}
                  </div>
                  <h3
                    id="project-modal-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading"
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    Overview &amp; Problem Solved
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                {selectedProject.keyFeatures && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-3">
                      Key Engineering Highlights
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {selectedProject.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={16}
                            className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
                          />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2.5">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer / Actions */}
              <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition cursor-pointer"
                >
                  Close
                </button>

                <div className="flex items-center gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:hover:text-white dark:border-slate-700 transition"
                    >
                      <Github size={14} />
                      <span>View Code</span>
                    </a>
                  )}

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition"
                    >
                      <ExternalLink size={14} />
                      <span>Open Live Site</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
