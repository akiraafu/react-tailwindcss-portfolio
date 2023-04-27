import React from "react";
import { socials } from "../../data";
import { HeroMd } from "../../assets";
import Scroller from "../../components/Scroller";
import Contact from "../../components/Contact";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <>
      <section className="py-12 border-x-2 border-black">
        <div className="container w-full mx-auto px-4 flex flex-col">
          <div className="md:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 ">
              Contact
            </h1>
            <p className="mb-6 text-lg">
              Ever want to contact me? If you're looking for help with your
              creative business, have a burning question to ask me, or simply
              want to interact, the quickest way to get my attention is to hit
              me up on email.
            </p>
          </div>
          <div className="w-full flex flex-col justify-start items-start md:flex-row gap-10">
            <div className="w-full md:w-1/2 allContacts flex flex-col justify-center items-start px-10 max-w-md">
              <div class="w-full flex flex-col justify-center items-center mb-10 gap-5 p-5 border-2 border-black">
                <i class="bx bx-envelope text-3xl"></i>
                <h4>Email</h4>
                <h5 className="font-bold">junrongfu6@gmail.com</h5>
                <a href="mailto:junrongfu6@gmail.com" target="_blank">
                  Send an Email
                </a>
              </div>

              <div class="w-full flex flex-col justify-center items-center m-b-10 gap-5 p-5 border-2 border-black">
                <i class="bx bxl-facebook-square text-3xl"></i>
                <h4>Messenger</h4>
                <h5 className="font-bold">Junrong Fu (Akira)</h5>
                <a href="https://m.me/junrong.fu" target="_blank">
                  Send a Message
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
