import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", background: "#111", minHeight: "100vh" }}>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;