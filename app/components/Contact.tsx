"use client";
import React, { useState } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "12c2c2c7-ae7c-432d-b43c-635d68fecfb1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section
      id="contact"
      className="scroll-mt-[12vh] py-20 flex flex-col gap-8 justify-center items-center lg:px-[6rem] px-[1rem] sm:px-[2rem]"
    >
      <div className="text-center">
        <p className="ovo">Contact</p>
        <p className="ovo text-3xl">Get in touch.</p>
      </div>

      <ContactForm onSubmit={onSubmit} result={result} />
    </section>
  );
};

export default Contact;
