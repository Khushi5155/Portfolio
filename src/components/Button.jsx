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
      "bg-emerald-500 text-slate-950 hover:bg-emerald-400 border border-emerald-400/40 shadow-sm shadow-emerald-500/20 active:scale-[0.98]",
    secondary:
      "bg-white text-slate-800 border-slate-300 hover:bg-slate-100 hover:text-slate-950 hover:border-emerald-500/60 shadow-sm dark:bg-slate-900/80 dark:text-slate-200 dark:border-slate-700/70 dark:hover:border-emerald-500/50 dark:hover:text-white dark:hover:bg-slate-800/80 active:scale-[0.98]",
    ghost:
      "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-800/50 active:scale-[0.98]",
    outline:
      "border border-emerald-600/60 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-500/50 dark:text-emerald-400 dark:hover:bg-emerald-500/10 active:scale-[0.98]",
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
