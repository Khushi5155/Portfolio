// src/components/CardItem.jsx
export default function CardItem({ children, className = "" }) {
  return (
    <div
      className={`w-full max-w-4xl mx-auto my-6 p-6 sm:p-8
      bg-white dark:bg-slate-900/60 backdrop-blur-xl 
      border border-slate-200 dark:border-slate-800/80 
      rounded-2xl shadow-sm dark:shadow-xl
      transition-all duration-300 ease-in-out
      hover:border-slate-300 dark:hover:border-slate-700/80
      hover:shadow-md dark:hover:shadow-2xl
      text-slate-800 dark:text-slate-200 ${className}`}
    >
      {children}
    </div>
  );
}
