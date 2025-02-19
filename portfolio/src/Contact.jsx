import React from "react";
import Heading from "./Heading";
import Content from "./Content";

function Contact() {
  return (
    <section className="w-full h-full py-10 sm:py-20 flex flex-col sm:flex-row justify-center items-center gap-8">
      <div className="w-full sm:w-[50%] h-full flex flex-col gap-8 text-center sm:text-left">
        <div>
          <Heading>Have a project in mind?</Heading>
          <Content>Feel free to reach out! I'd love to collaborate.</Content>
        </div>
        <div className="w-full sm:w-[50%] h-full flex gap-6 justify-center sm:justify-start">
          <div>
            <img src="/src/assets/react.svg" className="w-20 h-20"></img>
          </div>
          <div>
            <img src="/src/assets/react.svg" className="w-20 h-20"></img>
          </div>
          <div>
            <img src="/src/assets/react.svg" className="w-20 h-20"></img>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[50%] h-full p-8 flex flex-col gap-8.5 bg-gray-400 rounded-[20px]">
        <input className="w-full h-11 bg-red-500"></input>
        <input className="w-full h-11 bg-red-500"></input>
        <input className="w-full h-11 bg-red-500"></input>
        <input className="w-full h-48 bg-red-500"></input>
        <button className="w-full h-14 bg-green-300 text-white rounded-full">
          Submit
        </button>
      </div>
    </section>
  );
}

export default Contact;
