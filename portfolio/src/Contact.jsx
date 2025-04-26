import React, { useRef, useState } from "react";
import Heading from "./Heading";
import Content from "./Content";
import emailjs from "@emailjs/browser";

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
          }
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
          <Heading>Have a project in mind?</Heading>
          <Content>Feel free to reach out! I'd love to collaborate.</Content>
        </div>
        <div className="w-full sm:w-[50%] h-full flex gap-6 justify-center sm:justify-start">
          <a
            href="https://in.linkedin.com/in/tharun-theja-boyalla-093070206"
            target="_blank"
          >
            <img
              src="/assets/linkedin.svg"
              className="w-15 h-15 2xl:w-20 2xl:h-20 bg-white rounded-full"
              alt="LinkedIn"
            />
          </a>
          <a href="https://github.com/TharunthejaB" target="_blank">
            <img
              src="/assets/github.svg"
              className="w-15 h-15 2xl:w-20 2xl:h-20 dark:invert"
              alt="GitHub"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=916300331752&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img
              src="/assets/whatsapp.svg"
              className="w-15 h-15 2xl:w-20 2xl:h-20"
              alt="WhatsApp"
            />
          </a>
        </div>
      </div>

      <div className="w-full sm:w-[50%] h-full p-8 flex flex-col gap-6 rounded-[20px] bg-[#f0f0f0] dark:bg-[#2F2F2F]">
        {successMessage && (
          <p className="text-green-500 font-medium text-sm">{successMessage}</p>
        )}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="w-full h-11 bg-white rounded-3xl px-5 outline-gray-300 dark:bg-[#444444] dark:text-gray-200"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="text"
            name="user_email"
            placeholder="Email"
            className="w-full h-11 bg-white rounded-3xl px-5 outline-gray-300 dark:bg-[#444444] dark:text-gray-200"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="w-full h-11 bg-white rounded-3xl px-5 outline-gray-400 dark:bg-[#444444] dark:text-gray-200"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}

          <textarea
            name="message"
            placeholder="Message"
            className="w-full h-48 bg-white rounded-3xl text-start p-5 outline-gray-300 dark:bg-[#444444] dark:text-gray-200"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <input
            type="submit"
            value="Submit"
            className="w-full h-14 bg-[#4BB76F] text-white rounded-full cursor-pointer hover:bg-[#3aa65c] transition-all"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
