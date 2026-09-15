import {
    ArrowUp,
    ArrowUpRight,
    Mail,
    Code2,
  } from "lucide-react";
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
  
          <div className="footer-main">
  
            <div className="footer-identity">
              <div className="footer-name">
                Haard Patel<span>.</span>
              </div>
  
              <p className="footer-location">
                Regina, SK
              </p>
  
              <p className="footer-focus">
                Software · Data · AI
              </p>
            </div>
  
            <div className="footer-socials">
              <span className="footer-label">
                Elsewhere
              </span>
  
              <div className="footer-social-links">
  
                <a
                  href="https://github.com/Hhaard"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Code2
                    size={16}
                    strokeWidth={1.6}
                  />
  
                  <span>GitHub</span>
  
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.6}
                  />
                </a>
  
                <a
                  href="https://www.linkedin.com/in/haard-patel2010"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <span className="footer-social-text-icon">
                    in
                  </span>
  
                  <span>LinkedIn</span>
  
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.6}
                  />
                </a>
  
                <a
                  href="https://www.instagram.com/haard20_?stkn=MWFicm1sc3g1Z2MxZw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <span className="footer-social-text-icon">
                    ig
                  </span>
  
                  <span>Instagram</span>
  
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.6}
                  />
                </a>
  
                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=haardp9@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Send an email to Haard Patel"
>
  <Mail
    size={16}
    strokeWidth={1.6}
  />

  <span>Email</span>

  <ArrowUpRight
    size={12}
    strokeWidth={1.6}
  />
</a>
  
              </div>
            </div>
  
          </div>
  
          <div className="footer-index">
  
            <div className="footer-index-heading">
              <span className="footer-label">
                Index
              </span>
  
              <span className="footer-index-line" />
            </div>
  
            <div className="footer-index-links">
  
              <a href="#projects">
                <span>01</span>
                Work
              </a>
  
              <a href="#skills">
                <span>02</span>
                Skills
              </a>
  
              <a href="#contact">
                <span>03</span>
                Contact
              </a>
  
              <a href="/experience">
                <span>04</span>
                Experience
              </a>
  
            </div>
  
          </div>
  
          <div className="footer-colophon">
  
            <div className="footer-colophon-copy">
              <span className="footer-label">
                Colophon
              </span>
  
              <p>
                Designed &amp; developed by Haard Patel.
                Built with React, Vite and CSS.
              </p>
            </div>
  
            <div className="footer-time">
              <strong>
                Regina, Saskatchewan
              </strong>
            </div>
  
          </div>
  
          <div className="footer-bottom">
  
            <span className="footer-copyright">
              © 2026 HAARD PATEL
            </span>
  
            <a
              href="#top"
              className="footer-back-top"
              onClick={scrollToTop}
            >
              Back to top
  
              <span>
                <ArrowUp
                  size={13}
                  strokeWidth={1.7}
                />
              </span>
            </a>
  
          </div>
  
        </div>
      </footer>
    );
  }
  
  export default Footer;