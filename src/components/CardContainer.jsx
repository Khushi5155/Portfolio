import Home from "../sections/Home";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Achievements from "../sections/Achievements";
import Education from "../sections/Education";
import Contact from "../sections/Contact";

export default function CardContainer() {
  return (
    <main className="w-full flex flex-col items-center">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Education />
      <Contact />
    </main>
  );
}
