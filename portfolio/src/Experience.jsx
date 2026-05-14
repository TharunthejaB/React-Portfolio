import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import Subheading from "./subheading";

function Experience() {
  const experience = [
    {
      title: "Software Engineer",
      company: "CABCS Group India Pvt Ltd.",
      from: "Oct,2024",
      to: "Present",
      place: "Puducherry",
    },
    {
      title: "Software Engineer Trainee",
      company: "CABCS Group India Pvt Ltd.",
      from: "Apr,2023",
      to: "Oct,2023",
      place: "Puducherry",
    },
    {
      title: "Web Developer",
      company: "KodNest Technologies",
      from: "Oct,2022",
      to: "Apr,2023",
      place: "Bengaluru",
    },
  ];
  const tileContent = [
    {
      img: "/assets/web.svg",
      title: "Responsive Web Development",
      description: "Building websites that works seamlessly on all devices.",
      color: "#f9eC63",
    },
    {
      img: "/assets/ux.svg",
      title: "UI/UX Implementation",
      description:
        "Turning designs into beautiful and intiutive user interfaces.",
      color: "#2DDB44",
    },
    {
      img: "/assets/performance.svg",
      title: "Performance Optimization",
      description: "Ensuring fast load times and smooth user interactions.",
      code: "#3FEBB9",
    },
    {
      img: "/assets/recycle.svg",
      title: "Component Reusability",
      description: "Writing clean, reusable, and maintainable components.",
    },
  ];
  return (
    <section className="w-full h-full py-10 sm:py-20 flex flex-col justify-center gap-8 sm:gap-16  border-b-gray-500/50 border-b-1">
      <div className="w-full flex flex-col gap-5">
        <Content color="red">EXPERIENCE</Content>
        <Subheading>My professional Journey</Subheading>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-full gap-4.5">
        <div className="relative flex flex-col gap-12 pl-10">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 h-full w-[2px] bg-gradient-to-b from-red-500 to-red-400" />
          {experience.map((data, index) => (
            <div className="relative">
              {/* Glow dot */}
              <div className="absolute -left-[34px] top-2 w-4 h-4 rounded-full bg-red-400 shadow-[0_0_12px_#fb7185]" />

              <h3 className="text-white text-2xl font-semibold">
                {data.title}
              </h3>

              <p className="text-gray-400 mt-1">
                {data.company} - {data.place}
              </p>

              <p className="text-red-400 text-sm mt-2 font-medium">
                {data.from} - {data.to}
              </p>

              <p className="text-gray-300 mt-3 leading-relaxed max-w-xl">
                Building responsive web applications using React.js,
                collaborating with designers and backend developers to deliver
                high-quality products.
              </p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-3/4 lg:w-1/2 h-full p-10 rounded-[20px] bg-[#202020] flex flex-col justify-around gap-5">
          <span className="text-red-400 font-bold drop-shadow-[0_0_10px_#ef4444] text-xl">
            What I do
          </span>
          <div className="w-full flex flex-col gap-5">
            {tileContent.map((data, index) => (
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[#333333] p-2 rounded-lg border-1 border-gray-500/30 flex justify-center items-center">
                  <img
                    src={data.img}
                    style={{
                      filter: `drop-shadow(0 0 10px ${data.color})`,
                    }}
                  ></img>
                </div>
                <h1 className="text-white text-xl font-medium">
                  {data.title}
                  <Content>{data.description}</Content>
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
