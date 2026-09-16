
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import "./HeroActions.css";

const heroStatements = [
  {
    first: "I like understanding ",
    accent: "how things work",
    middle: ", then ",
    emphasis: "making them work better.",
  },
  {
    first: "I turn ",
    accent: "complex problems",
    middle: " into ",
    emphasis: "simple, working software.",
  },
  {
    first: "I build things that ",
    accent: "people can actually use",
    middle: ", ",
    emphasis: "not just things that look good.",
  },
  {
    first: "I learn by ",
    accent: "building",
    middle: ", ",
    emphasis: "breaking, and trying again.",
  },
  {
    first: "Curious by nature, ",
    accent: "technical by habit",
    middle: ", and ",
    emphasis: "always learning.",
  },
];

function Hero() {
  const [statementIndex, setStatementIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStatementIndex(
        (current) => (current + 1) % heroStatements.length
      );
    }, 10000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const statement = heroStatements[statementIndex];

  return (
    <section className="hero">
      <div className="hero-meta">
        <div className="hero-location">
          <span className="hero-label">Based in</span>
          <span>Regina, SK</span>
        </div>

        <nav
          className="hero-navigation"
          aria-label="Main navigation"
        >
          <a href="#about">About</a>

          <a href="#skills">Toolkit</a>

          <Link to="/Add-ons">Add-ons</Link>
        </nav>

        <div className="hero-focus">
          <span className="hero-label">Focus</span>
          <span>Software · Data · AI</span>
        </div>
      </div>

      <div className="hero-meta-line" aria-hidden="true" />

      <div className="hero-main">
        <p className="hero-intro">
          CS Honours · Software Development
        </p>

        <h1>
          Haard
          <br />
          Patel<span>.</span>
        </h1>

        <div
          className="hero-statement"
          key={statementIndex}
          aria-live="polite"
        >
          <p>
            {statement.first}

            <span className="hero-statement-accent">
              {statement.accent}
            </span>

            {statement.middle}

            {statement.emphasis && (
              <em>{statement.emphasis}</em>
            )}
          </p>
        </div>

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
              RESUME <span>↗</span>
            </a>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-link primary">
              <span className="hero-link-label">View work</span>

              <span
                className="hero-link-arrow"
                aria-hidden="true"
              >
                ↓
              </span>
            </a>

            <a href="/experience" className="hero-link primary">
              <span className="hero-link-label">Experience</span>

              <span
                className="hero-link-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
