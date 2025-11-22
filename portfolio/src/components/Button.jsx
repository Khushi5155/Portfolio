// src/components/Button.jsx
export default function Button({ text, link }) {
  return (
    <a
      href={link}
      className="px-6 py-2 border border-[#00FF9D] 
      rounded-lg font-poppins text-[#00FF9D] 
      hover:bg-[#00FF9D] hover:text-[#0A192F] 
      transition-all duration-300 shadow-[0_0_10px_#00FF9D]"
      download
    >
      {text}
    </a>
  );
}
