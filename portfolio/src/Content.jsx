import React from "react";

const Content = ({ children, className = "", ...props }) => {
  return (
    <p
      className={`font-medium lg:leading-8 xl:leading-10 text-base lg:text-xl xl:text-2xl ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Content;
