export default function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React + Vite", level: "75%" },
    { name: "Tailwind CSS", level: "80%" },
    { name: "C++ / OOPs", level: "85%" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0A192F] text-white px-6 py-16 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-8 border-b-4 border-pink-500 pb-2">
        My Skills
      </h2>

      {/* Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#112240] p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-pink-500 h-3 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
            <p className="mt-2">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}