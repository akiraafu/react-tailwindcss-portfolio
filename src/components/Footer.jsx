import { Link, NavLink } from "react-router-dom";
import { Logo } from "../assets/index";

const activeClassName =
  "relative before:content-['*'] before:-top-4 before:left-1/2 before:-ml-1 before:absolute before:text-amber-400";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-[180px_1fr_180px] border-black border-2 bg-white">
      <Link
        to="/"
        className="flex justify-center py-4 logoLink border-black border-r-2"
      >
        <img className="logo" src={Logo} alt="Akira" height="15" />
      </Link>
      <Link
        to="/contact"
        className="md:col-start-3 border-black md:border-l-2 flex gap-2 items-center justify-center text-lg bg-yellow-300 hover:bg-yellow-500 ease-in-out duration-75"
      >
        <i class="bx bx-right-arrow-alt"></i>
        <span> Let's Talk</span>
      </Link>
      <div className="col-span-2 md:row-start-1 md:col-start-2 md:col-end-3 border-t-2 border-black md:border-t-0 flex items-center justify-center p-4 text-center">
        &copy; 2023 &#x2022; Built with ReactJS
      </div>
    </footer>
  );
};

export default Footer;
