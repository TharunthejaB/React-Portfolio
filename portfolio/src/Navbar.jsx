import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between sticky top-10 backdrop-blur-xs items-center">
      <div className="w-auto h-fit">
        <a href="#herosection">
          <img
            src="/public/assets/Tharun theja Boyalla.svg"
            className="w-full h-full"
          ></img>
        </a>
      </div>
      <div className="w-auto h-fit">
        <div className="hidden gap-[8vw] sm:flex">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <div
          className="flex flex-col gap-1.5 sm:hidden w-8 h-6 justify-center items-center"
          id="hamburger"
        >
          <div className="bg-gray-700 w-full h-1.5 rounded-3xl"></div>
          <div className="bg-gray-700 w-full h-1.5 rounded-3xl"></div>
          <div className="bg-gray-700 w-full h-1.5 rounded-3xl"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
