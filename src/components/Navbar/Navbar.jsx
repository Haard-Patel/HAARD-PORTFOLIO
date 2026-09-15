import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [currentDateTime, setCurrentDateTime] = useState(() => new Date());

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );

    localStorage.setItem(
      "portfolio-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  useEffect(() => {
    const updateClock = () => {
      setCurrentDateTime(new Date());
    };

    updateClock();

    const interval = window.setInterval(updateClock, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("nav-menu-open");
    } else {
      document.body.classList.remove("nav-menu-open");
    }

    return () => {
      document.body.classList.remove("nav-menu-open");
    };
  }, [isMenuOpen]);

  const time = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(currentDateTime);

  const date = new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(currentDateTime)
    .toUpperCase();

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          {/* Left: Local Time + Date */}
          <div className="navbar-datetime" aria-label="Current local date and time">
            <span className="navbar-status-dot" aria-hidden="true" />

            <time className="navbar-time">
              {time}
            </time>

            <span className="navbar-date-separator" aria-hidden="true">
              /
            </span>

            <time className="navbar-date">
              {date}
            </time>
          </div>

          {/* Center / Desktop Navigation */}
          <nav className="navbar-links" aria-label="Primary navigation">
            <a href="/#about">About</a>
            <a href="/#projects">Work</a>
            <a href="/#skills">Toolkit</a>
            <a href="/#contact">Contact</a>
            <a href="/experience">Experience</a>
          </nav>

          {/* Right: Brand + Theme + Mobile Menu */}
          <div className="navbar-right">
            <a
              href="/#top"
              className="navbar-brand"
              aria-label="Haard Patel — Home"
            >
              HP<span>©26</span>
            </a>

            <button
              type="button"
              className="navbar-theme-toggle"
              onClick={toggleTheme}
              aria-label={
                isDark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={
                isDark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {isDark ? (
                <Sun size={17} strokeWidth={1.6} />
              ) : (
                <Moon size={17} strokeWidth={1.6} />
              )}
            </button>

            <button
              type="button"
              className="navbar-menu-toggle"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={21} strokeWidth={1.6} />
              ) : (
                <Menu size={21} strokeWidth={1.6} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`navbar-mobile-menu ${
          isMenuOpen ? "is-open" : ""
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          <a
            href="/#about"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span>01</span>
            About
          </a>

          <a
            href="/#projects"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span>02</span>
            Work
          </a>

          <a
            href="/#skills"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span>03</span>
            Toolkit
          </a>

          <a
            href="/#contact"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span>04</span>
            Contact
          </a>

          <a
            href="/experience"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span>05</span>
            Experience
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;