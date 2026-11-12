import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, Award } from "lucide-react";

export default function Education() {
  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
          Academic Background
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
          Education
        </h2>
        <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* MAIN DEGREE CARD (Col 1-8) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-8 p-7 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs dark:shadow-none"
        >
          <div className="flex items-start justify-between gap-4 flex-wrap pb-5 border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Bachelor of Technology (B.Tech)
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading mt-0.5">
                  Computer Science and Engineering
                </h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium text-sm mt-1">
                  Guru Gobind Singh Indraprastha University (GGSIPU)
                </p>
              </div>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold self-start">
              5th Semester • Junior
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60">
              <Calendar size={15} className="text-slate-400 dark:text-slate-500 shrink-0" />
              <div>
                <p className="text-slate-400 dark:text-slate-500 text-[10px] uppercase">Timeline</p>
                <p className="text-slate-800 dark:text-slate-200 font-medium">Expected Graduation: June 2028</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60">
              <Award size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <p className="text-slate-400 dark:text-slate-500 text-[10px] uppercase">Academic Standing</p>
                <p className="text-emerald-600 dark:text-emerald-400 font-bold">Cumulative GPA: 9.0 / 10.0</p>
              </div>
            </div>
          </div>

          {/* Core Coursework */}
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/70">
            <h4 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3 flex items-center gap-2">
              <BookOpen size={14} className="text-emerald-600 dark:text-emerald-400" />
              <span>Core Coursework &amp; Fundamentals</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700/60"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* QUICK STATS / ACADEMIC PILL (Col 9-12) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="lg:col-span-4 space-y-4"
        >
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80">
            <h4 className="font-heading font-semibold text-slate-900 dark:text-white text-sm">
              Academic Highlights
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Consistently maintained top percentile academic performance with strong theoretical grounding in algorithmic complexity, database design, and object-oriented architecture.
            </p>

            <div className="mt-5 space-y-3 text-xs">
              <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-800/60">
                <span className="text-slate-600 dark:text-slate-400">Current CGPA</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">9.0 / 10.0</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-800/60">
                <span className="text-slate-600 dark:text-slate-400">Degree Status</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">5th Semester Undergraduate</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600 dark:text-slate-400">Target Roles</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">SDE Intern / Full-Stack</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
