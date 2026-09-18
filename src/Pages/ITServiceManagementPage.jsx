import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

import Cursor from "../components/Cursor/Cursor";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import "./ITServiceManagementPage.css";

function ITServiceManagementPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    if (!selectedImage) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="itsm-detail-page">
      <Cursor />
      <Navbar />

      <main className="itsm-detail-main">

        {/* Back to Selected Work */}
        <div className="itsm-detail-container">
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="itsm-detail-back"
          >
            <ArrowLeft size={15} strokeWidth={1.4} />
            <span>Selected Work</span>
          </Link>
        </div>

        {/* Hero */}
        <section className="itsm-detail-hero">
          <div className="itsm-detail-container">

            <div className="itsm-detail-meta">
              <span>02 / PROJECT</span>
              <span>2026</span>
            </div>

            <div className="itsm-detail-title-area">
              <div>
                <p className="itsm-detail-eyebrow">
                  Full Stack · ITSM · Analytics
                </p>

                <h1>
                  IT Service Management
                  <br />
                  <span>&amp; Analytics Platform.</span>
                </h1>
              </div>

              <div className="itsm-detail-status">
                <span className="itsm-detail-status-dot" />
                COMPLETED · LIVE
              </div>
            </div>

            <div className="itsm-detail-intro">
              <p>
                A full-stack enterprise-style IT service management
                platform for managing incidents, users, workflows,
                SLA tracking, and operational support data.
              </p>

              <div className="itsm-detail-creator">
                <span>CREATOR</span>
                <strong>Haard Patel</strong>
                <span>Developer</span>
              </div>
            </div>

          </div>
        </section>

        {/* Overview */}
        <section className="itsm-detail-section">
          <div className="itsm-detail-container">
            <div className="itsm-detail-section-grid">

              <div className="itsm-detail-section-label">
                <span>01</span>
                <span>Overview</span>
              </div>

              <div className="itsm-detail-content">
                <h2>
                  Support operations,
                  <br />
                  made <span>structured.</span>
                </h2>

                <p>
                  Built to model how modern IT support teams
                  manage tickets, users, assignments, priorities,
                  and service workflows in one centralized system.
                </p>

                <p>
                  The platform combines a responsive frontend,
                  REST APIs, database persistence, and operational
                  analytics into one full-stack application.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="itsm-detail-section itsm-detail-section-alt">
          <div className="itsm-detail-container">
            <div className="itsm-detail-section-grid">

              <div className="itsm-detail-section-label">
                <span>02</span>
                <span>Capabilities</span>
              </div>

              <div className="itsm-detail-content">

                <h2>
                  More than
                  <br />
                  <span>ticketing.</span>
                </h2>

                <div className="itsm-detail-feature-grid">

                  <div className="itsm-detail-feature">
                    <span>01</span>
                    <h3>Incident Management</h3>
                    <p>
                      Create, track, update, assign, prioritize,
                      and resolve support tickets, with user-level as well team-level conversations.
                    </p>
                  </div>

                  <div className="itsm-detail-feature">
                    <span>02</span>
                    <h3>User Management</h3>
                    <p>
                      Manage support users, departments, roles,
                      assignments, and account status, with task specifiction as well as data protection.
                    </p>
                  </div>

                  <div className="itsm-detail-feature">
                    <span>03</span>
                    <h3>SLA Tracking</h3>
                    <p>
                      Track response and resolution targets
                      across different ticket priorities.
                    </p>
                  </div>

                  <div className="itsm-detail-feature">
                    <span>04</span>
                    <h3>Operational Analytics</h3>
                    <p>
                      Surface ticket volume, resolution metrics,
                      SLA compliance, and common issue patterns.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Architecture / Stack */}
        <section className="itsm-detail-section">
          <div className="itsm-detail-container">
            <div className="itsm-detail-section-grid">

              <div className="itsm-detail-section-label">
                <span>03</span>
                <span>Stack</span>
              </div>

              <div className="itsm-detail-content">

                <h2>
                  Full stack,
                  <br />
                  <span>end to end.</span>
                </h2>

                <div className="itsm-detail-stack">
                  <span>REACT</span>
                  <span>VITE</span>
                  <span>JAVASCRIPT</span>
                  <span>NODE.JS</span>
                  <span>EXPRESS.JS</span>
                  <span>MONGODB</span>
                  <span>MONGOOSE</span>
                  <span>REST APIs</span>
                  <span>GIT</span>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Project Snapshot */}
        <section className="itsm-detail-section itsm-detail-preview-section">
          <div className="itsm-detail-container">
            <div className="itsm-detail-section-grid">

              <div className="itsm-detail-section-label">
                <span>04</span>
                <span>Snapshot</span>
              </div>

              <div className="itsm-detail-content">

                <div className="itsm-snapshot-grid">

                  {/* FIG 01 */}
                  <figure className="itsm-snapshot-item">
                    <button
                      type="button"
                      className="itsm-snapshot-button"
                      onClick={() =>
                        setSelectedImage({
                          src: "/projects/itsm/fig01.png",
                          alt: "IT Service Management dashboard",
                          label: "Fig. 01",
                        })
                      }
                      aria-label="Open IT Service Management dashboard"
                    >
                      <div className="itsm-snapshot-image">
                        <img
                          src="/projects/itsm/fig01.png"
                          alt="IT Service Management dashboard"
                        />
                      </div>
                    </button>

                    <figcaption>Fig. 01</figcaption>
                  </figure>

                  {/* FIG 02 */}
                  <figure className="itsm-snapshot-item">
                    <button
                      type="button"
                      className="itsm-snapshot-button"
                      onClick={() =>
                        setSelectedImage({
                          src: "/projects/itsm/fig02.png",
                          alt: "IT Service Management ticket interface",
                          label: "Fig. 02",
                        })
                      }
                      aria-label="Open IT Service Management ticket interface"
                    >
                      <div className="itsm-snapshot-image">
                        <img
                          src="/projects/itsm/fig02.png"
                          alt="IT Service Management ticket interface"
                        />
                      </div>
                    </button>

                    <figcaption>Fig. 02</figcaption>
                  </figure>

                  {/* FIG 03 */}
                  <figure className="itsm-snapshot-item">
                    <button
                      type="button"
                      className="itsm-snapshot-button"
                      onClick={() =>
                        setSelectedImage({
                          src: "/projects/itsm/fig03.png",
                          alt: "IT Service Management user interface",
                          label: "Fig. 03",
                        })
                      }
                      aria-label="Open IT Service Management user interface"
                    >
                      <div className="itsm-snapshot-image">
                        <img
                          src="/projects/itsm/fig03.png"
                          alt="IT Service Management user interface"
                        />
                      </div>
                    </button>

                    <figcaption>Fig. 03</figcaption>
                  </figure>

                  {/* FIG 04 */}
                  <figure className="itsm-snapshot-item">
                    <button
                      type="button"
                      className="itsm-snapshot-button"
                      onClick={() =>
                        setSelectedImage({
                          src: "/projects/itsm/fig04.png",
                          alt: "IT Service Management analytics interface",
                          label: "Fig. 04",
                        })
                      }
                      aria-label="Open IT Service Management analytics interface"
                    >
                      <div className="itsm-snapshot-image">
                        <img
                          src="/projects/itsm/fig04.png"
                          alt="IT Service Management analytics interface"
                        />
                      </div>
                    </button>

                    <figcaption>Fig. 04</figcaption>
                  </figure>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Project Links */}
        <section className="itsm-detail-links-section">
          <div className="itsm-detail-container">

            <div className="itsm-detail-links">

              <a
                href="https://github.com/Haard-Patel/it-service-management-platform"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <span>GITHUB</span>
                  <strong>View Repository ↗</strong>
                </div>
              </a>

              <a
                href="https://it-service-management-platform-k8zz.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <span>LIVE DEMO</span>
                  <strong>Open Web App ↗</strong>
                </div>
              </a>

            </div>

          </div>
        </section>

        {/* Previous / Next */}
        <section className="itsm-detail-navigation">
          <div className="itsm-detail-container">

            <div className="itsm-detail-nav">

              <Link
                to="/projects/ecommerce-analytics"
                className="itsm-detail-nav-link previous"
              >
                <span className="itsm-detail-nav-label">
                  <ArrowLeft size={14} strokeWidth={1.4} />
                  Previous
                </span>

                <strong>E-Commerce Analytics</strong>
              </Link>

              <Link
                to="/projects/nutritracker"
                className="itsm-detail-nav-link next"
              >
                <span className="itsm-detail-nav-label">
                  Next
                  <ArrowRight size={14} strokeWidth={1.4} />
                </span>

                <strong>NutriTracker</strong>
              </Link>

            </div>

          </div>
        </section>

      </main>

      <Footer />

      {/* =====================================================
          IMAGE LIGHTBOX
      ===================================================== */}

      {selectedImage && (
        <div
          className="itsm-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedImage(null);
            }
          }}
        >
          <div className="itsm-lightbox-content">

            {/* CLOSE BUTTON — OUTSIDE PHOTO */}
            <button
              type="button"
              className="itsm-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              <X
                size={25}
                strokeWidth={1.4}
              />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
            />

            <span className="itsm-lightbox-caption">
              {selectedImage.label}
            </span>

          </div>
        </div>
      )}

    </div>
  );
}

export default ITServiceManagementPage;

