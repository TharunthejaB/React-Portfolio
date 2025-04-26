import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Widgets from "./Widgets";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import { BrowserRouter, Routes } from "react-router-dom";
import Loader from "./Loader";

function App() {
  const skills = [
    {
      text: "Development",
      color: "#D36060",
      img: [
        "/assets/react.svg",
        "/assets/js.svg",
        "/assets/tailwind.svg",
        "/assets/html.svg",
      ],
    },
    {
      text: "Design",
      color: "#42C096",
      img: [
        "/assets/figma.svg",
        "/assets/illustrator.svg",
        "/assets/photoshop.svg",
        "/assets/canva.svg",
      ],
    },
    {
      text: "Video Editing",
      color: "#767BFE",
      img: [
        "/assets/After Effects.svg",
        "/assets/Premiere.svg",
        "/assets/Capcut.svg",
      ],
    },
  ];
  const projects = [
    {
      category: "Development",
      title: "Ping Pong Game",
      info: ["Html, CSS, JS", "Development"],
      content:
        "Built a responsive, interactive multiplayer Ping Pong game using HTML, Sass, and JavaScript. Players can customize names and paddle colors, showcasing my front-end, UI/UX, and real-time development skills.",
      tilecolor: "#4FC977",
      buttoncolor: "#359254",
      subbuttoncolor: "rgba(51, 146, 84, 0.5)",
      img: "/assets/Homepage.png",
      link: "https://tharunthejab.github.io/Ping-Pong-Game/",
    },
    {
      category: "Development",
      title: "Personal Portfolio",
      info: ["React + JS", "Development"],
      content:
        "Created a responsive personal portfolio using React and Tailwind CSS, featuring projects, experience, and contact info. Designed with a sleek UI to highlight my front-end skills and focus on user experience.",
      tilecolor: "#1C1F58",
      buttoncolor: "#363A8E",
      subbuttoncolor: "rgba(54, 58, 142, 0.5)",
      img: "/assets/Desktop.png",
    },
    {
      category: "Design",
      title: "Ping Pong Game",
      info: ["UI Design"],
      content:
        "Designed an interactive multiplayer Ping Pong game with a sleek UI for desktop. Features name and paddle color customization, with a clean layout, vibrant colors, and smooth user interactions.",
      tilecolor: "#4FC977",
      buttoncolor: "#359254",
      subbuttoncolor: "rgba(51, 146, 84, 0.5)",
      img: "/assets/Homepage.png",
      link: "https://www.figma.com/design/IAl81RHh3GFjCftcwLcZBQ/Ping-Pong-UI?node-id=0-1&t=vwKM7OHVWSSQEFpQ-1",
    },
    {
      category: "Design",
      title: "Personal Portfolio",
      info: ["UI Design"],
      content:
        "Designed a modern, responsive portfolio using React and Tailwind CSS. Features a clean layout with sections for projects, experience, and contact, focusing on simplicity and seamless user experience.",
      tilecolor: "#1C1F58",
      buttoncolor: "#363A8E",
      subbuttoncolor: "rgba(54, 58, 142, 0.5)",
      img: "/assets/Desktop.png",
    },
    {
      category: "Video Editing",
      title: "BunSek Product Video",
      info: ["After Effects", "Premiere Pro", "Illustrator"],
      content:
        "I built a personal portfolio using React and Tailwind CSS to showcase my work and skills. The portfolio is fully responsive, with a sleek design that adapts seamlessly across devices. It features sections highlighting my projects, experience, and contact information, all designed with user experience in mind. This project demonstrates my proficiency in modern front-end development and UI design principles.",
      tilecolor: "#1C1F58",
      buttoncolor: "#363A8E",
      subbuttoncolor: "rgba(54, 58, 142, 0.5)",
      img: "/assets/Desktop.png",
      link: "https://youtu.be/qVRJ-TUb4z8?si=YmIRyzE2d6NMgb7D",
    },
  ];
  const experience = [
    {
      title: "Software Engineer",
      company: "CABCS Group India Pvt Ltd.",
      from: "Oct,2023",
      to: "Present",
      place: "Puducherry",
    },
    {
      title: "Software Engineer Trainee",
      company: "CABCS Group India Pvt Ltd.",
      from: "Apr,2023",
      to: "Oct,2023",
      place: "Puducherry",
    },
    {
      title: "Web Developer",
      company: "CABCS Group India Pvt Ltd.",
      from: "Oct,2022",
      to: "Apr,2023",
      place: "Bengaluru",
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g. 5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
      console.log("true");
    } else {
      document.body.classList.remove("dark");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Loader />
        ) : (
          <div className="w-full min-h-screen bg-white dark:bg-[#181818] transition-colors duration-300 bg-[url('/assets/Background.svg')] bg-auto">
            <div className="relative px-5 xl:px-24 sm:px-10 w-full transition-colors duration-400 ">
              <Navbar />
              <Herosection />
              <About />
              <Skills skillsData={skills} />
              <Projects projectsData={projects} />
              <Experience experienceData={experience} />
              <Contact />
              <Widgets
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
              />
            </div>
            <div className="w-full h-full text-center bg-gray-200 text-gray-500 dark:bg-[#2F2F2F] dark:text-gray-300">
              © 2025 Tharun theja Boyalla. All Rights Reserved.
            </div>
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
