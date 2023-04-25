import { socials } from "../../data";
import { HeroMd } from "../../assets";
import Scroller from "../../components/Scroller";
import Contact from "../../components/Contact";

const About = () => {
  return (
    <>
      <section className="py-12 border-x-2 border-black">
        <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              my story
            </h1>
            <p className="mb-2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              obcaecati magni libero nisi ad similique.Est, obcaecati magni
              libero nisi ad similique.
            </p>
            <p className="mb-4 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              obcaecati magni libero nisi ad similique.Est, obcaecati magni
              libero nisi ad similique. obcaecati magni libero nisi ad
              similique.Est, obcaecati magni libero nisi ad similique.
            </p>
            <div className="text-lg font-bold">Find me on:</div>
            <div className="mb-8">
              <ul className="flex gap-6">
                {socials.map((item, index) => (
                  <li key={index}>
                    <a
                      target="_blank"
                      href={item.link}
                      rel="noopener noreferrer"
                      className="py-2 flex flex-col md:flex-row gap-2 items-center justify-center"
                    >
                      <img src={item.icon} alt={item.alt} width="" height="" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img
              src={HeroMd}
              alt="img"
              className="border-black border-2 rounded-xl mb-8"
            />
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
