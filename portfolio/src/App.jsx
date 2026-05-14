import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Widgets from "./Widgets";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import { BrowserRouter, Routes } from "react-router-dom";
import Loader from "./Loader";
import ReactLenis from "@studio-freight/react-lenis";

import { motion, useScroll, useSpring } from "framer-motion";
import Footer from "./Footer";
import Reveal from "./Reveal";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g. 5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
      console.log("true");
    } else {
      document.body.classList.remove("dark");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Loader />
        ) : (
          <>
            <motion.div
              className="fixed top-0 left-0 w-full h-1 bg-red-500 origin-left z-[9999]"
              style={{ scaleX: scrollYProgress }}
            />

            <div className="container m-auto min-h-screen bg-[#181818] transition-colors duration-300 bg-auto">
              <div className="relative px-7 xl:px-24 sm:px-10 w-full transition-colors duration-400 ">
                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 40 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                >
                  <Navbar />
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Herosection />
                </motion.div>
                <Reveal>
                  <About />
                </Reveal>
                <Reveal>
                  <Skills />
                </Reveal>
                <Reveal>
                  <Projects />
                </Reveal>
                <Reveal>
                  <Experience />
                </Reveal>
                <Reveal>
                  <Contact />
                </Reveal>
                <Reveal>
                  <Footer />
                </Reveal>

                <Widgets />
              </div>
            </div>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
