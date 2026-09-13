import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div id="top">
      <Navbar />

      <main>
        <Hero />

        <Projects />

        <section id="experience" className="section">
          <div className="container">
            <span className="section-label">02 — Experience</span>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <span className="section-label">03 — Skills</span>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <span className="section-label">04 — Contact</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;