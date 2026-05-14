import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import Subheading from "./subheading";

function Skills() {
  const skills = [
    { name: "React", img: "/assets/react.svg" },
    { name: "Javascript", img: "/assets/js.svg" },
    { name: "Html", img: "/assets/html.svg" },
    { name: "CSS", img: "/assets/html.svg" },
    { name: "Tailwind", img: "/assets/tailwind.svg" },
    { name: "Node JS", img: "/assets/Node.js.svg" },
    { name: "Express JS", img: "/assets/Express.svg" },
    { name: "Figma", img: "/assets/figma.svg" },
    { name: "Illustrator", img: "/assets/illustrator.svg" },
    { name: "GitHub", img: "/assets/github.svg" },
  ];
  return (
    <section className="w-full h-full py-10 sm:py-20 flex flex-col justify-center items-center gap-10 sm:gap-20 border-b-gray-500/50 border-b-1">
      <div className="w-full flex flex-col items-center gap-5">
        <Content color="red">MY SKILLS</Content>

        <Subheading>Technologies I work with</Subheading>
      </div>

      <div className="grid grid-cols-3 md:flex md:w-full md:items-center md:justify-center gap-6 md:gap-12">
        {skills.map((skill, index) => (
          <div className="flex flex-col items-center gap-2" key={index}>
            <img
              src={skill.img}
              className={`w-18 h-18 bg-gray-500/20 p-3 rounded-lg border-1 border-gray-500/30 ${
                skill.name === "GitHub" || skill.name === "Express JS"
                  ? "invert"
                  : ""
              }`}
              alt={skill.name}
            />
            <Content>{skill.name}</Content>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
