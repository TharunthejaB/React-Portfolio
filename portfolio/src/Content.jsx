const colorMap = {
  gray: "text-[#9CA3AF]",
  red: "text-[#C93D3D]",
  blue: "text-blue-500",
  white: "text-white",
};

const Content = ({ color = "gray", children, className = "", ...props }) => {
  return (
    <p
      className={`font-medium text-justify text-[12px] lg:text-[16px] ${
        colorMap[color]
      } ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Content;
