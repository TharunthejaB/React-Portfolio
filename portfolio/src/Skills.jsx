import React from "react";
import Heading from "./Heading";
import Content from "./Content";

function Skills({ skillsData }) {
  return (
    <section className="w-full h-full py-10 sm:py-20 flex flex-col justify-center items-center gap-10 sm:gap-20">
      <div className="text-center flex flex-col">
        <Heading>Skills</Heading>
        <Content>Here's a quick breakdown of what I bring to the table</Content>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-10">
        {skillsData.map((skills, index) => (
          <div
            key={index}
            className="flex w-full sm:w-4/12 flex-col text-center items-center justify-center gap-8"
          >
            <Heading className="w-full">{skills.text}</Heading>
            <div className="w-full sm:w-1/2 flex sm:grid grid-cols-2 sm:justify-items-center items-center justify-center gap-5">
              {skills.img.map((img, index) => (
                <img src={img} key={index} className="w-20 h-20" alt="" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
