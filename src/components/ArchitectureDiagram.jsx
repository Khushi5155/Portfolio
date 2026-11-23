import {
  Users,
  Layout,
  Server,
  Database,
  Cloud,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export default function ArchitectureDiagram({ architecture, title }) {
  if (!architecture) return null;

  const tierIcons = [Users, Layout, Server, Database, Cloud];

  return (
    <div className="w-full my-6 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#070913] border border-slate-200/90 dark:border-[#6366F1]/25 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-100 dark:border-[#6366F1]/15 mb-6">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-[#38BDF8] font-semibold">
            System Topology
          </span>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
            {title ? `${title} Architecture Flow` : "System Architecture & Data Flow"}
          </h4>
        </div>
        <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-indigo-50 text-indigo-700 dark:bg-[#131B38] dark:text-[#38BDF8] border border-indigo-200/80 dark:border-[#38BDF8]/30">
          Component Topology
        </span>
      </div>

      {/* TIER TILES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {architecture.layers?.map((layer, index) => {
          const Icon = tierIcons[index % tierIcons.length];
          return (
            <div
              key={index}
              className="p-4 rounded-2xl bg-[#F4F2EC] dark:bg-[#0D1127] border border-slate-200/80 dark:border-[#6366F1]/20 flex flex-col justify-between hover:border-indigo-400/50 dark:hover:border-[#6366F1]/45 transition-all duration-150"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-[#64748B]">
                    TIER 0{index + 1}
                  </span>
                  <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-[#131B38] text-indigo-600 dark:text-[#38BDF8]">
                    <Icon size={14} />
                  </div>
                </div>
                <h5 className="font-heading font-bold text-slate-900 dark:text-[#F8FAFC] text-sm">
                  {layer.name}
                </h5>
              </div>
              <p className="mt-2 text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {layer.detail}
              </p>
            </div>
          );
        })}
      </div>

      {/* DATA FLOW STEPS */}
      {architecture.flow && architecture.flow.length > 0 && (
        <div>
          <h5 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#94A3B8] mb-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-[#38BDF8]" />
            <span>Execution Flow</span>
          </h5>

          <div className="space-y-2.5">
            {architecture.flow.map((step, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-[#0D1127]/80 border border-slate-200/70 dark:border-[#6366F1]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-[#1B244A] text-indigo-600 dark:text-[#38BDF8] flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-[#F8FAFC]">
                    {step.from}
                  </span>
                  <ArrowRight size={13} className="text-slate-400 dark:text-slate-500 hidden sm:inline shrink-0" />
                  <ArrowDown size={13} className="text-slate-400 dark:text-slate-500 sm:hidden shrink-0" />
                  <span className="font-semibold text-indigo-600 dark:text-[#38BDF8]">
                    {step.to}
                  </span>
                </div>
                <span className="text-slate-600 dark:text-[#94A3B8] sm:text-right font-medium pl-7 sm:pl-0">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
