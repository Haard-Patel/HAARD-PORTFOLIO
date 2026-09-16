import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Experience from "../components/Experience/Experience";
import Cursor from "../components/Cursor/Cursor";
import Footer from "../components/Footer/Footer";

import "./ExperiencePage.css";

function ExperiencePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div id="top">
      <Cursor />

      <Navbar />

      <main className="experience-page-main">

        <div className="experience-page-back-container">
          <Link
            to="/"
            className="experience-page-back"
          >
            <ArrowLeft size={15} strokeWidth={1.4} />
            <span>Back to Home</span>
          </Link>
        </div>

        <Experience />

      </main>

      <Footer />
    </div>
  );
}

export default ExperiencePage;
