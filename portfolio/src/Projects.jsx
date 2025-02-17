import React from "react";

function Projects({ projectsData }) {
  return (
    <section className="w-full h-full py-20 flex">
      <div className="w-full h-full flex flex-col items-center gap-11">
        <h2>Projects</h2>
        <div className="w-full flex flex-col gap-14">
          <div className="w-full flex justify-end">
            <div className="h-8 w-2xs px-4 flex justify-center items-center bg-amber-300 rounded-full">
              <p>Personal Projects</p>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-5 text-white">
            {projectsData.map((project, index) => (
              <div className="w-full grid grid-rows-2 ">
                <div className="w-full flex justify-center relative items-center rounded-tl-[20px] rounded-tr-[20px] overflow-hidden bg-amber-500">
                  <h2 key={index}>{project.title}</h2>
                </div>

                <div className="w-full h-full flex flex-col py-6 px-5 gap-5 bg-green-600 rounded-bl-[20px] rounded-br-[20px]">
                  <div className="w-[40%] flex text-xs font-semibold justify-between">
                    {project.info.map((info, index) => (
                      <div
                        key={index}
                        className="w-24 h-9 flex justify-center items-center rounded-full bg-green-300"
                      >
                        {info}
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-full flex justify-between items-end">
                    <p key={index} className="text-justify w-10/12">
                      {project.content}
                    </p>
                    <div className="w-12 h-12 rounded-full bg-green-300"></div>
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
