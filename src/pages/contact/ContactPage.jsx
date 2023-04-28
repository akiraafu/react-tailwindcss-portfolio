import React from "react";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <>
      <section className="border-x-2 border-black">
        <div className="w-full border-r-2 mx-auto flex flex-col md:flex-row">
          <div className="left-side md:w-1/2 md:border-x-2 border-black ">
            <div className="p-10">
              <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 ">
                Contact
              </h1>
              <p className="mb-6 text-lg ">
                Ever want to contact me? If you're looking for help with your
                creative business, have a burning question to ask me, or simply
                want to interact, the quickest way to get my attention is to hit
                me up on email.
              </p>
              <div className="text-lg font-bold">
                <p>Find me on:</p>
                <div className="mb-8 text-4xl flex gap-5">
                  <i class="bx bxl-linkedin-square"></i>
                  <i class="bx bxl-github"></i>
                  <i class="bx bxl-instagram-alt"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="scrollbar md:w-1/2 right-side md:overflow-y-scroll flex flex-col justify-start items-start gap-10"
            id="scrollbar"
          >
            <div className="w-full allContacts flex flex-col md:flex-row justify-center items-start">
              <div class="md:w-1/2 w-full flex flex-col justify-center items-center mb-10 gap-5 p-5 border-y-2 md:border-t-0 border-black">
                <i class="bx bx-envelope text-3xl"></i>
                <h4>Email</h4>
                <h5 className="font-bold">akirafu0720@gmail.com</h5>
                <a href="mailto:akirafu0720@gmail.com" target="_blank">
                  Send an Email
                </a>
              </div>

              <div class="md:w-1/2 w-full flex flex-col justify-center items-center m-b-10 gap-5 p-5 md:border-l-2 border-b-2 border-black">
                <i class="bx bxl-facebook-square text-3xl"></i>
                <h4>Messenger</h4>
                <h5 className="font-bold ">Akira(Junrong)</h5>
                <a href="https://m.me/junrong.fu" target="_blank">
                  Send a Message
                </a>
              </div>
            </div>

            <div className="w-full mb-20">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
