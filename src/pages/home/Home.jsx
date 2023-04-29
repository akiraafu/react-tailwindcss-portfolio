import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Scroller from "../../components/Scroller";
import { portfolioData } from "../../data";
import { RadiantGradient, Services } from "../../assets";
import backgroundImage from "../../assets/background.jpg";
import HandwriteArrow from "../../assets/handwrite-arrow.svg";
import Dots from "../../assets/Group.svg";
import Burst from "../../assets/Burst-pucker-2.svg";

import Contact from "../../components/Contact";

const Home = () => {
  return (
    <div className="border-black border-x-2">
      <section className="h-fit">
        <div className="w-full h-full mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full right-side md:w-1/2 border-black border-x-2 md:order-2 flex flex-col">
            <div className="image w-full h-1/2 bg-purple-100">
              <img
                src={backgroundImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-1/2 sm:invisible md:visible flex md:flex-row border-black border-t-2">
              <div className="w-1/2 text-lg font-bold bg-yellow-100 border-black border-r-2">
                <div className="h-full flex justify-center items-center">
                  <img src={Burst} className="w-1/2" />
                </div>
              </div>
              <div className="w-1/2 bg-blue-100 flex justify-center items-center ">
                <img src={HandwriteArrow} className="w-1/2 h-1/2" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full p-20 ">
            <h2 className="text-lg md:text-xl font-bold uppercase">
              Hi 👋 I'm Akira
            </h2>
            <h1
              className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4
            "
            >
              Web Developer <span className="text-yellow-400">.</span>
            </h1>
            <p className="text-lg max-w-xl mb-6">
              As a passionate and driven IT student, I am fascinated by the
              endless possibilities of web development. I am committed to keep
              learning and developing.
            </p>
            <div className="text-lg font-bold">
              <p>Find me on:</p>
              <div className="mb-8 text-4xl flex gap-5">
                <i class="bx bxl-linkedin-square"></i>
                <i class="bx bxl-github"></i>
                <i class="bx bxl-instagram-alt"></i>
              </div>
            </div>
            <div className="flex items-baseline gap-4">
              <HashLink to="#work" className="font-bold">
                <button className="button">Download CV</button>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
      <Scroller
        text={
          " 😃 Let's get to work! ✨ Have a project in mind ? 😃 Let's get to work! ✨ Have a project in mind ?  😃 Let's get to work! ✨ Have a project in mind ? 😃 Let's get to work! ✨ Have a project in mind ?"
        }
        link="/contact"
      />

      <section
        id="work"
        className="px-4 pb-12 border-black border-t-2 bg-teal-600 bg-fixed"
        style={{ backgroundImage: "url(" + RadiantGradient + ")" }}
      >
        <div className="container mx-auto">
          <div className=" text-center py-12">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Seleted Work
            </h1>
            <p className="max-w-xl mx-auto text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              repellat minima aliquam distinctio est culpa nemo adipisci.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-28">
            {portfolioData &&
              portfolioData.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className="md:even:pt-12 ease-in-out duration-75 hover:translate-y-[-4px] hover:drop-shadow-[10px_8px_0_rgba(0,0,0,1)]"
                >
                  <div className="border-2 border-black rounded-xl overflow-hidden bg-black">
                    <img src={item.thumnail} alt={item.alt} loading="lazy" />
                  </div>
                  <div className="bg-white border-x-2 border-black border-b-2 rounded-bl-xl rounded-br-xl mx-4 p-4 text-lg flex justify-between gap-4 items-center">
                    <div>
                      <span className="font-bold"> {item.title} </span>
                      <span className="text-zinc-400">
                        &#9679; {item.category}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
          </div>
          <Link
            to={"/work"}
            className="flex text-xl gap-4 font-bold justify-center mb-8 "
          >
            View All Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
      <section className="border-black border-t-2 px-4 py-12">
        <div className="container mx-auto">
          <div className=" text-center py-12">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Services
            </h1>
            <p className="max-w-xl mx-auto text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              repellat minima aliquam distinctio est culpa nemo adipisci.
            </p>
          </div>
          <div className="text-black py-12 grid lg:grid-cols-4 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Web Design</h3>
              <p className="mb-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                vitae voluptas et optio?
              </p>
              <Link to="#" className="flex gap-2 items-center font-bold mb-14">
                Read more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <h3 className="text-3xl font-bold mb-4">Web Development</h3>
              <p className="mb-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                vitae voluptas et optio?
              </p>
              <Link to="#" className="flex gap-2 items-center font-bold mb-14">
                Read more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center mb-12 md:mb-0 col-span-2">
              <img
                src={Services}
                alt="Services"
                width="611"
                height="764"
                loading="lazy"
                className="border-2 border-black rounded-full w-3/5 drop-shadow-[10px_-10px_0_rgba(240,171,252,1)]"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Branding</h3>
              <p className="mb-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                vitae voluptas et optio?
              </p>
              <Link to="#" className="flex gap-2 items-center font-bold mb-14">
                Read more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <h3 className="text-3xl font-bold mb-4">WordPress</h3>
              <p className="mb-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                vitae voluptas et optio?
              </p>
              <Link to="#" className="flex gap-2 items-center font-bold mb-14">
                Read more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Home;
