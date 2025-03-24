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
      title: "Ping Pong Game",
      info: ["Html, CSS, JS", "UI Design", "Development"],
      content:
        "I created a fun, multiplayer Ping Pong game using HTML, Sass, and JavaScript. Players can choose their names and pick paddle colors, and the game runs smoothly on any device. It’s a simple yet engaging project that shows off my skills in front-end development and design.",
      tilecolor: "#4FC977",
      buttoncolor: "#359254",
      subbuttoncolor: "rgba(51, 146, 84, 0.5)",
      img: "/src/assets/Homepage.png",
    },
    {
      title: "Personal Portfolio",
      info: ["React + JS", "UI Design", "Development"],
      content:
        "I created a fun, multiplayer Ping Pong game using HTML, Sass, and JavaScript. Players can choose their names and pick paddle colors, and the game runs smoothly on any device. It’s a simple yet engaging project that shows off my skills in front-end development and design.",
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
