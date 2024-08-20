import { HiOutlineHome } from "react-icons/hi2";
import { FaHeartbeat } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function MainNav() {
  const location = useLocation();
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const inactiveLink = "hover:text-primary active:text-primary ";
  // Added 'active-link' class
  const activeLink = inactiveLink + " text-[#00AFF0]";
  useState;

  return (
    <nav className="w-full h-full pt-8">
      <ul className="flex space-y-4 flex-col grow px-4 pb-4 mx-auto w-full font-normal text-xl font-inter bg-purple-50 text-stone-500 max-md:px-5 max-md:mt-10">
        <li className={isActiveLink("/") ? activeLink : inactiveLink}>
          <NavLink
            exact="true"
            to="/dashboard"
            className="flex items-center p-2 gap-2"
          >
            <HiOutlineHome className="w-6 h-6 text-primary visited:text-white hover:text-white hover:bg-primary" />
            <span className="text-base">Dashboard</span>
          </NavLink>
        </li>
        <li className={isActiveLink("/courses") ? activeLink : inactiveLink}>
          <NavLink to="/vitals" className="flex items-center p-2 gap-2">
            <FaHeartbeat className="w-6 selection:aspect-square text-primary hover:text-white hover:bg-primary" />
            <span className="text-base"> Vitals</span>
          </NavLink>
        </li>{" "}
        <li className={isActiveLink("/courses") ? activeLink : inactiveLink}>
          <NavLink
            className="flex items-center p-2 gap-2"
            to="/book-appointment"
          >
            <FaUserDoctor className="w-6 aspect-square  text-primary hover:text-white hover:bg-primary" />

            <span className="text-base"> Book Appointment</span>
          </NavLink>
        </li>{" "}
        <li className={isActiveLink("/courses") ? activeLink : inactiveLink}>
          <NavLink
            className="flex items-center p-2 gap-2"
            to="/payment-gateway"
          >
            <MdOutlinePayments className="w-6 aspect-square text-primary hover:text-white hover:bg-primary" />
            <span className="text-base"> Payment Gateway</span>
          </NavLink>
        </li>{" "}
        <li className={isActiveLink("/courses") ? activeLink : inactiveLink}>
          <NavLink className="flex items-center p-2 gap-2" to="/secure-chat">
            <BsChatDotsFill className="w-6 aspect-square text-primary hover:text-white hover:bg-primary" />
            <span className="text-base"> Secure Chat</span>
          </NavLink>
        </li>{" "}
        <li className={isActiveLink("/courses") ? activeLink : inactiveLink}>
          <NavLink
            className="flex items-center p-2 gap-2"
            to="/patient-profile"
          >
            <IoPersonCircleOutline className="w-6 aspect-square text-primary hover:text-white hover:bg-primary" />
            <span className="text-base"> Patient Profile</span>{" "}
          </NavLink>
        </li>
      </ul>

      {/* <ul className="flex flex-col grow px-4 pb-4 mx-auto w-full font-normal text-xl font-inter bg-purple-50 text-stone-500 max-md:px-5 max-md:mt-10">
        <NavLink
          to="/dashboard"
          className="flex gap-5 justify-between p-2 mt-8 text-white whitespace-nowrap bg-white visited:bg-primary rounded-xl max-md:mt-10 hover:text-white"
        >
          <HiOutlineHome className="w-6 h-6 text-primary visited:text-white hover:text-white hover:bg-primary" />
          <span className="text-base" className="flex-auto items-center">Dashboard</span>
        </NavLink>

        <NavLink
          to="/vitals"
          className="flex gap-5 justify-between p-3 mt-9 whitespace-nowrap rounded-xl  active:bg-primary bg-white bg-opacity-40 hover:text-white hover:bg-primary"
        >
          <FaHeartbeat className="w-6 selection:aspect-square text-primary hover:text-white hover:bg-primary" />

          <span className="text-base" className="flex-auto items-center">Vitals</span>
        </NavLink>
        <NavLink
          to="/book-appointment"
          className="flex gap-5 justify-between p-3 mt-9 rounded-xl bg-white bg-opacity-40 hover:text-white hover:bg-primary"
        >
          <FaUserDoctor className="w-6 aspect-square  text-primary hover:text-white hover:bg-primary" />

          <span className="text-base" className="flex-auto">Book Appointment</span>
        </NavLink>
        <NavLink
          to="/payment-gateway"
          className="flex gap-5 justify-between p-3 mt-9 rounded-xl bg-white bg-opacity-40 hover:text-white hover:bg-primary"
        >
          <MdOutlinePayments className="w-6 aspect-square text-primary hover:text-white hover:bg-primary" />
          <span className="text-base" className="flex-auto">Payment Gateway</span>
        </NavLink>
        <NavLink
          to="/secure-chat"
          className="flex gap-5 justify-between p-3 mt-9 rounded-xl bg-white bg-opacity-40 hover:text-white hover:bg-primary"
        >
          <BsChatDotsFill className="w-6 aspect-square text-primary hover:text-white hover:bg-primary" />
          <span className="flex-auto">Secure Chat</span>
        </NavLink>
        <NavLink
          to="/patient-profile"
          className="flex gap-5 justify-between p-3 mt-9 rounded-xl bg-white bg-opacity-40 hover:text-white hover:bg-primary"
        >
          <IoPersonCircleOutline className="w-6 aspect-square text-primary hover:text-white hover:bg-primary" />

          <span className="flex-auto">Patient Profile</span>
        </NavLink>
      </ul> */}
    </nav>
  );
}

export default MainNav;
