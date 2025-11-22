export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center gap-6">
      <h2 className="text-5xl font-bold text-green-400">Hi, I’m Khushi 👋</h2>
      <p className="text-xl text-gray-300">
        Web Developer & Programmer
      </p>

      <div className="flex gap-6 mt-4">
        <button className="px-6 py-3 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400">
          View Projects
        </button>
        <button className="px-6 py-3 border border-green-400 text-green-400 rounded-xl hover:bg-green-400 hover:text-black">
          Download Resume
        </button>
      </div>
    </section>
  );
}