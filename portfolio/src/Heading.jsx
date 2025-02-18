import React from "react";

const Heading = ({ children, className = "", ...props }) => {
  return (
    <h2
      className={`font-bold text-2xl sm:text-lg md:text-xl lg:text-[40px] ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Heading;
