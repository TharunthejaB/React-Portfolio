import React from "react";

function Loader() {
  return (
    <div className="w-full h-screen bg-white flex place-content-center place-items-center">
      <img
        src="/public/assets/Loader.gif"
        className="w-3/4 sm:w-1/2 lg:w-1/4"
      ></img>
    </div>
  );
}

export default Loader;
