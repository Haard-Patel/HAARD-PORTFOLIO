import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Toolkit from "./components/Toolkit/Toolkit";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";
import ExperiencePage from "./Pages/ExperiencePage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.history.replaceState({}, document.title);
    }
  }, [location]);
  
  return (
    <div id="top">
      <Cursor />

      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* 01 — About */}
        <About />

        {/* 02 — Selected Work */}
        <Projects />

        {/* 03 — Toolkit */}
        <Toolkit />

        {/* 04 — Contact */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
    </Routes>
  );
}

export default App;