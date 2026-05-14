import React from "react";

const Heading = ({ children, className = "", ...props }) => {
  return (
    <h2
      className={`font-bold text-4xl  lg:text-5xl xl:text-[60px] text-white ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Heading;
