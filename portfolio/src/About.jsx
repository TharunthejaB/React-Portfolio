import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import Subheading from "./subheading";
import ButtonLight from "./ButtonLight";

function About() {
  const icons = [
    "/assets/name.svg",
    "/assets/suitcase.svg",
    "/assets/code2.svg",
    "/assets/email.svg",
    "/assets/company.svg",
    "/assets/location.svg",
    "/assets/tick.svg",
  ];
  return (
    <section
      className="w-full h-full flex flex-col justify-center items-center gap-10 md:gap-16"
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-full gap-4.5">
        <div className=" w-full md:w-1/4 lg:w-1/2 h-full flex flex-col justify-between gap-5 ">
          <Content color="red">ABOUT ME</Content>
          <div className="flex flex-col gap-4">
            <Subheading>
              Crafting digital experiences that{" "}
              <span className="text-[#C93D3D]">users love.</span>
            </Subheading>
            <Content>
              I'm a Frontend Developer who loves turning ideas into beautiful,
              functional and accesible web experiences. I enjoy writing clean,
              maintainable code and bringing designs to life with precision.
              When I'm not coding, you would find me either in gym or deeply
              involved in a movie.
            </Content>
          </div>
          <button
            className={`group flex items-center justify-center gap-2 rounded-[10px] p-5 w-38 h-10 cursor-pointer text-white font-medium border-2 border-gray-500 hover:bg-gray-700 transition-all duration-300`}
          >
            <a href="/assets/Tharun_theja.pdf" className="text-[12px]" download>
              Download CV
            </a>
            <span
              className="
            opacity-0
            -translate-x-2
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
          "
            >
              →
            </span>
          </button>
        </div>
        <div className="h-full"></div>
        <div className="w-full md:w-3/4 lg:w-1/2 h-full py-10 rounded-[20px] bg-[#202020] flex justify-around items-center">
          <div className="flex text-white justify-evenly gap-6">
            <div className="flex flex-col text-white justify-evenly gap-6">
              {icons.map((icon, index) => (
                <img className="h-4 md:h-6" src={icon}></img>
              ))}
            </div>
            <div className="flex flex-col text-white justify-evenly gap-6">
              <span className="md:text-base text-[12px] ">Name</span>
              <span className="md:text-base text-[12px] ">Curent Role</span>
              <span className="md:text-base text-[12px] ">Experience</span>
              <span className="md:text-base text-[12px] ">Email </span>
              <span className="md:text-base text-[12px] ">Working at</span>
              <span className="md:text-base text-[12px] ">Location</span>
              <span className="md:text-base text-[12px] ">Availability</span>
            </div>
          </div>

          <div className="flex flex-col text-white justify-evenly gap-6">
            <span className="md:text-base text-[12px] ">
              Tharun theja Boyalla
            </span>
            <span className="md:text-base text-[12px] ">Software Engineer</span>
            <span className="md:text-base text-[12px] ">3 Years</span>
            <span className="md:text-base text-[12px] ">
              tharuntheja.b25@gmail.com{" "}
            </span>
            <span className="md:text-base text-[12px] ">
              CABCS Group India Pvt. Ltd, Puducherry
            </span>
            <span className="md:text-base text-[12px] ">Tirupati</span>
            <span className="text-green-400 font-bold drop-shadow-[0_0_10px_#22c55e]">
              Open to work
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
