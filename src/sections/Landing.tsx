// import { useState } from "react";

// const Landing = () => {
//   const [buttonHovered, setButtonHovered] = useState<boolean>(false);

//   const scrollTo = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="flex h-full flex-col items-center justify-center gap-10 text-white">
//       <div>
//         <h1 className="text-2xl md:text-4xl lg:text-5xl">
//           Hello, I'm <span className="font-semibold">Sudhanshu Basuroy</span>.
//         </h1>
//         <h1 className="text-2xl md:text-4xl lg:text-5xl">
//           <span className="name text-white">
//             I'm a{" "}
//             {Array.from("full-stack web developer.").map((char, index) => (
//               <span
//                 key={index}
//                 style={{
//                   animation: `typing 0.1s steps(1) ${index * 0.1}s forwards`,
//                 }}
//                 className="opacity-0"
//               >
//                 {char}
//               </span>
//             ))}
//           </span>
//         </h1>
//       </div>

//       <span
//         className="cursor-pointer rounded-sm border-2 border-white bg-transparent px-4 py-2 text-lg text-white transition duration-500 ease-out hover:border-gray-700 hover:bg-gray-700 sm:text-2xl"
//         onMouseEnter={() => setButtonHovered(true)}
//         onMouseLeave={() => setButtonHovered(false)}
//         onClick={() => scrollTo("about")}
//       >
//         More about me
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={2}
//           stroke="currentColor"
//           className={`ms-3 inline-block w-6 transition duration-500 ease-out ${
//             buttonHovered ? "rotate-90" : ""
//           }`}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
//           />
//         </svg>
//       </span>
//     </div>
//   );
// };

// export default Landing;

import { useState, useEffect } from "react";

const texts = [
  "full-stack web developer.",
  "UI/UX designer.",
  "VR/AR developer.",
];

const Landing = () => {
  const [buttonHovered, setButtonHovered] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping && index < texts[currentTextIndex].length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[currentTextIndex][index]);
        setIndex((prev) => prev + 1);
      }, 80);
    } else if (!isTyping && index > 0) {
      // Backspacing effect
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, 20);
    } else if (isTyping && index === texts[currentTextIndex].length) {
      // Typing complete, start backspacing after a delay
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 1500);
    } else if (!isTyping && index === 0) {
      // Backspacing complete, start typing the next text
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      setIsTyping(true);
    }

    return () => clearTimeout(timeout);
  }, [index, isTyping, currentTextIndex]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-10 text-white">
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl">
          Hello, I'm <span className="font-semibold">Sudhanshu Basuroy</span>.
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl">
          <span className="name text-white">I'm a {displayText}</span>
        </h1>
      </div>

      <span
        className="cursor-pointer rounded-sm border-2 border-white bg-transparent px-4 py-2 text-lg text-white transition duration-500 ease-out hover:border-gray-700 hover:bg-gray-700 sm:text-2xl"
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        onClick={() => scrollTo("about")}
      >
        More about me
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`ms-3 inline-block w-6 transition duration-500 ease-out ${
            buttonHovered ? "rotate-90" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
    </div>
  );
};

export default Landing;
