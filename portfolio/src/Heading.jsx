import React from "react";

const Heading = ({ children, className = "", ...props }) => {
  return (
    <h2
      className={`font-bold text-2xl  lg:text-3xl 2xl:text-[40px] dark:text-white ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Heading;
