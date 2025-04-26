import React from "react";
import Heading from "./Heading";
import Content from "./Content";

function Experience({ experienceData }) {
  return (
    <section className="w-full h-full py-10 sm:py-20 flex flex-col justify-center items-center gap-8 sm:gap-16">
      <div className="relative">
        <Heading>Experience</Heading>
        <img
          src="/assets/expul.svg"
          className="w-full h-full absolute  top-5"
        ></img>
      </div>
      <div className="w-full h-full flex flex-col gap-10 items-center">
        {experienceData.map((data, index) => (
          <div className="w-full h-full flex" key={index}>
            <div className="w-9/12 flex flex-col justify-start gap-4.5">
              <Heading>{data.title}</Heading>
              <Content>
                {data.company} | {data.place}
              </Content>
            </div>
            <div className="w-3/12 flex justify-end items-center">
              <Content>
                {data.from}- {data.to}
              </Content>
            </div>
          </div>
        ))}
      </div>
      <Content className="text-center">
        Want to know more about my experience? Download my
        <br></br>
        <a href="" className="hover:text-blue-400">
          Resume here.
        </a>
      </Content>
    </section>
  );
}

export default Experience;
