import { useState } from "react";
import { Project } from "../utilities/types";
import ImageModal from "./ImageModal";

const ProjectDetails = ({ project }: { project: Project }) => {
  const [showFullImage, setShowFullImage] = useState<boolean>(false);

  return (
    <div className="project-details">
      <div className="image">
        <img
          src={project.image}
          alt={project.title}
          className="h-96 w-full border-b object-cover"
        />
        {/* Full image button */}
        <div className="flex -translate-y-full justify-end">
          <button
            className="rounded-sm bg-black/30 px-3 py-2 text-white"
            onClick={() => {
              setShowFullImage(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="project-details mb-5 px-5">
        <h3 className="mb-1 text-4xl font-semibold text-gray-700">
          {project.title}
        </h3>
        <h4 className="font-semibold uppercase text-gray-400">
          {project.summary}
        </h4>
        <div className="tags-and-link mt-3 flex items-center justify-between gap-5">
          <div className="tags flex gap-2">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="tag rounded-full border-2 border-pink-500 px-4 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="links flex gap-2">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                className="flex items-center gap-2 rounded-sm border-2 border-pink-500 bg-transparent px-3 py-1 text-pink-500 transition ease-out hover:bg-pink-500 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>

                <span>Website</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 rounded-sm border-2 border-pink-500 bg-transparent px-3 py-1 text-pink-500 transition ease-out hover:bg-pink-500 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>

                <span>Source</span>
              </a>
            )}
          </div>
        </div>

        <hr className="my-5" />
        <p className="mb-5 text-gray-600">{project.description}</p>
      </div>

      <ImageModal
        open={showFullImage}
        children={
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded"
            />
          </div>
        }
        onClose={() => {
          setShowFullImage(false);
        }}
      />
    </div>
  );
};

export default ProjectDetails;
