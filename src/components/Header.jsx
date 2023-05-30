import { Link, NavLink } from "react-router-dom";
import { Logo } from "../assets/index";

const activeClassName =
  "relative before:content-['*'] before:-top-4 before:left-1/2 before:-ml-1 before:absolute before:text-amber-400";

const Header = () => {
  // let mybutton = document.getElementById("backToTop");
  //   window.onscroll = function() {scrollFunction()};
  //   function scrollFunction() {
  //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //       mybutton.style.display = "block";
  //     } else {
  //       mybutton.style.display = "none";
  //     }
  //   }
    
  // const handleClick = ()=>{
  //     document.body.scrollTop = 0;
  //     document.documentElement.scrollTop = 0;

  // }
  return (
    <header className="grid grid-cols-2 md:grid-cols-[180px_1fr_180px] border-black border-2 bg-white">
       {/* <button onClick={handleClick} id="backToTop" title="Go to top"><i className='bx bxs-to-top'></i></button> */}
      <Link
        to="/"
        className="flex justify-center py-4 logoLink border-black border-r-2"
      >
        <img className="logo" src={Logo} alt="Akira" height="15" />
      </Link>
      <Link
        to="/contact"
        className="md:col-start-3 border-black md:border-l-2 flex gap-2 items-center justify-center text-lg bg-fuchsia-300 hover:bg-fuchsia-500 ease-in-out duration-75"
      >
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
        <span> Let's Talk</span>
      </Link>
      <nav className="col-span-2 md:row-start-1 md:col-start-2 md:col-end-3 border-t-2 border-black md:border-t-0 flex items-center justify-center">
        <ul className="flex gap-6 max-w-sm overflow-auto snap-always p-4 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              About
            </NavLink>
          </li>
         
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
