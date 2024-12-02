import { useEffect, useState } from "react";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState<string>("");

  useEffect(() => {
    // Retrieve the current section from localStorage when the component mounts
    const savedSection = localStorage.getItem("currentSection");
    if (savedSection) {
      setCurrentSection(savedSection);
    }

    const handleScroll = () => {
      const sections = ["landing", "about", "projects", "contact"];
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            current = section;
            break;
          }
        }
      }
      if (current && current !== currentSection) {
        setCurrentSection(current);
        localStorage.setItem("currentSection", current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Save the current section to localStorage
      localStorage.setItem("currentSection", id);
      setCurrentSection(id);
    }
  };

  return (
    <div className="navbar navbar sticky top-0 z-10 border-b-4 border-cyan-400 bg-slate-800 px-40 py-3">
      <nav>
        <ul className="flex gap-20">
          <li
            className={`nav-link ${currentSection === "landing" ? "active" : ""}`}
            onClick={() => scrollTo("landing")}
          >
            Home
          </li>
          <li
            className={`nav-link ${currentSection === "about" ? "active" : ""}`}
            onClick={() => scrollTo("about")}
          >
            About
          </li>
          <li
            className={`nav-link ${currentSection === "projects" ? "active" : ""}`}
            onClick={() => scrollTo("projects")}
          >
            Projects
          </li>
          <li
            className={`nav-link ${currentSection === "contact" ? "active" : ""}`}
            onClick={() => scrollTo("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
