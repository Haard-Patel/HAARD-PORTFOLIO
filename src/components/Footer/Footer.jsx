import { ArrowUp } from "lucide-react";
import "./Footer.css";

function Footer() {
  const scrollToTop = (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top footer */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-mark">HP</span>
            <span className="footer-brand-text">
              Software · Data · AI
            </span>
          </div>

          <a
            href="#top"
            className="footer-back-top"
            onClick={scrollToTop}
          >
            BACK TO TOP
            <ArrowUp size={13} strokeWidth={1.5} />
          </a>
        </div>

        {/* Index */}
        <div className="footer-index">
          <span className="footer-index-label">INDEX</span>

          <nav className="footer-index-links" aria-label="Footer navigation">
            <a href="#about">
              <span className="footer-index-number">01</span>
              ABOUT
            </a>

            <a href="#projects">
              <span className="footer-index-number">02</span>
              WORK
            </a>

            <a href="#skills">
              <span className="footer-index-number">03</span>
              TOOLKIT
            </a>

            <a href="#contact">
              <span className="footer-index-number">04</span>
              CONTACT
            </a>
          </nav>
        </div>

        {/* Social / contact icons */}
        <div className="footer-social-row">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="footer-social-icon"
            >
              <path
                fill="currentColor"
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
              />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
            aria-label="LinkedIn"
          >
            <span className="footer-linkedin-mark">in</span>
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:your-email@example.com"
            className="footer-social"
            aria-label="Email"
          >
            <span className="footer-email-mark">@</span>
            <span>Email</span>
          </a>

          <a
            href="https://www.instagram.com/haard20_/"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="footer-social-icon"
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
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle
                cx="17.4"
                cy="6.6"
                r="1"
                fill="currentColor"
              />
            </svg>
            <span>Instagram</span>
          </a>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© 2026 HAARD PATEL</span>
          <span>BUILT WITH CURIOSITY</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;