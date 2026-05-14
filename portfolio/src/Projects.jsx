import React, { useState } from "react";
import Heading from "./Heading";
import Content from "./Content";
import Subheading from "./subheading";
import ButtonRed from "./buttonRed";

function Projects() {
  const projects = [
    {
      title: "Interview Prep AI",
      info: ["MERN Stack", "Gemini API"],
      content:
        "Built an AI-powered interview preparation platform using the MERN stack and Gemini API. The application generates role-specific interview questions, provides intelligent responses and feedback, and delivers a seamless, responsive user experience with modern UI design.",

      img: "../public/assets/Interview Prep.png",
      link: "https://interview-ai-prep-frontend-lms5.onrender.com/",
    },
    {
      title: "Personal Portfolio",
      info: ["React.js", "Tailwind CSS"],
      content:
        "Designed and developed a modern personal portfolio using React.js and Tailwind CSS to showcase projects, technical skills, and professional experience. Focused on creating a responsive, visually engaging interface with smooth interactions, reusable components, and optimized performance across devices.",

      img: "../public/assets/Portfolio.png",
    },
    {
      title: "Ping Pong Game",
      info: ["HTML, CSS, JavaScript", "Game Development"],
      content:
        "Developed an interactive multiplayer Ping Pong game using HTML, CSS, and JavaScript with a focus on responsive gameplay and smooth user interactions. Features include customizable player names, paddle color selection, real-time score tracking, and a clean, engaging UI experience.",
      tilecolor: "#4FC977",
      buttoncolor: "#359254",
      subbuttoncolor: "rgba(51, 146, 84, 0.5)",
      img: "../public/assets/Pingpong.png",
      link: "https://tharunthejab.github.io/Ping-Pong-Game/",
    },
  ];

  return (
    <>
      <section
        className="w-full h-full py-10 sm:py-20 flex relative border-b-gray-500/50 border-b-1"
        id="work"
      >
        <div className="w-full flex flex-col gap-10">
          <div>
            <Content color="red">FEATURED WORK</Content>
            <Subheading>Some of my recent Projects</Subheading>
          </div>

          <div className="w-full h-auto place-items-center flex flex-col sm:grid grid-cols-3 relative gap-5 text-white">
            {projects.map((project, index) => (
              <div
                className="w-full flex flex-col backdrop-blur-md bg-white/2 border border-white/20 shadow-lg rounded-2xl p-10 gap-5"
                key={index}
              >
                <img
                  src={project.img}
                  className="w-full h-1/2 object-cover rounded-md"
                  alt="Homepage"
                />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-full flex items-center justify-between">
                    <h1 key={index} className="text-white text-xl font-medium">
                      {project.title}
                    </h1>
                    {project.info.map((info, index) => (
                      <div className="bg-[#333333] p-2 text-[8px] rounded-lg">
                        {info}
                      </div>
                    ))}
                  </div>
                  <Content>{project.content}</Content>
                </div>
                <ButtonRed
                  href={project.link}
                  target="_blank"
                  className="w-40 h-10 -p-2"
                >
                  View Project
                </ButtonRed>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
