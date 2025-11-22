import Home from "../sections/Home";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";


export default function CardContainer() {
  return (
    <div className="w-full flex flex-col items-center">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    
    </div>
  );
}