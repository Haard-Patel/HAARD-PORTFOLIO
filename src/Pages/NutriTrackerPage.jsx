import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

import Cursor from "../components/Cursor/Cursor";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import "./NutriTrackerPage.css";

const screenshots = [
  {
    src: "/projects/nutritracker/fig01.png",
    alt: "NutriTracker dashboard",
    label: "Fig. 01",
  },
  {
    src: "/projects/nutritracker/fig02.png",
    alt: "NutriTracker nutrition tracking interface",
    label: "Fig. 02",
  },
  {
    src: "/projects/nutritracker/fig03.png",
    alt: "NutriTracker meal planning interface",
    label: "Fig. 03",
  },
  {
    src: "/projects/nutritracker/fig04.png",
    alt: "NutriTracker AI assistant interface",
    label: "Fig. 04",
  },
];

function NutriTrackerPage() {
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

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="nutritracker-detail-page">
      <Cursor />
      <Navbar />

      <main className="nutritracker-detail-main">

        {/* Back to Selected Work */}
        <div className="nutritracker-detail-container">
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="nutritracker-detail-back"
          >
            <ArrowLeft size={15} strokeWidth={1.4} />
            <span>Selected Work</span>
          </Link>
        </div>

        {/* Hero */}
        <section className="nutritracker-detail-hero">
          <div className="nutritracker-detail-container">

            <div className="nutritracker-detail-meta">
              <span>03 / PROJECT</span>
              <span>2025</span>
            </div>

            <div className="nutritracker-detail-title-area">
              <div>
                <p className="nutritracker-detail-eyebrow">
                  Full Stack · AI · Nutrition
                </p>

                <h1>
                  NutriTracker
                  <br />
                  <span>AI-Assisted Nutrition Platform.</span>
                </h1>
              </div>

              <div className="nutritracker-detail-status">
                <span className="nutritracker-detail-status-dot" />
                COMPLETED
              </div>
            </div>

            <div className="nutritracker-detail-intro">
              <p>
                A full-stack nutrition and wellness platform combining
                meal tracking, personalized planning, reminders, and
                an AI-powered assistant into one application.
              </p>

              <div className="nutritracker-detail-creator">
                <span>CREATOR</span>
                <strong>Haard Patel</strong>
                <span>Developer</span>
              </div>
            </div>

          </div>
        </section>

        {/* Overview */}
        <section className="nutritracker-detail-section">
          <div className="nutritracker-detail-container">
            <div className="nutritracker-detail-section-grid">

              <div className="nutritracker-detail-section-label">
                <span>01</span>
                <span>Overview</span>
              </div>

              <div className="nutritracker-detail-content">

                <h2>
                  Nutrition,
                  <br />
                  made <span>smarter.</span>
                </h2>

                <p>
                  NutriTracker was developed as a university software
                  engineering project focused on helping users manage
                  nutrition and wellness information through a centralized
                  digital platform.
                </p>

                <p>
                  The application combines meal tracking, calorie
                  monitoring, reminders, personalized meal planning,
                  and an AI-powered assistant within a responsive
                  full-stack application.
                </p>

              </div>

            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="nutritracker-detail-section nutritracker-detail-section-alt">
          <div className="nutritracker-detail-container">

            <div className="nutritracker-detail-section-grid">

              <div className="nutritracker-detail-section-label">
                <span>02</span>
                <span>Capabilities</span>
              </div>

              <div className="nutritracker-detail-content">

                <h2>
                  More than
                  <br />
                  <span>tracking.</span>
                </h2>

                <div className="nutritracker-detail-feature-grid">

                  <div className="nutritracker-detail-feature">
                    <span>01</span>
                    <h3>Meal Tracking</h3>
                    <p>
                      Track meals, calories, foods, and nutrition
                      information through a centralized interface.
                    </p>
                  </div>

                  <div className="nutritracker-detail-feature">
                    <span>02</span>
                    <h3>AI Assistant</h3>
                    <p>
                      An AI-powered assistant designed to provide
                      nutrition-related interaction and guidance.
                    </p>
                  </div>

                  <div className="nutritracker-detail-feature">
                    <span>03</span>
                    <h3>Smart Planning</h3>
                    <p>
                      Create personalized meal plans and organize
                      nutrition goals around individual preferences.
                    </p>
                  </div>

                  <div className="nutritracker-detail-feature">
                    <span>04</span>
                    <h3>Reminders</h3>
                    <p>
                      Automated reminders help users stay consistent
                      with their planned nutrition activities.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Stack */}
        <section className="nutritracker-detail-section">
          <div className="nutritracker-detail-container">

            <div className="nutritracker-detail-section-grid">

              <div className="nutritracker-detail-section-label">
                <span>03</span>
                <span>Stack</span>
              </div>

              <div className="nutritracker-detail-content">

                <h2>
                  Full stack,
                  <br />
                  <span>with AI.</span>
                </h2>

                <div className="nutritracker-detail-stack">
                  <span>REACT</span>
                  <span>JAVASCRIPT</span>
                  <span>EXPRESS.JS</span>
                  <span>MONGODB</span>
                  <span>FLASK</span>
                  <span>TENSORFLOW</span>
                  <span>TWILIO</span>
                  <span>DOCKER</span>
                  <span>GITLAB CI/CD</span>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Project Snapshot */}
        <section className="nutritracker-detail-section nutritracker-detail-preview-section">
          <div className="nutritracker-detail-container">

            <div className="nutritracker-detail-section-grid">

              <div className="nutritracker-detail-section-label">
                <span>04</span>
                <span>Snapshot</span>
              </div>

              <div className="nutritracker-detail-content">

                <div className="nutritracker-snapshot-grid">

                  {screenshots.map((image) => (
                    <figure
                      className="nutritracker-snapshot-item"
                      key={image.label}
                    >
                      <button
                        type="button"
                        className="nutritracker-snapshot-button"
                        onClick={() => openImage(image)}
                        aria-label={`Open ${image.alt}`}
                      >
                        <div className="nutritracker-snapshot-image">
                          <img
                            src={image.src}
                            alt={image.alt}
                          />
                        </div>
                      </button>

                      <figcaption>
                        {image.label}
                      </figcaption>
                    </figure>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </section>

{/* Project Links */}
<section className="nutritracker-detail-links-section">
  <div className="nutritracker-detail-container">
    <div className="nutritracker-detail-links">
      <a
        href="https://drive.google.com/file/d/18GCkzgmugOWIGWzA-EJCYOhHlCrEWNNp/view?usp=drivesdk"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <span>DEMO VIDEO</span>
          <strong>Watch Project Demo ↗</strong>
        </div>
      </a>
    </div>
  </div>
</section>

        {/* Previous / Next */}
        <section className="nutritracker-detail-navigation">
          <div className="nutritracker-detail-container">

            <div className="nutritracker-detail-nav">

              <Link
                to="/projects/it-service-management"
                className="nutritracker-detail-nav-link previous"
              >
                <span className="nutritracker-detail-nav-label">
                  <ArrowLeft
                    size={14}
                    strokeWidth={1.4}
                  />
                  Previous
                </span>

                <strong>
                  IT Service Management
                </strong>
              </Link>

              <Link
                to="/projects/ecommerce-analytics"
                className="nutritracker-detail-nav-link next"
              >
                <span className="nutritracker-detail-nav-label">
                  Next
                  <ArrowRight
                    size={14}
                    strokeWidth={1.4}
                  />
                </span>

                <strong>
                  E-Commerce Analytics
                </strong>
              </Link>

            </div>

          </div>
        </section>

      </main>

      <Footer />

{/* Image Lightbox */}
{selectedImage && (
  <div
    className="nutritracker-lightbox"
    role="dialog"
    aria-modal="true"
    aria-label="Image preview"
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) {
        closeImage();
      }
    }}
  >
    <div className="nutritracker-lightbox-content">
      <button
        type="button"
        className="nutritracker-lightbox-close"
        onClick={closeImage}
        aria-label="Close image preview"
      >
        <X size={25} strokeWidth={1.4} />
      </button>

      <img
        src={selectedImage.src}
        alt={selectedImage.alt}
      />

      <span className="nutritracker-lightbox-caption">
        {selectedImage.label}
      </span>
    </div>
  </div>
)}
    </div>
  );
}

export default NutriTrackerPage;