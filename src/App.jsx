import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Toolkit from "./components/Toolkit/Toolkit";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";

import ExperiencePage from "./Pages/ExperiencePage";
import EcommerceAnalyticsPage from "./Pages/EcommerceAnalyticsPage";
import ITServiceManagementPage from "./Pages/ITServiceManagementPage";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      window.history.replaceState({}, document.title);
      return;
    }

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
        <Hero />
        <About />
        <Projects />
        <Toolkit />
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

      <Route
        path="/experience"
        element={<ExperiencePage />}
      />

      <Route
        path="/projects/ecommerce-analytics"
        element={<EcommerceAnalyticsPage />}
      />

      <Route
        path="/projects/it-service-management"
        element={<ITServiceManagementPage />}
      />
    </Routes>
  );
}

export default App;