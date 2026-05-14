import React from "react";

const ButtonLight = ({ children, href, className }) => {
  return (
    <button
      className={`group flex items-center justify-center gap-2 rounded-[10px] p-5 h-10 cursor-pointer text-white font-medium border-2 border-gray-500 hover:bg-gray-700 transition-all duration-300 ${className}`}
    >
      <a href={href} className="text-[10px] sm:text-sm">
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
          "
      >
        →
      </span>
    </button>
  );
};

export default ButtonLight;
