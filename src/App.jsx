import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="top">
      <Cursor />

      <Navbar />

      <main>
        {/* HERO */}
        <Hero />

        {/* 01 — ABOUT */}
        <About />

        {/* 02 — SELECTED WORK */}
        <Projects />

        {/* 03 — SKILLS */}
        <section
          id="skills"
          className="section skills-section"
        >
          <div className="container">
            <span className="section-label">
              03 — Skills
            </span>
          </div>
        </section>

        {/* 04 — CONTACT */}
        <section
          id="contact"
          className="section contact-section"
        >
          <div className="container">
            <span className="section-label">
              04 — Contact
            </span>
          </div>
        </section>

        {/* PERSONAL END NOTE */}
        <section className="scroll-thanks">
          <div className="container">
            <div className="scroll-note">
              <div className="scroll-note-copy">
                <p className="scroll-note-line">
                  End of page. Not the end of the{" "}
                  <span className="handwritten-word">
                    work.
                  </span>
                </p>

                <p className="scroll-note-line handwritten-line">
                  <span>More ideas.</span>{" "}
                  <span>More experiments.</span>{" "}
                  <strong>More to come.</strong>
                </p>
              </div>

              <span className="scroll-note-index">
                04 / END
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;