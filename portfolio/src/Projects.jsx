import React, { useState } from "react";
import Heading from "./Heading";
import Content from "./Content";

function Projects({ projectsData }) {
  const [selectedSection, setSelectedSection] = useState("Development");

  // Handle dropdown change
  const handleChange = (event) => {
    setSelectedSection(event.target.value);
  };
  return (
    <>
      <section className="w-full py-10 sm:py-20 flex relative" id="work">
        <div className="w-full flex flex-col items-center gap-10">
          <div className="relative">
            <Heading>Projects</Heading>
            <img
              src="/assets/projectul.svg"
              className="w-full h-full absolute  top-5"
            ></img>
          </div>
          <div className="w-full flex flex-col gap-14">
            <div className="w-full flex justify-end">
              <div className="h-8 w-[40%] sm:w-2xs px-4 flex justify-center items-center rounded-full bg-[#F4F4F4] dark:bg-[#2D2D2D] dark: text-white">
                <div className="text-xl">
                  <select
                    id="filters"
                    className="outline-0"
                    value={selectedSection}
                    onChange={handleChange}
                  >
                    <option value="Development" className="text-black">
                      Development
                    </option>
                    <option value="Design" className="text-black">
                      Design
                    </option>
                    <option value="Video Editing" className="text-black">
                      Video Editing
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full place-items-center flex flex-col sm:grid grid-cols-2 relative gap-5 text-white">
              {projectsData.map(
                (project, index) =>
                  project.category === selectedSection && (
                    <div className="w-full flex flex-col">
                      {/* First Row (40%) */}
                      <div className="w-full flex justify-center relative items-center rounded-tl-[20px] rounded-tr-[20px] overflow-hidden">
                        <div className="w-full h-full relative">
                          <img
                            src={project.img}
                            className="w-full h-full object-cover blur-[3px]"
                            alt="Homepage"
                          />
                          <div className="w-full h-full bg-black opacity-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex place-content-center"></div>
                          <Heading
                            key={index}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold"
                          >
                            {project.title}
                          </Heading>
                        </div>
                      </div>

                      {/* Second Row (60%) */}
                      <div
                        className="w-full h-fit flex flex-col py-6 px-5 gap-5 rounded-bl-[20px] rounded-br-[20px]"
                        style={{ backgroundColor: project.tilecolor }}
                      >
                        <div className="w-11/12 sm:w-full md:w-[80%] xl:w-[60%] flex text-xs font-semibold justify-between">
                          {project.info.map((info, index) => (
                            <div
                              key={index}
                              className="w-24 h-9 flex justify-center items-center rounded-full"
                              style={{
                                backgroundColor: project.subbuttoncolor,
                              }}
                            >
                              {info}
                            </div>
                          ))}
                        </div>

                        <div className="w-full flex justify-between items-end">
                          <div className="w-10/12 text-justify 2xl:text-xl 2xl:leading-10 leading-6.5">
                            {project.content}
                          </div>

                          <div
                            className="w-12 h-12 rounded-full p-3"
                            style={{ backgroundColor: project.buttoncolor }}
                            id="projectdetails"
                          >
                            <a href={project.link} target="_blank">
                              <img
                                src="/assets/Vector.svg"
                                className="w-full h-full"
                              ></img>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
