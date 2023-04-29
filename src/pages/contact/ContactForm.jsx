import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t5oaxze",
        "template_6m6rrsl",
        form.current,
        "R321p3jpE6qwXirhc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form id="myform" ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="border-black  border-y-2"
      />

      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="border-black border-y-2"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="7"
        required
        className="border-black  border-y-2 mb-5"
      ></textarea>
      <button type="submit" class="button btn-contact font-bold mx-auto">
        Leave Message
      </button>
    </form>
  );
};

export default ContactForm;
