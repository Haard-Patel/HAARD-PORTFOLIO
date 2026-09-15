import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
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
          <div className="footer-identity">
            <div className="footer-name">
              Haard Patel
            </div>

            <div className="footer-meta">
              REGINA, SK
              <span>/</span>
              SOFTWARE · DATA · AI
            </div>

            <div className="footer-socials">
              <a
                href="https://github.com/HaardPatel"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github
                  size={17}
                  strokeWidth={1.35}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/haard-patel2010/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={17}
                  strokeWidth={1.35}
                />
              </a>

              <a
                href="mailto:haardp9@gmail.com"
                aria-label="Email"
              >
                <Mail
                  size={17}
                  strokeWidth={1.35}
                />
              </a>
            </div>
          </div>

          <div className="footer-index">
            <span className="footer-heading">
              INDEX
            </span>

            <nav aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-colophon">
            <span className="footer-heading">
              COLOPHON
            </span>

            <p>
              Built with React, Vite, CSS, and a lot of
              curiosity. Set in Space Grotesk, Instrument
              Sans, JetBrains Mono, and Kalam.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 HAARD PATEL</span>

          <a href="#top">
            BACK TO TOP
            <ArrowUp
              size={12}
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;