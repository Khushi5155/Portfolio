export default function Button({
  text,
  href,
  link,
  id,
  download,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  onClick,
  target,
}) {
  const destination = href || id || link;
  const isExternal = (link && !id) || target === "_blank";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-medium gap-1.5",
    md: "px-5 py-2.5 text-sm font-medium gap-2",
    lg: "px-6 py-3 text-base font-semibold gap-2.5",
  }[size] || "px-5 py-2.5 text-sm font-medium gap-2";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-400 hover:to-indigo-600 text-white border border-indigo-400/30 shadow-md shadow-indigo-500/20 dark:shadow-indigo-500/25 active:scale-[0.98]",
    secondary:
      "bg-white text-slate-800 border border-slate-200/90 hover:bg-slate-50 hover:border-indigo-400/50 hover:text-slate-950 shadow-xs dark:bg-[#0D1127] dark:text-[#F8FAFC] dark:border-[#6366F1]/20 dark:hover:border-[#6366F1]/50 dark:hover:bg-[#131B38] active:scale-[0.98]",
    ghost:
      "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] dark:hover:bg-[#131B38]/70 active:scale-[0.98]",
    outline:
      "border border-indigo-600/40 text-indigo-700 hover:bg-indigo-50 dark:border-[#38BDF8]/40 dark:text-[#38BDF8] dark:hover:bg-[#38BDF8]/10 active:scale-[0.98]",
  }[variant] || "";

  const baseClasses =
    "inline-flex items-center justify-center rounded-lg transition-all duration-200 select-none cursor-pointer";

  if (!destination) {
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      >
        {Icon && <Icon size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />}
        {text}
      </button>
    );
  }

  return (
    <a
      href={destination}
      download={
        download
          ? typeof download === "string"
            ? download
            : "Khushi_Kumari_Resume.pdf"
          : undefined
      }
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
    >
      {Icon && <Icon size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />}
      {text}
    </a>
  );
}
