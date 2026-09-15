import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import "./Navbar.css";

function getInitialTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  // Live date and time
  const [currentDateTime, setCurrentDateTime] = useState(
    () => new Date()
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Update the clock every second.
  // The browser automatically uses the visitor's local timezone.
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
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToTop = (event) => {
    event.preventDefault();

    closeMenu();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <div className="navbar-top">

        {/* Live local time and date */}
        <div
          className="navbar-datetime"
          aria-label={`Local time ${time}, ${date}`}
        >
          <span
            className="navbar-status-dot"
            aria-hidden="true"
          />

          <time className="navbar-time">
            {time}
          </time>

          <span
            className="navbar-date-separator"
            aria-hidden="true"
          >
            /
          </span>

          <time className="navbar-date">
            {date}
          </time>
        </div>

        {/* Existing HP logo — unchanged */}
        <a
          href="#top"
          className="navbar-logo"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span className="hp-mark">
            <span className="hp-h">H</span>
            <span className="hp-p">P</span>

            <span className="hp-year">
              <span>©</span>
              <span>26</span>
            </span>
          </span>
        </a>

        {/* Existing theme + mobile menu controls */}
        <div className="navbar-meta">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } mode`}
          >
            {theme === "dark" ? (
              <Sun size={15} />
            ) : (
              <Moon size={15} />
            )}
          </button>

          <button
            className="mobile-menu-button"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-navigation">
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#projects" onClick={closeMenu}>
            Work
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a href="/experience" onClick={closeMenu}>
            Experience
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;