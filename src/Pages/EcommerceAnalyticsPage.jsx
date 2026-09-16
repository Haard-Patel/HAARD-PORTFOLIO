
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Cursor from "../components/Cursor/Cursor";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import "./EcommerceAnalyticsPage.css";

function EcommerceAnalyticsPage() {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, []);
      
        return (
    <div className="project-detail-page">
      <Cursor />
      <Navbar />

      <main className="project-detail-main">

        {/* Back to Selected Work */}
        <div className="project-detail-container">
        <Link
  to="/"
  state={{ scrollTo: "projects" }}
  className="project-detail-back"
>
  <ArrowLeft size={15} strokeWidth={1.4} />
  <span>Selected Work</span>
</Link>
        </div>

        {/* Hero */}
        <section className="project-detail-hero">
          <div className="project-detail-container">

            <div className="project-detail-meta">
              <span>01 / PROJECT</span>
              <span>2026 — PRESENT</span>
            </div>

            <div className="project-detail-title-area">
              <div>
                <p className="project-detail-eyebrow">
                  Full Stack · Data · AI
                </p>

                <h1>
                  E-Commerce Analytics
                  <br />
                  <span>&amp; Intelligence Platform.</span>
                </h1>
              </div>

              <div className="project-detail-status">
                <span className="project-detail-status-dot" />
                CURRENTLY BUILDING
              </div>
            </div>

            <div className="project-detail-intro">
              <p>
                A full-stack platform turning e-commerce data into
                clear analytics, business intelligence, and
                eventually AI-assisted insights.
              </p>

              <div className="project-detail-creator">
                <span>CREATOR</span>
                <strong>Haard Patel</strong>
                <span>Founder &amp; Creator</span>
              </div>
            </div>

          </div>
        </section>

        {/* Overview */}
        <section className="project-detail-section">
          <div className="project-detail-container">

            <div className="project-detail-section-grid">

              <div className="project-detail-section-label">
                <span>01</span>
                <span>Overview</span>
              </div>

              <div className="project-detail-content">
                <h2>
                  Commerce data,
                  <br />
                  made <span>useful.</span>
                </h2>

                <p>
                  A project exploring how software engineering,
                  analytics, and AI can come together in one
                  modern e-commerce intelligence platform.
                </p>

                <p>
                  The goal is simple: make patterns, trends,
                  and business performance easier to understand.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Direction */}
        <section className="project-detail-section project-detail-section-alt">
          <div className="project-detail-container">

            <div className="project-detail-section-grid">

              <div className="project-detail-section-label">
                <span>02</span>
                <span>Direction</span>
              </div>

              <div className="project-detail-content">

                <h2>
                  From dashboards
                  <br />
                  to <span>intelligence.</span>
                </h2>

                <div className="project-detail-feature-grid">

                  <div className="project-detail-feature">
                    <span>01</span>
                    <h3>Analytics</h3>
                    <p>
                      Sales, products, customers, and performance
                      presented through useful metrics.
                    </p>
                  </div>

                  <div className="project-detail-feature">
                    <span>02</span>
                    <h3>Visualization</h3>
                    <p>
                      Interactive views that make complex data
                      easier to explore.
                    </p>
                  </div>

                  <div className="project-detail-feature">
                    <span>03</span>
                    <h3>AI / ML</h3>
                    <p>
                      Exploring intelligent ways to discover
                      patterns and generate insights.
                    </p>
                  </div>

                  <div className="project-detail-feature">
                    <span>04</span>
                    <h3>Full Stack</h3>
                    <p>
                      A complete application connecting the
                      interface, APIs, backend, and data.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Stack */}
        <section className="project-detail-section">
          <div className="project-detail-container">

            <div className="project-detail-section-grid">

              <div className="project-detail-section-label">
                <span>03</span>
                <span>Stack</span>
              </div>

              <div className="project-detail-content">

                <h2>
                  Built with
                  <br />
                  <span>modern tools.</span>
                </h2>

                <div className="project-detail-stack">
                  <span>REACT</span>
                  <span>NODE.JS</span>
                  <span>EXPRESS</span>
                  <span>MONGODB</span>
                  <span>REST APIs</span>
                  <span>DATA ANALYTICS</span>
                  <span>BI</span>
                  <span>AI / ML</span>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Preview */}
        <section className="project-detail-section project-detail-preview-section">
          <div className="project-detail-container">

            <div className="project-detail-section-grid">

              <div className="project-detail-section-label">
                <span>04</span>
                <span>Preview</span>
              </div>

              <div className="project-detail-content">

                <div className="project-coming-soon">

                  <span>PROJECT IN DEVELOPMENT</span>

                  <h2>
                    Coming
                    <br />
                    <span>soon.</span>
                  </h2>

                  <p>
                    The interface, repository, and live demo
                    will appear here as the project develops.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Project Links */}
        <section className="project-detail-links-section">
          <div className="project-detail-container">

            <div className="project-detail-links">

              <div>
                <span>GITHUB</span>
                <strong>Coming Soon</strong>
              </div>

              <div>
                <span>LIVE DEMO</span>
                <strong>Coming Soon</strong>
              </div>

            </div>

          </div>
        </section>

        {/* Previous / Next */}
        <section className="project-detail-navigation">
          <div className="project-detail-container">

            <div className="project-detail-nav">

              <Link
                to="/projects/nutritracker"
                className="project-detail-nav-link previous"
              >
                <span className="project-detail-nav-label">
                  <ArrowLeft size={14} strokeWidth={1.4} />
                  Previous
                </span>

                <strong>NutriTracker</strong>
              </Link>

              <Link
                to="/projects/it-service-management"
                className="project-detail-nav-link next"
              >
                <span className="project-detail-nav-label">
                  Next
                  <ArrowRight size={14} strokeWidth={1.4} />
                </span>

                <strong>IT Service Management</strong>
              </Link>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default EcommerceAnalyticsPage;
