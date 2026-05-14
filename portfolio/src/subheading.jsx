import React from "react";

const Subheading = ({ children, className = "", ...props }) => {
  return (
    <h2
      className={`font-bold text-3xl  lg:text-4xl xl:text-[45px] text-white ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Subheading;
