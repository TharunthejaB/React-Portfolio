import React from "react";

const ButtonRed = ({ children, className, href, target }) => {
  return (
    <button
      className={`group flex items-center justify-center gap-2 rounded-[10px] p-5.5 h-10 cursor-pointer text-white font-medium hover:bg-[#831e2e] bg-[#b92c43] transition-all duration-300 ${className}`}
    >
      <a href={href} className="text-sm" target={target}>
        {children}
      </a>
      <span
        className="
            opacity-0
            -translate-x-2
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
            lg:block
            hidden
          "
      >
        →
      </span>
    </button>
  );
};

export default ButtonRed;
