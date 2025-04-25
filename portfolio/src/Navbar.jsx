import React, { useState } from "react";

function Navbar() {
  const [animationStep, setAnimationStep] = useState("normal");
  const handleClick = () => {
    if (animationStep === "x") {
      setAnimationStep("merge");
      setTimeout(() => {
        setAnimationStep("normal");
      }, 150);
    } else {
      setAnimationStep("merge");
      setTimeout(() => {
        setAnimationStep("x");
      }, 150);
    }
  };
  const handleLinkClick = () => {
    setAnimationStep("normal");
  };
  return (
    <>
      <nav className="flex justify-between sticky top-10 backdrop-blur-xs items-center z-20">
        <div className="w-auto h-fit">
          <a href="#herosection">
            <img
              src="/assets/Tharun theja Boyalla.svg"
              className="w-full h-full"
            ></img>
          </a>
        </div>
        <div className="w-auto h-fit relative">
          <div className="hidden gap-[8vw] sm:flex">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <div
            className="flex flex-col gap-1.5 sm:hidden w-8 h-6 justify-center items-center relative cursor-pointer"
            onClick={handleClick}
          >
            <div
              className={`bg-gray-700 w-full h-1 rounded-3xl absolute ease-in-out duration-200 
          ${
            animationStep === "merge" || animationStep === "x"
              ? "top-2"
              : "top-0"
          }
          ${animationStep === "x" ? "rotate-45" : ""}
        `}
            ></div>
            <div
              className={`bg-gray-700 w-full h-1 rounded-3xl absolute ease-in-out duration-300 
          ${animationStep === "merge" || animationStep === "x" ? "top-2" : ""}
          ${animationStep === "x" ? "opacity-0" : ""}
        `}
            ></div>
            <div
              className={`bg-gray-700 w-full h-1 rounded-3xl absolute ease-in-out duration-200 
          ${
            animationStep === "merge" || animationStep === "x"
              ? "top-2"
              : "bottom-0"
          }
          ${animationStep === "x" ? "-rotate-45" : ""}
        `}
            ></div>
          </div>
        </div>
      </nav>
      <div
        className={`w-1/2 h-screen fixed ease-in-out duration-500 sm:hidden ${
          animationStep === "x" ? "right-0" : "-right-60"
        } z-10 top-0 backdrop-blur-md flex pt-30`}
      >
        <div className="w-full gap-[8vw] flex flex-col place-items-center font-bold">
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
          <a href="#work" onClick={handleLinkClick}>
            Work
          </a>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
