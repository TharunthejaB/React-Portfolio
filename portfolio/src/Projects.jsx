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
    <section className="w-full h-full py-10 sm:py-20 flex">
      <div className="w-full h-full flex flex-col items-center gap-11">
        <div className="relative">
          <Heading>Projects</Heading>
          <img
            src="/src/assets/projectul.svg"
            className="w-full h-full absolute -z-1 top-5"
          ></img>
        </div>
        <div className="w-full flex flex-col gap-14">
          <div className="w-full flex justify-end">
            <div className="h-8 w-[40%] sm:w-2xs px-4 flex justify-center items-center rounded-full bg-[#F4F4F4]">
              <Content>
                <select
                  id="filters"
                  className="outline-0"
                  value={selectedSection}
                  onChange={handleChange}
                >
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Video Editing">Video Editing</option>
                </select>
              </Content>
            </div>
          </div>
          <div className="w-full h-full flex flex-col sm:grid grid-cols-2 relative gap-5 text-white">
            {projectsData.map(
              (project, index) =>
                project.category === selectedSection && (
                  <div className="w-full h-full grid grid-rows-[60%, 40%]">
                    <div className="w-full  flex justify-center relative items-center rounded-tl-[20px] rounded-tr-[20px] overflow-hidden">
                      <div className="w-full h-full relative">
                        <img
                          src={project.img}
                          className="w-full h-full object-cover blur-[3px]"
                          alt="Homepage"
                        />
                        <div className="w-full h-full bg-black opacity-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <Heading
                          key={index}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold"
                        >
                          {project.title}
                        </Heading>
                      </div>
                    </div>

                    <div
                      className="w-full h-fit flex flex-col py-6 px-5 gap-5 rounded-bl-[20px] rounded-br-[20px]"
                      style={{ backgroundColor: project.tilecolor }}
                    >
                      <div className="w-11/12 sm:w-full md:w-[80%] xl:w-[60%] flex text-xs font-semibold justify-between">
                        {project.info.map((info, index) => (
                          <div
                            key={index}
                            className="w-24 h-9 flex justify-center items-center rounded-full"
                            style={{ backgroundColor: project.subbuttoncolor }}
                          >
                            {info}
                          </div>
                        ))}
                      </div>
                      <div className="w-full flex justify-between items-end">
                        <Content key={index} className="text-justify w-10/12">
                          {project.content}
                        </Content>
                        <div
                          className="w-12 h-12 rounded-full p-3"
                          style={{ backgroundColor: project.buttoncolor }}
                          id="projectdetails"
                        >
                          <img
                            src="/src/assets/Vector.svg"
                            className="w-full h-full"
                          ></img>
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
  );
}

export default Projects;
