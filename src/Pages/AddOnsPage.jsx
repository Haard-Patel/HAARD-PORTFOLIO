import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Navbar from "../components/Navbar/Navbar";
import Cursor from "../components/Cursor/Cursor";
import Footer from "../components/Footer/Footer";

import "./AddOnsPage.css";

function AddOnsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="addons-page">
      <Cursor />
      <Navbar />

      <main className="addons-main">
        <div className="addons-container">

          {/* BACK TO HOME */}
          <Link
            to="/"
            className="addons-back"
          >
            <ArrowLeft size={15} strokeWidth={1.4} />
            <span>Back to Home</span>
          </Link>

          {/* HERO */}
          <section className="addons-hero">
            <div className="addons-eyebrow">
              <span>06 / ADD-ONS</span>
              <span>2026</span>
            </div>

            <h1>
              Certifications
              <br />
              &amp; Credentials.
            </h1>

            <p>
              Professional certifications and ongoing learning that
              complement my technical background and continue to expand
              my knowledge across technology, IT, business, and support.
            </p>
          </section>

          {/* CERTIFICATIONS */}
          <section className="addons-section">
            <div className="certification-list">

              {/* 01 */}
              <article className="certification-item">
                <div className="certification-number">
                  01
                </div>

                <div className="certification-content">
                  <h2>ITIL</h2>

                  <span className="certification-status">
                    COMPLETED · UDEMY
                  </span>

                  <p>
                    IT service management fundamentals covering
                    service management concepts, processes, and
                    IT service delivery practices.
                  </p>
                </div>
              </article>

              {/* 02 */}
              <article className="certification-item">
                <div className="certification-number">
                  02
                </div>

                <div className="certification-content">
                  <h2>Digital Marketing</h2>

                  <span className="certification-status">
                    COMPLETED · GOOGLE
                  </span>

                  <p>
                    Digital marketing fundamentals covering online
                    marketing concepts, digital channels, and
                    strategies for reaching and engaging audiences.
                  </p>
                </div>
              </article>

              {/* 03 */}
              <article className="certification-item">
                <div className="certification-number">
                  03
                </div>

                <div className="certification-content">
                  <h2>Apple Certified IT Professional</h2>

                  <span className="certification-status">
                    CURRENTLY DOING · APPLE · ACIT
                  </span>

                  <p>
                    Currently completing Apple’s IT professional
                    certification focused on technical support,
                    troubleshooting, and Apple technology.
                  </p>
                </div>
              </article>

              {/* 04 */}
              <article className="certification-item">
                <div className="certification-number">
                  04
                </div>

                <div className="certification-content">
                  <h2>CompTIA A+</h2>

                  <span className="certification-status">
                    CURRENTLY DOING · COMPTIA
                  </span>

                  <p>
                    Currently working toward the CompTIA A+
                    certification to strengthen foundational
                    IT support, hardware, software, and
                    troubleshooting knowledge.
                  </p>
                </div>
              </article>

              {/* 05 */}
              <article className="certification-item">
                <div className="certification-number">
                  05
                </div>

                <div className="certification-content">
                  <h2>Technical Support</h2>

                  <span className="certification-status">
                    IN THE QUEUE · GOOGLE · COURSERA
                  </span>

                  <p>
                    Planned certification focused on technical
                    support fundamentals, troubleshooting, and
                    IT support practices.
                  </p>
                </div>
              </article>

              {/* 06 */}
              <article className="certification-item">
                <div className="certification-number">
                  06
                </div>

                <div className="certification-content">
                  <h2>ECBA</h2>

                  <span className="certification-status">
                    IN THE QUEUE · IIBA
                  </span>

                  <p>
                    Planned entry-level certification focused on
                    business analysis fundamentals, requirements,
                    stakeholders, and business analysis practices.
                  </p>
                </div>
              </article>

            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AddOnsPage;
