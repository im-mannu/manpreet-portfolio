import Hero3D from "./sections/Hero3D";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#070c17" }}>
      <Hero3D />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
