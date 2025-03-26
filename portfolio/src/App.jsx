import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

function App() {
  const skills = [
    {
      text: "Development",
      img: [
        "/src/assets/react.svg",
        "/src/assets/js.svg",
        "/src/assets/tailwind.svg",
        "/src/assets/html.svg",
      ],
    },
    {
      text: "Design",
      img: [
        "/src/assets/figma.svg",
        "/src/assets/illustrator.svg",
        "/src/assets/photoshop.svg",
        "/src/assets/canva.svg",
      ],
    },
    {
      text: "Video Editing",
      img: [
        "/src/assets/After Effects.svg",
        "/src/assets/Premiere.svg",
        "/src/assets/Capcut.svg",
      ],
    },
  ];
  const projects = [
    {
      category: "Development",
      title: "Ping Pong Game",
      info: ["Html, CSS, JS", "Development"],
      content:
        "I developed an interactive, multiplayer Ping Pong game using HTML, Sass, and JavaScript. This project allows players to personalize their experience by selecting their names and choosing paddle colors. The game is fully responsive, ensuring smooth gameplay across all devices. It’s a fun and engaging project that highlights my skills in front-end development, UI/UX design, and implementing real-time interactive features.",
      tilecolor: "#4FC977",
      buttoncolor: "#359254",
      subbuttoncolor: "rgba(51, 146, 84, 0.5)",
      img: "/src/assets/Homepage.png",
    },
    {
      category: "Development",
      title: "Personal Portfolio",
      info: ["React + JS", "UI Design", "Development"],
      content:
        "I built a personal portfolio using React and Tailwind CSS to showcase my work and skills. The portfolio is fully responsive, with a sleek design that adapts seamlessly across devices. It features sections highlighting my projects, experience, and contact information, all designed with user experience in mind. This project demonstrates my proficiency in modern front-end development and UI design principles.",
      tilecolor: "#1C1F58",
      buttoncolor: "#363A8E",
      subbuttoncolor: "rgba(54, 58, 142, 0.5)",
      img: "/src/assets/Desktop.png",
    },
    {
      category: "Design",
      title: "Ping Pong Game",
      info: ["UI Design"],
      content:
        "I designed a visually engaging and interactive multiplayer Ping Pong game with a sleek, user-friendly interface for desktop devices. Players can personalize their experience by selecting names and paddle colors, creating a unique feel. The design focuses on a clean, intuitive layout with vibrant colors, enhancing gameplay with smooth interactions.",
      tilecolor: "#4FC977",
      buttoncolor: "#359254",
      subbuttoncolor: "rgba(51, 146, 84, 0.5)",
      img: "/src/assets/Homepage.png",
    },
    {
      category: "Design",
      title: "Personal Portfolio",
      info: ["UI Design"],
      content:
        "I designed a visually appealing personal portfolio with React and Tailwind CSS to showcase my work. The design features a clean, intuitive layout with sections for projects, experience, and contact. The user interface emphasizes simplicity, ensuring a seamless experience. The modern aesthetic offers a polished presentation across all devices.",
      tilecolor: "#1C1F58",
      buttoncolor: "#363A8E",
      subbuttoncolor: "rgba(54, 58, 142, 0.5)",
      img: "/src/assets/Desktop.png",
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
  return (
    <>
      <div className="relative px-5 xl:px-24 sm:px-10 w-full">
        <Navbar />
        <Herosection />
        <About id="about" />
        <Skills skillsData={skills} />
        <Projects projectsData={projects} />
        <Experience experienceData={experience} />
        <Contact />
        <Widgets />
      </div>
      <div className="w-full h-full text-center bg-gray-400">
        © 2025 Tharun theja Boyalla. All Rights Reserved.
      </div>
    </>
  );
}

export default App;
