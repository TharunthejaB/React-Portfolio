import React from "react";
import Heading from "./Heading";
import Content from "./Content";

function About() {
  const aboutpic = [
    {
      img: "/src/assets/about1.png",
      bgColor: "11, 164, 224",
    },
    {
      img: "/src/assets/about2.png",
      bgColor: "254, 208, 73",
    },
    {
      img: "/src/assets/about3.png",
      bgColor: "0, 113, 206",
    },
  ];
  return (
    <section
      className="w-full h-full py-10 sm:py-20 flex flex-col justify-center items-center gap-10 sm:gap-16"
      id="about"
    >
      <div className="relative">
        <Heading>About</Heading>
        <img
          src="/src/assets/aboutul.svg"
          className="w-full h-full absolute -z-1 top-5"
        ></img>
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4.5">
        <div className="xl:w-4/12 h-full">
          <img
            src="/src/assets/T2.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full sm:w-7/12 flex flex-col justify-between gap-5 items-center sm:items-end">
          <div className="flex flex-col items-center sm:items-end gap-4">
            <Heading>Hello, I'm Tharun theja Boyalla</Heading>
            <Content className="text-justify">
              I'm a developer, designer, and video editor who loves building
              intuitive UIs, crafting engaging edits, and creating interactive
              web apps with React. Currently exploring the MERN stack and always
              looking to learn something new. When I’m not working, you’ll find
              me at the gym or catching a good movie.
            </Content>
          </div>
          <div className="flex gap-5">
            {aboutpic.map((about, index) => (
              <div
                className={`rounded-full w-15 h-15 2xl:w-20 2xl:h-20 p-3 flex justify-center items-center`}
                style={{ backgroundColor: `rgba(${about.bgColor}, 0.5)` }}
                key={index}
              >
                <img src={about.img} className="w-full"></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
