import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import icon from "../public/assets/message.svg";

function Navbar() {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("up");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious();

    setScrollDirection(diff > 0 ? "down" : "up");
  });
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
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: scrollDirection === "down" ? -120 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="sticky top-10 z-50"
    >
      <nav className="flex justify-between backdrop-blur-xs items-center z-20 text-white">
        <div className="w-auto h-fit">
          <a href="#herosection">
            <img
              src="/assets/Tharun theja Boyalla.svg"
              className="w-full h-full invert"
            ></img>
          </a>
        </div>
        <div className="w-auto h-fit relative">
          <div className="hidden gap-[6vw] sm:flex justify-center items-center">
            <a href="#about" className="group relative">
              About
              <span className="absolute -bottom-2 rounded-2xl left-0 w-0 h-1 group-hover:w-full group-hover:bg-red-900 transition-all duration-300"></span>
            </a>
            <a href="#work" className="group relative">
              Work
              <span className="absolute -bottom-2 rounded-2xl left-0 w-0 h-1 group-hover:w-full group-hover:bg-red-900 transition-all duration-300"></span>
            </a>
            <a href="#contact" className="group relative">
              <span className="absolute -bottom-2 rounded-2xl left-0 w-0 h-1 group-hover:w-full group-hover:bg-red-900 transition-all duration-300"></span>
              Contact
            </a>
            <a
              href="mailto:tharuntheja.b25@gmail.com"
              className="group relative border-red-800 border-1 shadow-red-800 hover:shadow-md transition-all duration-300 rounded-[5px] px-5 py-2 flex gap-3"
            >
              Let's talk
              <img src={icon} className="h-6"></img>
            </a>
          </div>
          <div
            className="flex flex-col gap-1.5 sm:hidden w-8 h-6 justify-center items-center relative cursor-pointer"
            onClick={handleClick}
          >
            <div
              className={`bg-white w-full h-1 rounded-3xl absolute ease-in-out duration-200 
          ${
            animationStep === "merge" || animationStep === "x"
              ? "top-2"
              : "top-0"
          }
          ${animationStep === "x" ? "rotate-45" : ""}
        `}
            ></div>
            <div
              className={` bg-white w-full h-1 rounded-3xl absolute ease-in-out duration-300 
          ${animationStep === "merge" || animationStep === "x" ? "top-2" : ""}
          ${animationStep === "x" ? "opacity-0" : ""}
        `}
            ></div>
            <div
              className={`bg-white w-full h-1 rounded-3xl absolute ease-in-out duration-200 
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
        } z-10 top-0 backdrop-blur-md flex pt-30 text-white`}
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
    </motion.nav>
  );
}

export default Navbar;
