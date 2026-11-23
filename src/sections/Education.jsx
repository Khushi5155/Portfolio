import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, Award, MapPin, CheckCircle2 } from "lucide-react";

export default function Education() {
  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ];

  const highlights = [
    { label: "Current CGPA", value: "9.0 / 10.0", highlight: true },
    { label: "Academic Level", value: "5th Semester Undergraduate", highlight: false },
    { label: "Degree Program", value: "Full-Time B.Tech (4 Years)", highlight: false },
    { label: "Target Roles", value: "Software Engineer Intern / Full-Stack", highlight: false },
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-[#38BDF8] mb-2">
          Academic Background
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] font-heading">
          Education
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-[#38BDF8] rounded-full mt-3"></div>
        <p className="text-slate-600 dark:text-[#94A3B8] text-sm max-w-xl mt-3">
          Rigorous computer science curriculum emphasizing computational foundations, algorithmic problem solving, and modern software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* MAIN DEGREE CARD (Col 1-8) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-8 p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0D1127]/80 border border-slate-200/80 dark:border-[#6366F1]/20 shadow-xs dark:shadow-none"
        >
          {/* Card Top Banner */}
          <div className="flex items-start justify-between gap-4 flex-wrap pb-6 border-b border-slate-100 dark:border-[#1E293B]">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200/80 dark:bg-[#131B38] dark:text-[#38BDF8] dark:border-[#38BDF8]/25 shrink-0">
                <GraduationCap size={26} />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-indigo-600 dark:text-[#38BDF8] uppercase tracking-wider">
                  Bachelor of Technology (B.Tech)
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading mt-0.5">
                  Computer Science &amp; Engineering
                </h3>
                <p className="text-slate-700 dark:text-[#94A3B8] font-medium text-sm mt-1">
                  Guru Gobind Singh Indraprastha University (GGSIPU)
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50/90 text-indigo-700 border border-indigo-200/80 dark:bg-[#131B38] dark:text-[#38BDF8] dark:border-[#38BDF8]/25 text-xs font-semibold self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-[#38BDF8]"></span>
              5th Semester • Class of 2028
            </div>
          </div>

          {/* Academic Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs text-slate-500 dark:text-[#94A3B8]">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#131B38]/60 border border-slate-200/80 dark:border-[#1E293B]">
              <Calendar size={18} className="text-slate-400 dark:text-slate-500 shrink-0" />
              <div>
                <p className="text-slate-400 dark:text-[#94A3B8]/70 text-[10px] uppercase font-semibold">Timeline</p>
                <p className="text-slate-800 dark:text-[#F8FAFC] font-medium">Expected Graduation: June 2028</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#131B38]/60 border border-slate-200/80 dark:border-[#1E293B]">
              <Award size={18} className="text-indigo-600 dark:text-[#38BDF8] shrink-0" />
              <div>
                <p className="text-slate-400 dark:text-[#94A3B8]/70 text-[10px] uppercase font-semibold">Academic Standing</p>
                <p className="text-indigo-600 dark:text-[#38BDF8] font-bold">Cumulative GPA: 9.0 / 10.0</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#131B38]/60 border border-slate-200/80 dark:border-[#1E293B]">
              <MapPin size={18} className="text-slate-400 dark:text-slate-500 shrink-0" />
              <div>
                <p className="text-slate-400 dark:text-[#94A3B8]/70 text-[10px] uppercase font-semibold">Location</p>
                <p className="text-slate-800 dark:text-[#F8FAFC] font-medium">Delhi, India</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#131B38]/60 border border-slate-200/80 dark:border-[#1E293B]">
              <CheckCircle2 size={18} className="text-indigo-600 dark:text-[#38BDF8] shrink-0" />
              <div>
                <p className="text-slate-400 dark:text-[#94A3B8]/70 text-[10px] uppercase font-semibold">Affiliation</p>
                <p className="text-slate-800 dark:text-[#F8FAFC] font-medium">State University • AICTE Approved</p>
              </div>
            </div>
          </div>

          {/* Core Coursework & Fundamentals */}
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-[#1E293B]">
            <h4 className="text-xs uppercase tracking-wider text-slate-500 dark:text-[#94A3B8] font-semibold mb-3 flex items-center gap-2">
              <BookOpen size={14} className="text-indigo-600 dark:text-[#38BDF8]" />
              <span>Core Coursework &amp; Computer Science Fundamentals</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200 dark:bg-[#131B38] dark:text-[#F8FAFC] dark:border-[#1E293B] transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ACADEMIC SUMMARY CARD (Col 9-12) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="lg:col-span-4 space-y-4"
        >
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1127]/80 border border-slate-200/80 dark:border-[#6366F1]/20 shadow-xs dark:shadow-none">
            <h4 className="font-heading font-semibold text-slate-900 dark:text-[#F8FAFC] text-sm">
              Academic Standing
            </h4>
            <p className="text-xs text-slate-600 dark:text-[#94A3B8] mt-2 leading-relaxed">
              Maintained top academic performance throughout undergraduate semesters with an emphasis on algorithmic theory, database engineering, and scalable software systems.
            </p>

            <div className="mt-5 space-y-3 text-xs">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center py-2.5 ${
                    idx !== highlights.length - 1 ? "border-b border-slate-100 dark:border-[#1E293B]" : ""
                  }`}
                >
                  <span className="text-slate-600 dark:text-[#94A3B8]">{item.label}</span>
                  <span
                    className={`font-medium ${
                      item.highlight
                        ? "text-indigo-600 dark:text-[#38BDF8] font-bold text-sm"
                        : "text-slate-900 dark:text-[#F8FAFC]"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Note Card */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#131B38]/50 border border-slate-200/80 dark:border-[#1E293B] text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-[#F8FAFC] mb-1">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-[#38BDF8]"></span>
              Open to Opportunities
            </div>
            Seeking software engineering internship opportunities for Summer 2026 and off-campus engineering roles.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
