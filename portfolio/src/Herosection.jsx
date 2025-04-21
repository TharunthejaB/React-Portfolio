import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import { ReactTyped, Typed } from "react-typed";

function Herosection() {
  return (
    <section
      className="w-full h-screen flex justify-between items-center xl:-mt-2 2xl:-mt-8"
      id="herosection"
    >
      <div className="flex flex-col sm:items-start items-center gap-4.5 w-full sm:w-7/12">
        <div className="flex justify-between flex-col text-center sm:text-left gap-3.5">
          <div className="flex flex-col gap-2">
            <Heading>Hi, I'm Tharun theja Boyalla</Heading>
            <Heading className="flex flex-col gap-2.5 sm:block">
              a passionate <div className="sm:hidden block"></div>
              <span className="text-[#C93D3D] text-[30px] sm:text-2xl lg:text-3xl 2xl:text-[40px]">
                <ReactTyped
                  strings={["Web Developer", "Video Editor", "UI Designer"]}
                  typeSpeed={75}
                  backSpeed={50}
                  loop
                />
              </span>
            </Heading>
          </div>
          <div>
            <Content>
              I create engaging experiences through design, storytelling, and
              development. Let's bring your ideas to life.
            </Content>
          </div>
        </div>
        <div>
          <button className="rounded-[20px] w-48 h-14 cursor-pointer text-white font-medium bg-green-700">
            <a href="#contact" className="text-base">
              Get in touch
            </a>
          </button>
        </div>
      </div>
      <div className="xl:w-4/12 sm:w-5/12  hidden items-center justify-end sm:flex">
        <img src="/src/assets/T1.png" className="w-full"></img>
      </div>
    </section>
  );
}

export default Herosection;
