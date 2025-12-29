// src/components/CardItem.jsx
export default function CardItem({ children }) {
  return (
    <div
      className="w-[90%] md:w-[70%] mx-auto my-10 p-8
      bg-white/10 backdrop-blur-xl 
      border border-[#00FF9D]/30 
      rounded-2xl shadow-[0_0_10px_rgba(0,255,157,0.1)]
      transition-all duration-500 ease-in-out
      hover:shadow-[0_0_25px_rgba(0,255,157,0.5)]
      hover:border-[#00FF9D]
      hover:-translate-y-1
      animate-fadeIn
      text-[#E6F1FF] font-inter"
    >
      {children}
    </div>
  );
}