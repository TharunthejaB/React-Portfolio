import React, { useEffect, useState } from "react";

function Widgets() {
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
    <div className="bottom-10 flex justify-between sticky items-center">
      <div
        className="rounded-full w-11 h-11 flex justify-center items-center bg-[#FFD857]"
        id="themechange"
      >
        <img src="/assets/light.svg"></img>
      </div>

      <div
        className="rounded-full w-15 h-15 flex justify-center items-center  bg-[#D96F6F]"
        id="scrolltotop"
        style={{
          visibility: isVisible ? "visible" : "hidden", // Hides the element, but still takes up space
          opacity: isVisible ? 1 : 0, // Optional: Adds smooth fade effect
          transition: "visibility 0.3s, opacity 0.3s", // Optional: Smooth transition
        }}
        onClick={scrollToTop}
      >
        <img src="/assets/uparrow.svg" className="invert w-7 h-7"></img>
      </div>
    </div>
  );
}

export default Widgets;
