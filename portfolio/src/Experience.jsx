import React from "react";

function Experience({ experienceData }) {
  return (
    <section className="w-full h-full py-20 flex flex-col justify-center items-center gap-16">
      <h2>Experience</h2>
      <div className="w-full h-full flex flex-col gap-10 items-center">
        {experienceData.map((data, index) => (
          <div className="w-full h-full flex" key={index}>
            <div className="w-9/12 flex flex-col justify-start gap-4.5">
              <h2>{data.title}</h2>
              <p>
                {data.company} | {data.place}
              </p>
            </div>
            <div className="w-3/12 flex justify-end items-center">
              <p>
                {data.from}- {data.to}
              </p>
            </div>
          </div>
        ))}
        <p>
          Want to know more about my experience? Download my <a>resume here.</a>
        </p>
      </div>
    </section>
  );
}

export default Experience;
