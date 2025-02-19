import React from "react";

const Content = ({ children, className = "", ...props }) => {
  return (
    <p
      className={`font-medium text-base lg:text-xl xl:text-2xl ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Content;
