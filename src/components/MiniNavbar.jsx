import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const MiniNavbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  // Handle navigation to the login page
  const handleLoginClick = () => {
    navigate("/login");
  };

  // Handle navigation to different sections within the page
  const handleNavClick = (title) => {
    setActive(title);
    // You can implement scroll-to-section functionality here if needed
  };

  return (
    <div className="bg-white rounded-lg w-full flex items-center h-14 py-6 justify-between">
      <div className="font-bold text-purple-800 whitespace-nowrap">
        <a
          href="/"
          className="w-9 h-9 text-2xl font-semibold flex items-center space-x-3 text-primary"
        >
          <div className="flex items-center px-2">
            <img src={logo} alt="" className="h-10 w-10 " />
            <span> JUVA </span>
          </div>
        </a>
      </div>

      <ul className="md:flex hidden">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`flex-auto self-stretch my-auto font-inter font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-primary"
            } ${
              navLinks.indexOf(nav) === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            onClick={() => handleNavClick(nav.title)}
          >
            {nav.title}
          </li>
        ))}

        <li className="px-14">
          <button
            onClick={handleLoginClick}
            className="grow justify-center self-stretch px-8 py-2 whitespace-nowrap max-md:px-5 font-inter font-medium text-[14px] text-white bg-primary rounded-full"
          >
            Login/Sign Up
          </button>
        </li>
      </ul>

      {/* mobile view */}
      <div className="md:hidden flex flex-1 justify-end items-center p-4">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className={`w-[28px] h-[28px] object-contain p-1 bg-slate-400 ${
            toggle ? "close-color" : "menu-color"
          }`}
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-8 bg-black-gradient absolute top-[64px] right-0 justify-center flex mx-auto left-0 w-[90%] h-full z-10 rounded`}
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
              <button
                onClick={handleLoginClick}
                className="font-inter font-medium text-[14px] text-white bg-primary px-8 py-2 rounded-full"
              >
                Login/Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
