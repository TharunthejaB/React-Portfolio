import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import { ReactTyped, Typed } from "react-typed";
import bannerImage from "/assets/T1-removebg-preview.png";
import techImage from "/assets/figma.svg";
import ButtonRed from "./buttonRed";
import ButtonLight from "./ButtonLight";
import { motion, useScroll, useSpring } from "framer-motion";
import react from "/assets/react.svg";
import js from "/assets/js.svg";
import Node from "/assets/Node.js.svg";
import Git from "/assets/github.svg";

function Herosection() {
  const icons = [
    "/assets/react.svg",
    "/assets/js.svg",
    "/assets/Node.js.svg",
    "/assets/figma.svg",
  ];
  const expTile = [
    {
      title: "3+",
      subtitle: "Years of Experience",
      icon: "/assets/code.svg",
      color: "red",
    },
    {
      title: "Modern",
      subtitle: "Frontend Development",
      icon: "/assets/desktop.svg",
      color: "red",
    },
    {
      title: "Clean",
      subtitle: "UI Components",
      icon: "/assets/ui.svg",
      color: "red",
    },
    {
      title: "Scalable",
      subtitle: "Web Interfaces",
      icon: "/assets/scalability.svg",
      color: "red",
    },
  ];
  return (
    <section
      className="w-full h-full flex flex-col items-center justify-center my-24 md:my-32 relative gap-6"
      id="herosection"
    >
      <div className="bg-red-700 absolute rounded-full w-96 h-96 -bottom-50 -left-120 backdrop-blur-3xl blur-3xl opacity-50"></div>

      <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
        <div className=" w-full md:w-1/2 flex flex-col justify-center gap-3 text-center">
          <div className="flex justify-between flex-col text-left sm:text-left gap-3.5">
            <div className="flex flex-col gap-4 justify-center">
              <div className="p-4 bg-[#202020] w-fit rounded-md text-[#F65C5C] font-bold flex items-center gap-2">
                <div className="w-4 h-4 bg-[#F65C5C] rounded-full"></div>
                Frontend Developer
              </div>
              <Heading>
                Tharun theja <br></br>
                <span className="text-[#F65C5C]">Boyalla</span>
              </Heading>
              <p className="text-white text-[16px] sm:text-2xl lg:text-[24px] font-bold gap-2.5 inline-block">
                a passionate &thinsp;
                <span className="text-[#F65C5C]  text-[16px] sm:text-2xl lg:text-[24px]">
                  <ReactTyped
                    strings={[
                      "Frontend Developer",
                      "React Developer",
                      "MERN Stack Developer",
                    ]}
                    typeSpeed={75}
                    backSpeed={50}
                    loop
                  />
                </span>
              </p>
            </div>
            <div className="w-full md:w-3/4 lg:w-[75%]">
              <Content>
                Frontend Developer with{" "}
                <span className="text-[#F65C5C]">3 years of experience </span>
                crafting modern, pixel-perfect web applications using React.js
                and Express.js. Passionate about building fast, responsive, and
                user-focused interfaces with strong attention to design detail
                and usability.
              </Content>
            </div>
          </div>
          <div className="flex gap-5 justify-center sm:justify-start ">
            <ButtonRed href="#contact">Get in touch</ButtonRed>
            <ButtonLight href="#work">View My work</ButtonLight>
          </div>
          <div className="w-full h-20 mt-5 mb-5 md:mb-0 flex items-center gap-5">
            <Content>Tech I work with</Content>
            <div className="flex gap-7">
              {icons.map((icon, index) => (
                <img
                  className="w-full h-12 bg-[#333333] p-2 rounded-lg border-1 border-gray-500/30"
                  src={icon}
                  key={index}
                ></img>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <div className="w-full h-full border-red-900 border-2 absolute rounded-full z-0">
            <motion.div
              className="w-16 h-16 bg-[#333333] rounded-lg border-1 border-gray-500/30 absolute top-[15%] flex justify-center items-center"
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <img src={react} />
            </motion.div>
            <motion.div
              className="w-16 h-16 bg-[#333333] rounded-lg border-1 border-gray-500/30 absolute top-[75%] left-[2%] flex justify-center items-center"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            >
              <img src={Git} className="invert" />
            </motion.div>
            <motion.div
              className="w-16 h-16 bg-[#333333] p-2 rounded-lg border-1 border-gray-500/30 absolute top-[35%] -right-[4%] flex justify-center items-center"
              animate={{ x: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <img src={Node} />
            </motion.div>
            <motion.div
              className="w-16 h-16 bg-[#333333] p-2 rounded-lg border-1 border-gray-500/30 absolute top-[85%] right-[10%] flex justify-center items-center"
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <img src={js} />
            </motion.div>
          </div>
          <div className="w-[75%] h-[75%] bg-red-900 rounded-full z-0 overflow-hidden">
            <img
              src={bannerImage}
              alt=""
              className="grayscale w-full h-full object-cover [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] filter z-10"
            ></img>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-md bg-white/2 border border-white/20 shadow-lg rounded-2xl w-full flex flex-col md:flex-row gap-5 md:gap-3 py-7 px-5">
        {expTile.map((data, index) => (
          <>
            <div className="w-full h-full flex items-center  gap-7">
              <div>
                <img src={data.icon} className="w-10 h-10"></img>
              </div>
              <div>
                <h1 className="text-white text-2xl font-medium">
                  {data.title}
                </h1>
                <p className="text-gray-500">{data.subtitle}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Herosection;
