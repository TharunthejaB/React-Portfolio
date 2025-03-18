import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between sticky top-10 backdrop-blur-xs">
      <div className="w-auto">
        <img
          src="/src/assets/Tharun theja Boyalla.svg"
          className="w-full h-full"
        ></img>
      </div>
      <div>
        <div className="hidden gap-[8vw] sm:flex">
          <Link to="about">About</Link>
          <Link>Work</Link>
          <Link>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
