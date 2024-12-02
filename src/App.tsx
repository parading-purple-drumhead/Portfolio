import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar";

// Sections
import Landing from "./sections/Landing";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import aosOffset from "./utilities/aosOffset";

function App() {
  useEffect(() => {
    AOS.init({
      offset: aosOffset,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div className="app font-body">
      <section id="landing" className="h-screen">
        <Landing />
      </section>

      <Navbar />
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer className="bg-slate-900 py-10 text-center text-white">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
