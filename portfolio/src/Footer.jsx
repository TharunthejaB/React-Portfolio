import React from "react";
import logo from "/assets/Tharun theja Boyalla.svg";
import icon from "/assets/github.svg";
import email from "/assets/email.svg";
import location from "/assets/location.svg";
import linkedin from "/assets/linkedin.svg";
import Content from "./Content";
const Footer = () => {
  return (
    <section className="w-full h-full flex flex-col justify-between items-start gap-10 my-10 md:my-20 border-b-gray-500/50 border-b-1 py-10">
      <div className="w-full h-full flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="h-full w-full md:w-1/4 flex flex-col justify-start items-start gap-4">
          <img src={logo} className="invert"></img>
          <span className="text-gray-400 text-md">
            Frontend Developer focused on building modern, fast and
            user-friendly web experiences.
          </span>
          <div className="flex gap-5">
            <a
              href="https://github.com/TharunthejaB"
              target="_blank"
              className="group"
            >
              <img
                src={icon}
                className="h-7 invert grayscale brightness-10 contrast-10 group-hover:brightness-50 group-hover:contrast-150 transition-all duration-300"
              ></img>
            </a>
            <a
              href="https://in.linkedin.com/in/tharun-theja-boyalla-093070206"
              target="_blank"
              className="group"
            >
              <img
                src={linkedin}
                className="h-7 invert grayscale brightness-10 contrast-10 group-hover:brightness-50 group-hover:contrast-150 transition-all duration-300"
              ></img>
            </a>
          </div>
        </div>
        <div className="h-full flex flex-col gap-5">
          <Content className="font-bold" color="white">
            Quick Links
          </Content>
          <div className="flex flex-col gap-6 text-gray-400">
            <a href="#about" className="group relative">
              <span className="absolute -bottom-2 rounded-2xl left-0 w-0 h-1 group-hover:w-full group-hover:bg-red-900 transition-all duration-300"></span>
              About
            </a>
            <a href="#work" className="group relative">
              <span className="absolute -bottom-2 rounded-2xl left-0 w-0 h-1 group-hover:w-full group-hover:bg-red-900 transition-all duration-300"></span>
              Work
            </a>
            <a href="#contact" className="group relative">
              <span className="absolute -bottom-2 rounded-2xl left-0 w-0 h-1 group-hover:w-full group-hover:bg-red-900 transition-all duration-300"></span>
              Contact
            </a>
          </div>
        </div>
        <div className="h-full flex flex-col gap-5">
          <Content className="font-bold" color="white">
            Let's Connect
          </Content>
          <div className="flex flex-col gap-6 text-gray-400">
            <div className="flex items-center gap-3">
              <img
                src={email}
                className="h-4 grayscale brightness-50 contrast-75"
              ></img>
              <a href="mailto:tharuntheja.b25@gmail.com">
                tharuntheja.b25@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={location}
                className="h-4 grayscale brightness-50 contrast-75"
              ></img>
              <a>Tirupati, India.</a>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-gray-500/50 border-1"></hr>
      <div className="w-full h-full flex justify-between text-gray-500">
        <span>© Tharun theja Boyalla. All Rights Reserved.</span>
        <span>Built with React, Tailwind CSS</span>
      </div>
    </section>
  );
};

export default Footer;
