import { ArrowUp } from "lucide-react";
import "./Footer.css";

const footerLinks = [
  {
    number: "01",
    label: "About",
    href: "#about",
  },
  {
    number: "02",
    label: "Work",
    href: "#projects",
  },
  {
    number: "03",
    label: "Toolkit",
    href: "#skills",
  },
  {
    number: "04",
    label: "Experience",
    href: "/experience",
  },
  {
    number: "05",
    label: "Contact",
    href: "#contact",
  },
];

function GithubMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="footer-brand-icon"
    >
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6-.01c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"
      />
    </svg>
  );
}

function InstagramMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="footer-brand-icon"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="17.4"
        cy="6.7"
        r="1.1"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedinMark() {
  return (
    <span
      className="footer-linkedin-mark"
      aria-hidden="true"
    >
      in
    </span>
  );
}

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
                <GithubMark />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/haard-patel2010/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinMark />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:haardp9@gmail.com"
                aria-label="Email"
              >
                <span className="footer-email-mark">
                  @
                </span>
                <span>Email</span>
              </a>

              {/* Add your real Instagram URL here */}
              <a
                href="#contact"
                aria-label="Instagram"
              >
                <InstagramMark />
                <span>Instagram</span>
              </a>

            </div>

          </div>

          {/* Index */}
          <div className="footer-index">

            <span className="footer-heading">
              INDEX
            </span>

            <nav aria-label="Footer navigation">

              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                >
                  <span className="footer-link-number">
                    {link.number}
                  </span>

                  <span className="footer-link-name">
                    {link.label}
                  </span>

                  <span className="footer-link-arrow">
                    ↗
                  </span>
                </a>
              ))}

            </nav>

          </div>

          {/* Colophon */}
          <div className="footer-colophon">

            <span className="footer-heading">
              COLOPHON
            </span>

            <p>
              Built with <strong>React</strong>, Vite,
              CSS, and a lot of curiosity.
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

        {/* End note */}
        <div className="footer-end-note">

          <div className="footer-end-line" />

          <div className="footer-end-content">

            <div className="footer-end-copy">

              <p className="footer-end-primary">
                End of page. Not the end of{" "}
                <span>work.</span>
              </p>

              <p className="footer-end-secondary">
                <span>More ideas.</span>{" "}
                <span>More experiments.</span>{" "}
                <strong>More to come.</strong>
              </p>

            </div>

            <span className="footer-end-index">
              04 / END
            </span>

          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <span>
            © 2026 HAARD PATEL
          </span>

          <span className="footer-bottom-center">
            BUILT IN SASKATCHEWAN
          </span>

          <a
            href="#top"
            className="footer-back-top"
          >
            <strong>BACK TO TOP</strong>

            <ArrowUp
              size={15}
              strokeWidth={1.4}
            />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;