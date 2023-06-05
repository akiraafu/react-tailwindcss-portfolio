import Scroller from "../../components/Scroller";
import Contact from "../../components/Contact";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="border-x-2 border-black">
        <div className="w-full border-r-2 mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/2 md:border-x-2 border-black ">
            <div className="p-10 md:p-20">
              <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
                About Me
              </h1>
              <p className="mb-2 text-lg">
                As an aspiring web developer, I am fascinated by the potential
                of websites to showcase work and ideas to a global audience.
                Websites offer a dynamic platform that is both lightweight and
                flexible, providing endless possibilities for creativity and
                innovation.
              </p>
              <p className="mb-4 text-lg">
                Being an IT graduate with a technical background and a
                commitment to continuous improvement, I am confident in my
                ability to contribute to your development team. If you are
                seeking a highly motivated and driven individual whether as an
                intern or junior developer, I would be honored to have the
                opportunity to work with you.
              </p>
              <div className="text-lg font-bold">
                <p>Find me on:</p>
                <div className="mb-8 text-4xl flex gap-5">
                  <Link to="https://www.linkedin.com/in/jrfu/" target="_blank">
                    <i className="bx bxl-linkedin-square"></i>
                  </Link>
                  <Link to="https://github.com/akiraafu" target="_blank">
                    <i className="bx bxl-github"></i>
                  </Link>

                  {/* <Link to="#" target="_blank">
                    <i className="bx bxl-instagram-alt"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-start items-center flex-col ">
            <h2 className="w-full text-2xl font-bold border-y-2 md:border-t-0 border-black p-5 ">
              My Tech Skills
            </h2>
            <div className="w-full flex flex-col justify-evenly items-center ">
              <div className="w-full text-2xl  border-black p-5 ">
                <p className="">Programming Languages</p>
                <div className="w-full text-6xl flex flex-wrap gap-5 mt-3">
                  <i className="devicon-html5-plain-wordmark colored"></i>

                  <i className="devicon-css3-plain-wordmark colored"></i>

                  <i className="devicon-javascript-plain colored"></i>

                  <i className="devicon-php-plain colored"></i>

                  {/* <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                    className="w-14 h-14"
                  /> */}
                </div>
              </div>
              <div className="w-full  text-2xl  border-black p-5 ">
                <p>Framework & Libraries</p>
                <div className="w-full text-6xl flex flex-wrap gap-5 mt-3">
                  <i className="devicon-bootstrap-plain colored"></i>

                  <i className="devicon-tailwindcss-original-wordmark colored"></i>

                  <i className="devicon-sass-original colored"></i>

                  <i className="devicon-react-original-wordmark colored"></i>

                  <i className="devicon-wordpress-plain colored"></i>
                </div>
              </div>
              <div className="w-full h-1/3 text-2xl p-5">
                <p>Tools</p>
                <div className="w-full text-6xl flex flex-wrap gap-5 mt-3">
                  <i className="devicon-nodejs-plain-wordmark colored"></i>

                  <i className="devicon-npm-original-wordmark colored"></i>

                  <i className="devicon-git-plain-wordmark colored"></i>

                  <i className="devicon-mongodb-plain-wordmark colored"></i>

                  <i className="devicon-firebase-plain-wordmark colored"></i>

                  <i className="devicon-mysql-plain-wordmark colored"></i>

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    className="w-14 h-14"
                  />

                  <i className="devicon-yarn-plain-wordmark colored"></i>

                  <i className="devicon-heroku-plain-wordmark colored"></i>
                </div>
              </div>
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
      <Contact />
    </>
  );
};

export default About;
