import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();

  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  const [currentDateTime, setCurrentDateTime] = useState(
    () => new Date()
  );

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

  /* =========================================================
     LOGO
  ========================================================= */

  const handleLogoClick = (event) => {
    event.preventDefault();

    closeMenu();

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/", {
      state: {
        scrollToTop: true,
      },
    });
  };

  /* =========================================================
     HOMEPAGE SECTION NAVIGATION
  ========================================================= */

  const handleSectionNavigation = (event, sectionId) => {
    event.preventDefault();

    closeMenu();

    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate("/", {
      state: {
        scrollTo: sectionId,
      },
    });
  };

  const time = currentDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const date = currentDateTime
    .toLocaleDateString([], {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-left-spacer">
          <div className="navbar-datetime">
            <span className="navbar-status-dot" />

            <span>{time}</span>

            <span> / </span>

            <span>{date}</span>
          </div>
        </div>

        <a
          href="/"
          className="navbar-logo"
          onClick={handleLogoClick}
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

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      {menuOpen && (
        <nav
          className="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {/* 01 — ABOUT */}
          <Link
            to="/"
            onClick={(event) =>
              handleSectionNavigation(event, "about")
            }
          >
            <span>01</span>
            <span>About</span>
          </Link>

          {/* 02 — SKILLS */}
          <Link
            to="/"
            onClick={(event) =>
              handleSectionNavigation(event, "skills")
            }
          >
            <span>02</span>
            <span>Toolkit</span>
          </Link>

          {/* 03 — WORK */}
          <Link
            to="/"
            onClick={(event) =>
              handleSectionNavigation(event, "projects")
            }
          >
            <span>03</span>
            <span>Project Work</span>
          </Link>

          {/* 04 — EXPERIENCE */}
          <Link
            to="/experience"
            onClick={closeMenu}
          >
            <span>04</span>
            <span>Experience</span>
          </Link>

          {/* 05 — CONTACT */}
          <Link
            to="/"
            onClick={(event) =>
              handleSectionNavigation(event, "contact")
            }
          >
            <span>05</span>
            <span>Contact</span>
          </Link>

          {/* 06 — ADD-ONS */}
          <Link
            to="/Add-ons"
            onClick={closeMenu}
          >
            <span>06</span>
            <span>Add-ons</span>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;