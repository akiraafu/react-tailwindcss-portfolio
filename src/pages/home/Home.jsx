import React from "react";
import { HeroSm, HeroMd, HeroLg } from "../../assets";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="border-black border-x-2">
      <section className="py-10 lg:py-36 xl:py-48">
        <div className="container mx-auto gap-8 px-4 flex flex-col md:flex-row items-center">
          <div className="md:flex-1 md:order-2">
            <picture className="flex drop-shadow-[10px_-10px_0_rgba(250,204,21,1)] border-black rounded-xl rounded-tl-[150px] rounded-br-[150px] overflow-hidden">
              <source
                srcSet={HeroSm}
                width="363"
                height="222"
                media="(max-width:400px)"
                type="image/jpg"
              />
              <source
                srcSet={HeroMd}
                width="608"
                height="372"
                media="(max-width:400px)"
                type="image/jpg"
              />
              <img src={HeroLg} alt="" width="870" height="532" />
            </picture>
          </div>
          <div className="md:flex-1">
            <h2 className="text-lg md:text-xl font-bold uppercase">
              Hi 👋 I'm Akira
            </h2>
            <h1
              className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4
            "
            >
              Web Developer <span className="text-yellow-400">.</span>
              <p>
                Passionator<span className="text-violet-900">.</span>
              </p>
            </h1>
            <p className="text-lg max-w-xl mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              quisquam facere asperiores expedita enim aspernatur ratione
              laboriosam iste voluptas soluta odio, atque, ipsa nam eos
              cupiditate vero alias suscipit exercitationem!
            </p>

            <div className="flex items-baseline gap-4">
              <HashLink
                to="#work"
                className="px-6 py-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white"
              >
                Selected Work
              </HashLink>
              <Link
                to="/contact"
                className="px-6 py-4 rounded-md text-black flex items-center gap-2 "
              >
                Let's Talk <i class="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
