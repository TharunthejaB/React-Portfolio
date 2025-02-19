import React from "react";
import Heading from "./Heading";
import Content from "./Content";

function About() {
  return (
    <section className="w-full h-full py-10 sm:py-20 flex flex-col justify-center items-center gap-10 sm:gap-16">
      <div>
        <Heading>About</Heading>
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
            <div className="rounded-full w-20 h-20 bg-amber-200"></div>
            <div className="rounded-full w-20 h-20 bg-amber-200"></div>
            <div className="rounded-full w-20 h-20 bg-amber-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
