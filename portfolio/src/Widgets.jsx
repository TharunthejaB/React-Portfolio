import React from "react";

function Widgets() {
  return (
    <div className="bottom-10 flex justify-between sticky items-center">
      <div className="rounded-full w-11 h-11 flex justify-center items-center bg-[#FFD857]">
        <img src="/src/assets/light.svg"></img>
      </div>
      <div className="rounded-full w-15 h-15 flex justify-center items-center  bg-[#D96F6F]">
        <img src="/src/assets/uparrow.svg" className="invert w-7 h-7"></img>
      </div>
    </div>
  );
}

export default Widgets;
