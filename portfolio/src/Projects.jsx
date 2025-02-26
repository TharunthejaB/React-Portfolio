import React from "react";
import Heading from "./Heading";
import Content from "./Content";

function Projects({ projectsData }) {
  return (
    <section className="w-full h-full py-10 sm:py-20 flex">
      <div className="w-full h-full flex flex-col items-center gap-11">
        <Heading>Projects</Heading>
        <div className="w-full flex flex-col gap-14">
          <div className="w-full flex justify-end">
            <div className="h-8 w-[40%] sm:w-2xs px-4 flex justify-center items-center bg-amber-300 rounded-full">
              <Content>Personal Projects</Content>
            </div>
          </div>
          <div className="w-full flex flex-col sm:grid grid-cols-2 gap-5 text-white">
            {projectsData.map((project, index) => (
              <div className="w-full grid grid-rows-2 ">
                <div className="w-full flex justify-center relative items-center rounded-tl-[20px] rounded-tr-[20px] overflow-hidden bg-amber-500">
                  <Heading key={index}>{project.title}</Heading>
                </div>

                <div
                  className="w-full h-full flex flex-col py-6 px-5 gap-5 rounded-bl-[20px] rounded-br-[20px]"
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
                  <div className="w-full h-full flex justify-between items-end">
                    <Content key={index} className="text-justify w-10/12">
                      {project.content}
                    </Content>
                    <div
                      className="w-12 h-12 rounded-full"
                      style={{ backgroundColor: project.buttoncolor }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
