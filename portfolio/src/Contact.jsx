import React from "react";

function Contact() {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="w-[50%] h-full flex flex-col gap-8">
        <div>
          <h2>Have a project in mind?</h2>
          <p>Feel free to reach out! I'd love to collaborate.</p>
        </div>
        <div className="w-[50%] h-full flex gap-6">
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
      <div className="w-[50%] h-full p-8 flex flex-col gap-8.5 bg-gray-400 rounded-[20px]">
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
