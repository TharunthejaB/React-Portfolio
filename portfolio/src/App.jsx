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

function App() {
  const skills = [
    {
      text: "Development",
      img: [
        "/src/assets/react.svg",
        "/src/assets/react.svg",
        "/src/assets/react.svg",
      ],
    },
    {
      text: "Design",
      img: [
        "/src/assets/react.svg",
        "/src/assets/react.svg",
        "/src/assets/react.svg",
      ],
    },
    {
      text: "Video Editing",
      img: [
        "/src/assets/react.svg",
        "/src/assets/react.svg",
        "/src/assets/react.svg",
      ],
    },
  ];
  const projects = [
    {
      title: "Ping Pong Game",
      info: ["Html, CSS, JS", "UI Design", "Development"],
      content:
        "I created a fun, multiplayer Ping Pong game using HTML, Sass, and JavaScript. Players can choose their names and pick paddle colors, and the game runs smoothly on any device. It’s a simple yet engaging project that shows off my skills in front-end development and design.",
    },
    {
      title: "Personal Portfolio",
      info: ["React + JS", "UI Design", "Development"],
      content:
        "I created a fun, multiplayer Ping Pong game using HTML, Sass, and JavaScript. Players can choose their names and pick paddle colors, and the game runs smoothly on any device. It’s a simple yet engaging project that shows off my skills in front-end development and design.",
    },
  ];
  const experience = [
    {
      title: "Software Engineer",
      company: "CABCS Group India Pvt Ltd.",
      from: "Oct,2023",
      to: "present",
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
    <div className="relative mx-5 md:mx-24 sm:mx-10 max-w-fit">
      <Navbar />
      <Herosection />
      <About />
      <Skills skillsData={skills} />
      <Projects projectsData={projects} />
      <Experience experienceData={experience} />
      <Widgets />
    </div>
  );
}

export default App;
