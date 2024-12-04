import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
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

      // Close the dropdown menu on mobile
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="navbar fixed top-0 z-10 w-screen border-b-4 border-cyan-400 bg-slate-800 px-5 py-3 lg:sticky">
      <nav>
        <div>
          {/* Navbar links */}
          <ul className="hidden gap-20 lg:flex">
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
          <div className="flex justify-end lg:hidden">
            <button
              className="text-white"
              onClick={() => {
                setIsDropdownOpen((prev) => !prev);
              }}
            >
              Hamburger
            </button>
          </div>
        </div>

        {/* Dropdown menu */}
        <ul
          className={`${isDropdownOpen ? "max-h-[50vh]" : ""} flex max-h-0 flex-col items-center gap-5 overflow-hidden transition-all duration-300 ease-linear lg:hidden`}
        >
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
