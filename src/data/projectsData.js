import claimguardImg from "../assets/claimguard.png";
import dockfleetImg from "../assets/dockfleet.png";
import attendeaseImg from "../assets/attendease.png";
import mannmitraImg from "../assets/mannmitra.jpeg";
import disasterImg from "../assets/disaster.png";
import kalaficialImg from "../assets/live1.png";
import deshDarshanImg from "../assets/desh_darshan.jpeg";
import oopsImg from "../assets/images.png";
import searchEngineImg from "../assets/image.avif";

export const CASE_STUDIES = [
  {
    id: "foundros",
    title: "FoundrOS",
    type: "AI & Graph Systems",
    role: "Frontend Development & Backend Service Integration",
    badge: "Winner · HackHazards 2026",
    badgeType: "trophy",
    categories: ["Full Stack", "AI / ML", "Open Source"],
    summary:
      "AI-powered startup co-pilot that matches early-stage founders with relevant grants, accelerators, and hackathons.",
    github: "https://github.com/Khushi5155/Foundr-OS",
    live: "https://foundros-pi.vercel.app/",
    hasCaseStudy: true,
    achievement: "Winner at HackHazards 2026 · Top 25 of 2,657 Projects · 31,623 Participants",
    timeline: "2026 · HackHazards Winner",

    overview:
      "FoundrOS is an opportunity matching platform for entrepreneurs navigating early-stage funding and accelerator ecosystems. Rather than relying solely on keyword search, it structures startup requirements, eligibility criteria, and funding programs as a knowledge graph in Neo4j to surface opportunities aligned with startup attributes.",

    problemStatement:
      "Early-stage founders spend significant time searching through disparate grant portals, accelerators, and hackathon directories. Because standard search tools rely primarily on keyword matching, founders often miss relevant non-dilutive funding programs with specific stage or sector criteria.",

    proposedSolution:
      "We modeled entrepreneurial funding opportunities as a Neo4j knowledge graph. By structuring startup verticals, funding stages, and eligibility criteria as interconnected nodes and relationships, FoundrOS executes Cypher queries to match profiles with opportunities, served through a FastAPI backend.",

    architecture: {
      layers: [
        {
          name: "Client Tier",
          detail: "React 19 Single Page App · Tailwind CSS · Deployed on Vercel",
        },
        {
          name: "API & Service Tier",
          detail: "FastAPI REST Endpoints · Pydantic Schemas · Deployed on Render",
        },
        {
          name: "Knowledge Graph Tier",
          detail: "Neo4j Graph Database · Cypher Query Traversals",
        },
        {
          name: "Opportunity Data",
          detail: "Standardized Grant, Accelerator & Hackathon Criteria Records",
        },
      ],
      flow: [
        { from: "Founder / User", to: "React Frontend", label: "Inputs startup profile criteria" },
        { from: "React Frontend", to: "FastAPI Backend", label: "Sends structured REST request" },
        { from: "FastAPI Backend", to: "Neo4j Graph Engine", label: "Executes Cypher relationship query" },
        { from: "Neo4j Graph Engine", to: "FastAPI Backend", label: "Returns matching opportunity nodes" },
        { from: "FastAPI Backend", to: "React Frontend", label: "Delivers scored opportunities & deadlines" },
      ],
    },

    techStack: [
      { name: "React.js", category: "Frontend" },
      { name: "FastAPI", category: "Backend API" },
      { name: "Neo4j", category: "Graph Database" },
      { name: "Python", category: "Backend Language" },
      { name: "Cypher", category: "Query Language" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Vercel", category: "Client Hosting" },
      { name: "Render", category: "API Hosting" },
      { name: "REST APIs", category: "Protocol" },
    ],

    keyFeatures: [
      {
        title: "Graph-Based Opportunity Matching",
        description:
          "Executes relationship queries in Neo4j across funding stages, industry sectors, and eligibility criteria to identify matching programs.",
      },
      {
        title: "FastAPI Service Endpoints",
        description:
          "REST endpoints that validate incoming startup profile payloads against opportunity schemas using Pydantic models.",
      },
      {
        title: "Relevance-Based Opportunity Scoring",
        description:
          "Calculates priority scores considering upcoming application deadlines and stage compatibility.",
      },
      {
        title: "Interactive Client Dashboard",
        description:
          "Responsive client interface built with React and Tailwind CSS, deployed on Vercel with opportunity filtering and criteria breakdowns.",
      },
    ],

    contributions: [
      "Engineered frontend features and interactive dashboard components in React.js and Tailwind CSS.",
      "Integrated backend service endpoints in FastAPI to connect client workflows with the opportunity discovery logic.",
      "Assisted with Cypher query formulation to query startup-to-grant relationship nodes in Neo4j.",
      "Managed the client deployment on Vercel and backend deployment configuration on Render.",
    ],

    challenges: [
      {
        challenge: "Structuring heterogeneous funding program criteria into clean relationship models.",
        solution:
          "Standardized incoming opportunity attributes into consistent node properties (Stage, Sector, Deadline) for reliable Cypher queries.",
      },
      {
        challenge: "Coordinating multi-platform deployment across separate client and server hosts.",
        solution:
          "Configured CORS headers and environment-variable endpoints linking the Vercel-hosted React app with the Render-hosted FastAPI service.",
      },
    ],

    outcomes: [
      "Awarded Winner at HackHazards 2026, selected among the top 25 projects from 2,657 submissions and 31,623 participants.",
      "Successfully deployed a functional web application matching startup profiles with graph-indexed opportunities.",
      "Gained practical experience with graph database modeling, Cypher queries, and distributed client-server deployment.",
    ],
  },
  {
    id: "dockfleet",
    title: "Dockfleet – Container Orchestrator",
    type: "DevOps & Systems",
    role: "Co-Developer & Telemetry Dashboard Contributor (Team Project)",
    badge: "Team Winner · FOSS Hack 2026",
    badgeType: "trophy",
    categories: ["Full Stack", "Open Source"],
    image: dockfleetImg,
    summary:
      "A lightweight, self-healing alternative to Docker Compose for local stacks. Continuously monitors container health, automatically restarts failed services, and displays telemetry on a web dashboard.",
    github: "https://github.com/Khushi5155/Dockfleet",
    live: null,
    hasCaseStudy: true,
    achievement: "Team Winner at FOSS Hack 2026 · 2,360+ Teams · 5,400+ Participants",
    timeline: "2026 · FOSS Hack Team Winner",

    overview:
      "Built as a collaborative team project for FOSS Hack 2026, Dockfleet automates local container lifecycle management for multi-service environments. When microservices experience crashes or unhandled failures, Dockfleet detects health drops and initiates self-healing restarts while streaming telemetry to a web UI.",

    problemStatement:
      "During local multi-service development, dependent containers can crash or become unresponsive without immediate notification. Developers must manually run diagnostic commands and execute restart commands, interrupting their development workflow.",

    proposedSolution:
      "Our team built a local orchestration tool that reads a single-file YAML service declaration, manages container lifecycles through the Docker API, continuously checks service health, auto-restarts failed containers based on policy, and visualizes status in a browser dashboard.",

    architecture: {
      layers: [
        {
          name: "Web Telemetry UI",
          detail: "Dashboard built with Alpine.js & Tailwind CSS · Live status & event logs",
        },
        {
          name: "Orchestrator Backend",
          detail: "FastAPI Backend Service · Background Health Poller Loop",
        },
        {
          name: "Container Engine Layer",
          detail: "Docker Engine Daemon · Interfaced via Docker Python SDK",
        },
        {
          name: "Local State Ledger",
          detail: "SQLite Database · Records restart history & service events",
        },
      ],
      flow: [
        { from: "Developer", to: "YAML Service File", label: "Declares services & health check rules" },
        { from: "YAML Service File", to: "Dockfleet Backend", label: "Parses configuration on startup" },
        { from: "Dockfleet Backend", to: "Docker Engine", label: "Launches containers via Docker API" },
        { from: "Docker Engine", to: "Health Poller Loop", label: "Reports container operational state" },
        { from: "Health Poller Loop", to: "Web Dashboard", label: "Displays real-time status and logs" },
        { from: "Health Poller Loop", to: "Restart Controller", label: "Executes restart policy on service crash" },
      ],
    },

    techStack: [
      { name: "Python", category: "Core Language" },
      { name: "FastAPI", category: "Backend Service" },
      { name: "Docker SDK", category: "Container Engine" },
      { name: "SQLite", category: "State Store" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Alpine.js", category: "Dashboard UI" },
      { name: "YAML", category: "Configuration" },
    ],

    keyFeatures: [
      {
        title: "Single-File YAML Declarations",
        description:
          "Simplified service declarations for local development stacks, specifying container image, ports, environment variables, and health checks.",
      },
      {
        title: "Continuous Health Monitoring",
        description:
          "Background polling loop that monitors container status and detects unhandled failures.",
      },
      {
        title: "Configurable Auto-Restart Policies",
        description:
          "Automatically restarts failed service containers to maintain stack availability without manual intervention.",
      },
      {
        title: "Real-Time Telemetry Dashboard",
        description:
          "Web dashboard displaying container statuses, basic resource indicators, and operational event logs.",
      },
    ],

    contributions: [
      "Collaborated as a core team member on project conceptualization and architecture design for FOSS Hack 2026.",
      "Contributed to the telemetry dashboard implementation using Alpine.js and Tailwind CSS for real-time status presentation.",
      "Assisted with FastAPI endpoint development connecting container state data with the web interface.",
      "Helped write documentation, project setup instructions, and demo walkthroughs for open-source evaluation.",
    ],

    challenges: [
      {
        challenge: "Handling containers with fatal startup errors that crash immediately after restarting.",
        solution:
          "Implemented retry limits in the monitoring loop to prevent uncontrolled restart loops when a container is misconfigured.",
      },
      {
        challenge: "Keeping dashboard resource consumption minimal for local development machines.",
        solution:
          "Used Alpine.js and lightweight periodic polling rather than heavy frontend frameworks to keep the telemetry view lightweight.",
      },
    ],

    outcomes: [
      "Won Team Winner at FOSS Hack 2026, competing in a national open-source competition with 2,360+ teams and 5,400+ participants.",
      "Successfully created an open-source tool demonstrating automated container self-healing and monitoring.",
      "Gained hands-on experience with the Docker API, asynchronous Python service architecture, and open-source hackathon collaboration.",
    ],
  },
  {
    id: "claimguard",
    title: "ClaimGuard-AI – Fact Verification Engine",
    type: "NLP & Fact Verification",
    role: "Backend Workflow & Scoring Logic Developer",
    badge: "AI Fact Checking Engine",
    badgeType: "star",
    categories: ["Full Stack", "AI / ML"],
    image: claimguardImg,
    summary:
      "A claim-analysis web application featuring a pipeline for claim extraction, similarity analysis, evidence retrieval, source checking, Tavily web-search fallback, and calibrated scoring.",
    github: "https://github.com/Khushi5155/ClaimGuard-AI",
    live: null,
    hasCaseStudy: true,
    achievement: "NLP Claim Analysis Pipeline with Calibrated Confidence Scoring",
    timeline: "2025 · Engineering Project",

    overview:
      "ClaimGuard-AI analyzes claims within news stories and user input text. It extracts individual verifiable claims, checks them against a curated factual database, and falls back to Tavily live web search when local evidence is inconclusive. The scoring algorithm was specifically calibrated so lower semantic similarity is not falsely flagged as disproof.",

    problemStatement:
      "Automated fact-checking tools can produce misleading results when evaluating claims. Naive vector-similarity approaches often misclassify novel assertions as debunked simply because cosine similarity to existing static databases is low.",

    proposedSolution:
      "Developed a multi-stage claim verification pipeline in FastAPI. The system extracts individual factual assertions, checks them against a local fact knowledge base, falls back to live web search via the Tavily API when local context is insufficient, and evaluates results with calibrated scoring logic.",

    architecture: {
      layers: [
        {
          name: "Client Interface",
          detail: "React.js Web Client · Text Input & Claim Evidence Inspection View",
        },
        {
          name: "API Processing Gateway",
          detail: "FastAPI Backend Service · Orchestrates extraction and retrieval pipeline",
        },
        {
          name: "NLP Claim Pipeline",
          detail: "Sentence Claim Extraction · Semantic Similarity Analysis",
        },
        {
          name: "Evidence Retrieval Layer",
          detail: "Local Fact Knowledge Base + Tavily Web Search API Fallback",
        },
      ],
      flow: [
        { from: "User / Analyst", to: "React Client", label: "Submits text or article for analysis" },
        { from: "React Client", to: "FastAPI Pipeline", label: "Transmits text payload to backend" },
        { from: "FastAPI Pipeline", to: "Claim Extraction", label: "Identifies verifiable factual sentences" },
        { from: "Claim Extraction", to: "Local Fact Base", label: "Checks similarity against stored facts" },
        { from: "Claim Extraction", to: "Tavily Search API", label: "Queries live web if local evidence is inconclusive" },
        { from: "Evidence Sources", to: "Scoring Engine", label: "Applies calibrated credibility evaluation" },
        { from: "Scoring Engine", to: "React Client", label: "Returns scored claims and source references" },
      ],
    },

    techStack: [
      { name: "React.js", category: "Frontend" },
      { name: "Python", category: "Backend Language" },
      { name: "FastAPI", category: "API Framework" },
      { name: "Tavily API", category: "Live Search Integration" },
      { name: "NLP", category: "Natural Language Processing" },
      { name: "Scoring Engine", category: "Evaluation Logic" },
      { name: "Tailwind CSS", category: "Styling" },
    ],

    keyFeatures: [
      {
        title: "Claim Extraction Pipeline",
        description:
          "Segments input text into candidate sentences to isolate verifiable factual statements.",
      },
      {
        title: "Dual-Source Evidence Retrieval",
        description:
          "Checks claims against a local knowledge base with automated fallback to the Tavily API for live web search context.",
      },
      {
        title: "Calibrated Credibility Scoring",
        description:
          "Scoring rules calibrated so low similarity alone is not treated as proof that a novel claim is false.",
      },
      {
        title: "Source Reference Presentation",
        description:
          "Presents supporting context and source citations alongside scored assertions in the client interface.",
      },
    ],

    contributions: [
      "Developed backend workflow components for claim extraction, similarity analysis, scoring, evidence retrieval, and source checking.",
      "Integrated the Tavily search API fallback to provide supporting web context when local database coverage was insufficient.",
      "Refined scoring logic so low similarity alone was not treated as proof that a claim was false.",
      "Built client interface views in React to display analyzed claims, evidence passages, and sources.",
    ],

    challenges: [
      {
        challenge: "Preventing false-debunking outcomes on novel claims absent from the local database.",
        solution:
          "Calibrated scoring thresholds and integrated live web retrieval fallback via Tavily before categorizing evidence confidence.",
      },
      {
        challenge: "Managing response time across multi-sentence extraction and external search queries.",
        solution:
          "Utilized asynchronous request handling in FastAPI to process verification checks concurrently.",
      },
    ],

    outcomes: [
      "Built a functional claim-analysis application combining local knowledge bases with live search API fallback.",
      "Eliminated false-debunking classification errors through calibrated scoring heuristics.",
      "Gained practical experience with NLP claim extraction, API integration, and asynchronous backend development.",
    ],
  },
  {
    id: "mannmitra",
    title: "MannMitra – Mental Wellness Ecosystem",
    type: "Student Wellness Platform (SIH Project)",
    role: "Backend & Assessment Workflow Contributor",
    badge: "Smart India Hackathon Project",
    badgeType: "star",
    categories: ["Full Stack", "AI / ML"],
    image: mannmitraImg,
    summary:
      "A mental wellness platform designed for Indian students featuring standardized self-assessment screeners (PHQ-9 and GAD-7), conversational support, and counselor triage dashboards.",
    github: "https://github.com/Khushi5155/SIH-25",
    live: null,
    hasCaseStudy: true,
    achievement: "Smart India Hackathon (SIH 2024–25) Project Submission",
    timeline: "2024–2025 · Smart India Hackathon",

    overview:
      "Created for Smart India Hackathon (SIH 2024–25), MannMitra combines validated self-assessment frameworks with conversational support to help students recognize early stress and depressive indicators before crisis points. The platform serves strictly as an informational screening and wellness-assistance tool, not a diagnostic or clinical medical system.",

    problemStatement:
      "College students facing academic and personal stress often hesitate to seek counseling support early. Institutional wellness teams lack structured digital self-assessment tools to help students evaluate stress levels and access relevant campus guidance.",

    proposedSolution:
      "Our team built a MERN-stack web platform enabling students to complete validated standardized self-screening questionnaires (PHQ-9 for depression indicators, GAD-7 for anxiety indicators) with automated score categorization, converse with a supportive chatbot for guided mindfulness, and provide counselor triage dashboards.",

    architecture: {
      layers: [
        {
          name: "Client Interface Tier",
          detail: "React.js Student Portal & Counselor Triage Views",
        },
        {
          name: "API Service Tier",
          detail: "Node.js & Express.js REST API · Survey Routing & Score Computation",
        },
        {
          name: "Conversational Guide Tier",
          detail: "Chatbot Interface · Guided Mindfulness Exercises & Resource Prompts",
        },
        {
          name: "Database Tier",
          detail: "MongoDB Database · Assessment Responses & Student Welfare Schemas",
        },
      ],
      flow: [
        { from: "Student", to: "React Client", label: "Completes self-assessment screener" },
        { from: "React Client", to: "Express.js API", label: "Submits survey responses" },
        { from: "Express.js API", to: "Score Calculator", label: "Computes standardized score & severity tier" },
        { from: "Express.js API", to: "MongoDB", label: "Stores survey record and response log" },
        { from: "Express.js API", to: "React Client", label: "Displays score category & mindfulness guidance" },
        { from: "MongoDB", to: "Counselor View", label: "Provides triage indicators for wellness teams" },
      ],
    },

    techStack: [
      { name: "React.js", category: "Frontend" },
      { name: "Node.js", category: "Runtime" },
      { name: "Express.js", category: "Backend Framework" },
      { name: "MongoDB", category: "Database" },
      { name: "MERN Stack", category: "Architecture" },
      { name: "Tailwind CSS", category: "Styling" },
    ],

    keyFeatures: [
      {
        title: "Standardized Self-Screening Questionnaires",
        description:
          "Integrates validated PHQ-9 and GAD-7 questionnaires with automated score calculation and standardized indicator tier categorization.",
      },
      {
        title: "Conversational Wellness Chatbot",
        description:
          "Provides contextual conversational guidance for guided mindfulness, breathing exercises, and stress-reduction tips.",
      },
      {
        title: "Counselor Triage Overview",
        description:
          "Dashboard view providing student welfare teams with visibility into student self-assessment indicators to assist with outreach.",
      },
      {
        title: "Mood & Reflection Tracking",
        description:
          "Enables students to log daily sentiment and reflect on stress factors over time.",
      },
    ],

    contributions: [
      "Developed backend REST API endpoints in Node.js and Express for questionnaire ingestion and score calculation.",
      "Structured MongoDB document schemas for storing user assessment submissions and mood tracking entries.",
      "Assisted with implementing the interactive questionnaire interface in React.js.",
      "Integrated clear medical disclaimer notices emphasizing that the tool is strictly for self-screening, not medical diagnosis.",
    ],

    challenges: [
      {
        challenge: "Ensuring users clearly understand the boundary between informational screening and clinical diagnosis.",
        solution:
          "Added prominent disclaimers on screening pages stating that the tool provides informational self-assessment rather than medical diagnosis, along with emergency helpline resources.",
      },
      {
        challenge: "Structuring scoring logic accurately for both PHQ-9 and GAD-7 standardized scale guidelines.",
        solution:
          "Implemented automated scoring calculation strictly following published clinical tier ranges (Minimal, Mild, Moderate, Severe).",
      },
    ],

    outcomes: [
      "Completed as a comprehensive submission for Smart India Hackathon (SIH 2024–25).",
      "Successfully demonstrated digital self-assessment workflows combining validated screening scales with student wellness resources.",
      "Gained practical experience with MERN stack backend engineering, API development, and ethical software practices.",
    ],
  },
];

export const COMPACT_PROJECTS = [
  {
    id: "attendease",
    title: "AttendEase – Attendance Analytics",
    type: "Full-Stack Web App",
    badge: "Live Product",
    badgeType: "live",
    categories: ["Full Stack", "Frontend"],
    image: attendeaseImg,
    description:
      "A subject-wise attendance analytics tool solving university aggregate percentage blind spots. Tracks each course independently, calculates cutoff margins (75%), predicts makeup class counts, and simulates skipping.",
    longDescription:
      "AttendEase addresses a critical problem for university students: aggregate attendance numbers frequently mask individual subject shortages. AttendEase tracks course-by-course metrics, accurately calculates how many future lectures must be attended consecutively to recover to 75%, and provides an interactive skip simulator.",
    problemStatement:
      "University attendance portals usually present only overall aggregate attendance percentages, obscuring critical course shortages until students are debarred from end-term examinations.",
    solutionOverview:
      "Constructed a client-side analytics web app that models attendance per course, predicts minimum consecutive classes required to reach safety thresholds, and simulates future absence scenarios.",
    keyFeatures: [
      "Subject-wise tracking preventing hidden shortages behind aggregate averages",
      "Predictive recovery algorithm calculating minimum consecutive classes needed",
      "Interactive 'Can I Skip?' simulator forecasting the post-absence percentage",
      "Zero-dependency client persistence using LocalStorage with responsive mobile UI",
    ],
    technicalContribution:
      "Designed and implemented the complete application, mathematical predictive logic, local persistence schemas, and responsive mobile-first Tailwind UI.",
    tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/Khushi5155/attendease",
    live: "https://attendease-six-rouge.vercel.app/",
  },
  {
    id: "alertax",
    title: "AlertaX – AI Disaster Alert System",
    type: "Real-time Systems",
    badge: "Emergency Tech",
    badgeType: null,
    categories: ["Full Stack", "AI / ML"],
    image: disasterImg,
    description:
      "Location-based emergency response platform streaming real-time hazard data, interactive evacuation route maps, and shelter capacity tracking.",
    longDescription:
      "AlertaX is a real-time hazard notification system designed to bridge information gaps during natural emergencies. It aggregates meteorological data, seismic feeds, and crowd reports to push location-specific evacuation guidance.",
    problemStatement:
      "During rapid environmental hazards like urban flash floods or earthquakes, centralized warnings often reach citizens too late or lack granular shelter status.",
    solutionOverview:
      "Built a geospatial incident response portal streaming meteorological feeds over WebSockets to interactive map layers marking safe zones and shelter capacities.",
    keyFeatures: [
      "Real-time hazard notifications over WebSockets for low-latency dispatch",
      "Interactive map overlays highlighting flood/storm perimeters and verified shelters",
      "Flask backend integrating third-party emergency alert APIs and MongoDB storage",
    ],
    technicalContribution:
      "Engineered Flask backend endpoints, integrated WebSocket real-time event broadcasting, and mapped Leaflet spatial coordinates.",
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
    image: searchEngineImg,
    description:
      "Multi-file document indexing and text retrieval system built in C++ utilizing word-frequency hash maps and linked lists for sub-linear search lookup.",
    longDescription:
      "A systems-level text retrieval tool implemented in C++ without external library dependencies. Parses raw document corpora, sanitizes tokens, indexes word frequencies in custom hash tables, and delivers rapid keyword retrieval.",
    problemStatement:
      "Demonstrating foundational information retrieval and inverted index construction without relying on high-level standard containers or external search engines.",
    solutionOverview:
      "Implemented a custom chained hash table and linked-list data structures in modern C++ to index multi-document corpuses with sub-linear query lookups.",
    keyFeatures: [
      "Custom hash table implementation using linked-list chaining for collision management",
      "Fast multi-file inverted index construction with term-frequency mapping",
      "Optimized CLI search queries with sub-linear retrieval speed",
    ],
    technicalContribution:
      "Authored custom hashing algorithms, collision-handling chaining, token sanitization filters, and file I/O pipelines in pure C++.",
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
    image: kalaficialImg,
    description:
      "Community portfolio and exhibition portal connecting emerging visual artists with global online showcases and physical gallery exhibition calls.",
    longDescription:
      "Kala.ficial is a dedicated platform for visual artists to present digital portfolios, connect with peers, and receive alerts for physical and virtual exhibitions.",
    problemStatement:
      "Independent visual artists frequently struggle with portfolio maintenance and discovering verified physical and digital art callouts in one unified space.",
    solutionOverview:
      "Architected a creator-first web portal providing high-resolution image portfolios, categorised exhibitions, and direct artist submission workflows.",
    keyFeatures: [
      "Artist profile management and high-resolution portfolio curation",
      "RESTful API endpoints for artwork submissions, categories, and exhibition listings",
      "Full MERN stack implementation with Node.js, Express, and MongoDB",
    ],
    technicalContribution:
      "Built the MERN REST APIs, Express route handlers, MongoDB document models, and React artist gallery components.",
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
    image: oopsImg,
    description:
      "Modular C++ console application demonstrating core OOP principles including polymorphic operator hierarchies, inheritance, and encapsulation.",
    longDescription:
      "A structured C++ application created to demonstrate clean object-oriented architecture in mathematical computation, featuring modular class design and function overloading.",
    problemStatement:
      "Illustrating clean software engineering principles (extensibility, polymorphism, encapsulation) within a console mathematical computation engine.",
    solutionOverview:
      "Abstracted calculator operations into an extensible class hierarchy with polymorphic evaluation methods and modular input/output isolation.",
    keyFeatures: [
      "Extensible operator hierarchy using abstract base classes and inheritance",
      "Polymorphic evaluation of basic arithmetic and advanced mathematical operations",
      "Strict separation of input parsing, computation logic, and formatted CLI output",
    ],
    technicalContribution:
      "Architected abstract base classes, operator overloading methods, and modular execution pipelines in C++.",
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
    image: deshDarshanImg,
    description:
      "Interactive travel portal exploring cultural heritage and destination facts across Indian states with dynamic category sliders.",
    longDescription:
      "An interactive web experience exploring tourism destinations, historic landmarks, and cultural insights across India's states and union territories.",
    problemStatement:
      "Presenting rich multi-state cultural tourism information through lightweight, accessible, and engaging interactive web components.",
    solutionOverview:
      "Crafted an interactive destination discovery portal featuring custom state category sliders, trivia reveal mechanics, and fluid CSS animations.",
    keyFeatures: [
      "Dynamic state and category exploration sliders with smooth CSS transitions",
      "Interactive 'spin-to-reveal' fact engine uncovering cultural trivia",
      "Lightweight frontend implementation with semantic HTML5, CSS3, and JavaScript",
    ],
    technicalContribution:
      "Crafted the interactive slider mechanics, DOM event handlers, and responsive CSS keyframe animations.",
    tech: ["HTML5", "CSS3", "JavaScript", "UI Animations"],
    github: "https://github.com/Khushi5155/DeshDarshan",
    live: null,
  },
];
