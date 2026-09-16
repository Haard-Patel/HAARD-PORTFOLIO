import { useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
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

          <Link
            to="/"
            state={{ scrollTo: "top" }}
            className="addons-back"
          >
            <ArrowLeft size={15} strokeWidth={1.4} />
            <span>Back to Home</span>
          </Link>

          <section className="addons-hero">
            <div className="addons-eyebrow">
              <span>06 / ADD-ONS</span>
              <span>2026</span>
            </div>

            <h1>
              Certifications
              <br />
              & Credentials.
            </h1>

            <p>
              Additional certifications and credentials that complement
              my technical background and professional experience.
            </p>
          </section>

          <section className="addons-section">
            <div className="addons-section-heading">
              <span>01</span>
              <h2>Certifications</h2>
            </div>

            <div className="addons-grid">

              <a
                href="#"
                className="addon-card"
                onClick={(event) => event.preventDefault()}
              >
                <div className="addon-card-top">
                  <span className="addon-number">01</span>
                  <ExternalLink
                    size={17}
                    strokeWidth={1.4}
                  />
                </div>

                <div className="addon-card-content">
                  <span className="addon-label">
                    APPLE CERTIFICATION
                  </span>

                  <h3>
                    Apple Certified IT Professional
                  </h3>

                  <p>
                    Professional certification demonstrating
                    foundational IT support and Apple technology
                    knowledge.
                  </p>
                </div>

                <div className="addon-card-footer">
                  <span>ACIT</span>
                  <span>VIEW CREDENTIAL ↗</span>
                </div>
              </a>

            </div>
          </section>

          <section className="addons-note">
            <span>02</span>

            <div>
              <span className="addons-note-label">
                MORE TO COME
              </span>

              <p>
                Additional certifications and professional
                credentials will be added as they are completed.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AddOnsPage;
