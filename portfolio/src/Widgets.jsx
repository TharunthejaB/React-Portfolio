import React, { useEffect, useState } from "react";

function Widgets({ toggleDarkMode, isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="right-25 bottom-25 flex justify-center fixed items-center rounded-full w-15 h-15 bg-[#D96F6F]"
      id="scrolltotop"
      style={{
        visibility: isVisible ? "visible" : "hidden", // Hides the element, but still takes up space
        opacity: isVisible ? 1 : 0, // Optional: Adds smooth fade effect
        transition: "visibility 0.3s, opacity 0.3s", // Optional: Smooth transition
      }}
      onClick={scrollToTop}
    >
      <img src="../public/assets/up-arrow.svg" className=" w-7 h-7"></img>
    </div>
  );
}

export default Widgets;
