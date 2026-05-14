import React, { useRef, useState } from "react";
import Heading from "./Heading";
import Content from "./Content";
import emailjs from "@emailjs/browser";
import Subheading from "./subheading";

function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .sendForm("service_i63r30c", "template_ia161j7", form.current, {
          publicKey: "2NdvGwjC7PxweRZv4",
        })
        .then(
          () => {
            setSuccessMessage("Thanks! Your message has been sent.");
            form.current.reset();
            setErrors({});
            setTimeout(() => setSuccessMessage(""), 5000);
          },
          (error) => {
            setSuccessMessage("Oops! Something went wrong. Please try again.");
          },
        );
    }
  };

  const validate = () => {
    const formData = new FormData(form.current);
    const name = formData.get("user_name")?.trim();
    const email = formData.get("user_email")?.trim();
    const phone = formData.get("phone")?.trim();
    const message = formData.get("message")?.trim();

    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!email || !/^\S+@\S+\.\S+$/.test(email))
      newErrors.email = "Valid email is required.";
    if (!phone || phone.length < 10)
      newErrors.phone = "Valid phone number is required.";
    if (!message) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <section
      className="w-full h-full py-10 sm:py-20 flex flex-col sm:flex-row justify-center items-center gap-8"
      id="contact"
    >
      <div className="w-full sm:w-[50%] h-full flex flex-col gap-8 text-center sm:text-left">
        <div className="flex flex-col gap-2">
          <Content color="red">LET'S WORK TOGETHER</Content>

          <Subheading>Have a project in mind?</Subheading>
          <h1 className="text-white text-xl">
            Let's build something amazing together
          </h1>
        </div>
      </div>

      <div className="w-full sm:w-[50%] h-full p-8 flex flex-col gap-6 rounded-[20px] bg-[#333333]">
        {successMessage && (
          <p className="text-green-500 font-medium text-sm">{successMessage}</p>
        )}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 flex flex-col items-end"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="w-full h-11 bg-[#444444] rounded-3xl px-5 outline-gray-300 text-gray-200 focus:outline-[#C93D3D]"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="text"
            name="user_email"
            placeholder="Email"
            className="w-full h-11 bg-[#444444] rounded-3xl px-5 outline-gray-300 text-gray-200 focus:outline-[#C93D3D]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="w-full h-11 bg-[#444444] rounded-3xl px-5 outline-gray-400 text-gray-200 focus:outline-[#C93D3D]"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}

          <textarea
            name="message"
            placeholder="Message"
            className="w-full h-48 bg-[#444444] rounded-3xl text-start p-5  text-gray-200 focus:outline-[#C93D3D]"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <input
            type="submit"
            value="Submit"
            className="rounded-[10px] w-32 h-10 cursor-pointer text-white font-medium hover:bg-[#831e2e] bg-[#b92c43] transition-all duration-300"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
