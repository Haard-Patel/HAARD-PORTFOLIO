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

  const [currentDateTime, setCurrentDateTime] = useState(() => new Date());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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

  const time = currentDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const date = currentDateTime.toLocaleDateString([], {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).toUpperCase();

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-left-spacer">
          <div className="navbar-datetime">
            <span className="navbar-status-dot" />
            <span>{time}</span>
            <span>       /  </span>
            <span>{date}
            </span>
          </div>
        </div>

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