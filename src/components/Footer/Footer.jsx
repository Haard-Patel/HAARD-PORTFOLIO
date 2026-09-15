import { ArrowUp, Github, Mail } from "lucide-react";
import "./Footer.css";

const footerLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#projects",
  },
  {
    label: "Toolkit",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top-line" />

        <div className="footer-grid">
          {/* Identity */}
          <div className="footer-identity">
            <div className="footer-name">
              Haard Patel<span>.</span>
            </div>

            <div className="footer-meta">
              <span>REGINA, SK</span>
              <span className="footer-meta-divider">/</span>
              <span>SOFTWARE · DATA · AI</span>
            </div>

            <div className="footer-socials">
              <a
                href="https://github.com/HaardPatel"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={16} strokeWidth={1.4} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/haard-patel2010/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <span className="footer-linkedin-icon">in</span>
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:haardp9@gmail.com"
                aria-label="Email"
              >
                <Mail size={16} strokeWidth={1.4} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Index */}
          <div className="footer-index">
            <span className="footer-heading">INDEX</span>

            <nav aria-label="Footer navigation">
              {footerLinks.map((link, index) => (
                <a key={link.label} href={link.href}>
                  <span className="footer-link-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{link.label}</span>

                  <span className="footer-link-arrow">↗</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Colophon */}
          <div className="footer-colophon">
            <span className="footer-heading">COLOPHON</span>

            <p>
              Built with <strong>React</strong>, Vite, CSS,
              and a lot of curiosity.
            </p>

            <p>
              Designed to be simple, useful, and a little
              different from the usual developer portfolio.
            </p>

            <div className="footer-stack">
              <span>REACT</span>
              <span>VITE</span>
              <span>CSS</span>
              <span>FRAMER MOTION</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 HAARD PATEL</span>

          <span className="footer-bottom-center">
            BUILT IN SASKATCHEWAN
          </span>

          <a href="#top" className="footer-back-top">
            <span>BACK TO TOP</span>
            <ArrowUp size={14} strokeWidth={1.4} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;