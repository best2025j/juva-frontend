import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex h-14 py-6 justify-between items-center">
      <Link
        to="/login"
        className="text-2xl font-semibold flex items-center space-x-3 text-primary"
      >
        <img src={logo} alt="" className="w-10 inline-block items-center" />
        <span> JUVA </span>
      </Link>

      <ul className="md:flex hidden justify-end items-center flex-1 pl-[100px]">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-inter font-normal cursor-pointer text-[14px] ${
              active === nav.title ? "text-white" : "text-primary"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        <li className="px-14">
          <Link
            to="/login" // Changed to '/login' to navigate to the login page
            className="font-inter font-medium text-[14px] text-white bg-primary px-6 py-2 rounded-full"
          >
            Login/Sign Up
          </Link>
        </li>
      </ul>

      {/* mobile view */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[20px] h-[20px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-8 bg-black-gradient absolute top-[58px] right-0 justify-center flex mx-auto left-0 w-full h-full z-50 rounded`}
        >

          <ul className="flex justify-center items-center w-full flex-1 flex-col h-full">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[14px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                } ${(index === navLinks.length - 1 ? "mb-0" : "mb-4", "pb-5")}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            <li className="mb-4">
              <Link
                to="/login"
                className="font-inter font-medium text-[14px] text-white bg-primary px-6 py-2 rounded-full"
              >
                Login/Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
