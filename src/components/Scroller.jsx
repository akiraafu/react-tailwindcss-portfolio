import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Scroller = ({ text, link }) => {
  return (
    <section>
      <Link to={link}>
        <Marquee
          pauseOnHover
          gradient={false}
          className="bg-fuchsia-300 border-t-2 border-black py-2 font-bold text-4xl"
        >
          {text}
        </Marquee>
      </Link>
    </section>
  );
};

export default Scroller;
