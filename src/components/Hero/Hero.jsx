import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-meta">
        <div className="hero-location">
          <span className="hero-label">Based in</span>
          <span>Regina, SK</span>
        </div>

        <nav className="hero-navigation" aria-label="Main navigation">
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="hero-focus">
          <span className="hero-label">Focus</span>
          <span>Software · Data · AI</span>
        </div>
      </div>

      <div className="hero-main">
        <p className="hero-intro">
          CS Honours · Software Development
        </p>

        <h1>
          Haard
          <br />
          Patel<span>.</span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-copy">
            <p className="hero-description">
              Software developer and technology enthusiast focused on
              building practical software, solving technical problems,
              and exploring the intersection of software, data, and AI.
            </p>

            <a
              href="https://acrobat.adobe.com/id/urn:aaid:sc:ap:2e2a7792-15d9-4b96-81bc-7498cf67c744"
              target="_blank"
              rel="noreferrer"
              className="hero-resume"
            >
              RESUME
              <span>↗</span>
            </a>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-link primary">
              View work <span>↓</span>
            </a>

            <a href="#experience" className="hero-link">
              Experience <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;