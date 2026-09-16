import Navbar from "../components/Navbar/Navbar";
import Experience from "../components/Experience/Experience";
import Cursor from "../components/Cursor/Cursor";
import Footer from "../components/Footer/Footer";

function ExperiencePage() {
  return (
    <div id="top">
      <Cursor />

      <Navbar />

      <Experience />

      <Footer />
    </div>
  );
}

export default ExperiencePage;