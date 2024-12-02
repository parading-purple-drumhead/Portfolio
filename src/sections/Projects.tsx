import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import ProjectDetails from "../components/ProjectDetails";
import { Project } from "../utilities/types";
import pictoVerse from "../assets/projects/pictoverse.jpg";
import vrChristmas from "../assets/projects/vr_christmas.jpg";
import vrStore from "../assets/projects/vr_store.jpg";
import arKnickknacks from "../assets/projects/ar_knickknacks.jpg";
import validate from "../assets/projects/validate.png";
import sbag from "../assets/projects/sbag.png";
import whatsCooking from "../assets/projects/whats_cooking.png";
import everythingPets from "../assets/projects/everything_pets.png";
import flamestream from "../assets/projects/flamestream.png";
import vinylz from "../assets/projects/vinylz.png";
import SectionTitle from "../components/SectionTitle";

const projects: Project[] = [
  {
    id: "flamestream",
    title: "FlameStream",
    category: "Web",
    image: flamestream,
    tags: ["Web", "UI/UX", "React"],
    description:
      "A UI for a music streaming service with a track list and similar album recommendations",
    summary: "Music streaming service UI",
    website: "https://flamestream.netlify.app/",
    github: "https://github.com/parading-purple-drumhead/FlameStream",
  },
  {
    id: "vinylz",
    title: "Vinylz",
    category: "Web",
    image: vinylz,
    tags: ["Web", "UI/UX", "React"],
    description:
      "A UI for a vinyl record pressing and distribution service, showcasing their services and contact information",
    summary: "Vinyl record service UI",
    website: "https://vinylz.netlify.app/",
    github: "https://github.com/parading-purple-drumhead/Vinylz",
  },
  {
    id: "sbag",
    title: "SBAG LLP & Co.",
    category: "Web",
    image: sbag,
    tags: ["Web", "React", "TypeScript"],
    description:
      "A website for an accounting firm, showcasing their services, team, and contact information",
    summary: "Accounting firm website",
    website: "https://sbagllp.com/",
  },
  {
    id: "whats_cooking",
    title: "What's Cooking",
    category: "Mobile",
    image: whatsCooking,
    tags: ["Mobile", "Flutter", "Firebase"],
    description:
      "A platform for users to find and share recipes as a community. The app offers users the ability to search for community recipes based on the ingredients that they have",
    summary: "Recipe sharing mobile app",
    github: "https://github.com/parading-purple-drumhead/whatsCooking",
  },
  {
    id: "pictoverse",
    title: "PictoVerse Puzzle",
    category: "Web",
    image: pictoVerse,
    tags: ["Web", "React", "TypeScript"],
    description:
      "A multiplayer turn-based game website that is based on emoji-based phrase guessing. In this game, one player is given a phrase, and they must select emojis to depict the phrase. Other players then try to guess the phrase based on the emojis chosen",
    summary: "Browser-based emoji guessing game",
    website: "https://pictoverse-puzzle.netlify.app/",
    github: "https://github.com/parading-purple-drumhead/pictoverse-puzzle",
  },
  {
    id: "vr_christmas",
    title: "VR Christmas Atrium",
    category: "AR/VR",
    image: vrChristmas,
    tags: ["Unity", "VRTK4", "Virtual Reality"],
    description:
      "An immersive Virtual Reality scene on a building scale, with a Christmas theme. Meant to be viewed through the Oculus Quest 2 VR headset.",
    summary: "Room-scale VR experience",
    website: "https://sudhanshu-vr-portfolio.netlify.app/project3.html",
    github: "https://github.com/parading-purple-drumhead/VR-Christmas-Atrium",
  },
  {
    id: "everything_pets",
    title: "Everything Pets",
    category: "Web",
    image: everythingPets,
    tags: ["Web", "UI/UX", "JavaScript"],
    description:
      "(UI/UX Case Study) A website that provides information about pet stores, vets, and pet-friendly places in a city. The website also offers a reminder service for pet vaccinations and appointments",
    summary: "Room-scale VR experience",
    website:
      "https://parading-purple-drumhead.github.io/Everything-Pets/index.html",
    github: "https://github.com/parading-purple-drumhead/Everything-Pets",
  },
  {
    id: "vr_store",
    title: "VR Convenience Store",
    category: "AR/VR",
    image: vrStore,
    tags: ["Unity", "VRTK4", "Virtual Reality"],
    description:
      "A Virtual Reality scene featuring a convenience store kiosk offering interactive packaged food and stationery items",
    summary: "Interactive VR store experience",
    website: "https://sudhanshu-vr-portfolio.netlify.app/project2.html",
    github:
      "https://github.com/parading-purple-drumhead/VR-Convenience-Store-Kiosk",
  },
  {
    id: "ar_knickknacks",
    title: "AR Knickknacks",
    category: "AR/VR",
    image: arKnickknacks,
    tags: ["Unity", "Vuforia", "Augmented Reality"],
    description:
      "An augmented reality mobile application showcasing marker based AR knickknacks on 3D objects",
    summary: "Augmented Reality mobile app",
    website: "https://sudhanshu-vr-portfolio.netlify.app/project1.html",
    github: "https://github.com/parading-purple-drumhead/AR-Knickknacks",
  },
  {
    id: "validate",
    title: "Validate",
    category: "Web",
    image: validate,
    tags: ["React", "Firebase", "FastAPI"],
    description:
      "A website that empowers users to verify information via crowdsourcing, leveraging an online community to fact-check various claims, categorizing them by topics for easy navigation",
    summary: "Crowdsourced fact-checking platform",
    github: "https://github.com/parading-purple-drumhead/validate-frontend",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string>("All");
  const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProjectId) {
      setSelectedProject(
        projects.find((project) => project.id === selectedProjectId) || null,
      );
    }
  }, [selectedProjectId]);

  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.category === filter,
  );

  return (
    <div className="min-h-screen bg-gray-100 px-40 py-20">
      <SectionTitle title="Projects" />

      {/* Filter Buttons */}
      <div className="project-filter-container" data-aos="fade-up">
        <button
          className={`project-filter ${filter == "All" ? "selected" : ""}`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`project-filter ${filter == "AR/VR" ? "selected" : ""}`}
          onClick={() => setFilter("AR/VR")}
        >
          AR/VR
        </button>
        <button
          className={`project-filter ${filter == "Web" ? "selected" : ""}`}
          onClick={() => setFilter("Web")}
        >
          Web
        </button>
        <button
          className={`project-filter ${filter == "Mobile" ? "selected" : ""}`}
          onClick={() => setFilter("Mobile")}
        >
          Mobile
        </button>
      </div>

      {/* Project Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => {
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="group relative h-80 bg-white"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 bg-black/70 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="project-info -translate-y-10 transform text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                    <h3 className="mb-3 text-center text-2xl font-semibold">
                      {project.title}
                    </h3>
                    <div className="tags flex gap-2">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border-2 border-pink-500 px-3 py-1 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    className="translate-y-10 transform rounded-sm bg-pink-500 px-4 py-2 text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                    onClick={() => {
                      setSelectedProjectId(project.id);
                      setShowProjectModal(true);
                    }}
                  >
                    View Details
                  </button>
                </div>

                {/* Main card */}
                <div
                  className="flex h-full items-end"
                  style={{
                    background: `url(${project.image}) center center/cover`,
                  }}
                ></div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <Modal
        open={showProjectModal}
        children={
          selectedProject && <ProjectDetails project={selectedProject} />
        }
        onClose={() => setShowProjectModal(false)}
      />
    </div>
  );
};

export default Projects;
