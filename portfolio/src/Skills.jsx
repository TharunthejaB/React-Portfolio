import React from "react";
import Heading from "./Heading";
import Content from "./Content";

function Skills({ skillsData }) {
  return (
    <section className="w-full h-full py-10 sm:py-20 flex flex-col justify-center items-center gap-10 sm:gap-20">
      <div className="text-center flex flex-col items-center">
        <div className="relative w-fit">
          <Heading className="w-fit">Skills</Heading>
          <img
            src="/assets/skillsul.svg"
            className="w-full h-full absolute top-5"
          ></img>
        </div>
        <Content>Here's a quick breakdown of what I bring to the table</Content>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-10">
        {skillsData.map((skills, index) => (
          <div
            key={index}
            className="flex w-full sm:w-4/12 flex-col text-center items-center justify-center gap-9"
          >
            <Heading className="w-full" style={{ color: skills.color }}>
              {skills.text}
            </Heading>
            <div className="w-full sm:w-1/2 flex sm:grid grid-cols-2 sm:justify-items-center items-center justify-center gap-5">
              {skills.img.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  className="w-15 h-15 2xl:w-20 2xl:h-20"
                  alt=""
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
