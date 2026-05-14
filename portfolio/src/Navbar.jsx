import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import icon from "/assets/message.svg";

function Navbar() {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("up");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious();

    setScrollDirection(diff > 0 ? "down" : "up");
  });

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
      <>
        <nav className="flex justify-between backdrop-blur-xs items-center z-20 text-white ">
          <div className="w-auto h-fit">
            <a href="#herosection">
              <img
                src="/assets/Tharun theja Boyalla.svg"
                className="w-full h-full invert"
              ></img>
            </a>
          </div>
          <div className="w-auto h-fit relative hidden sm:flex">
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
          </div>
        </nav>
      </>
    </motion.nav>
  );
}

export default Navbar;
