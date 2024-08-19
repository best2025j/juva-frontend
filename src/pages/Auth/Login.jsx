import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoginPatient } from "./useLoginPatient";

import { MiniNavbar } from "../../components";
import { FaEyeSlash } from "react-icons/fa";
import { logo } from "../../assets";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginPatient } = useLoginPatient();
  // const { register, reset, formState} = useForm();
  // const { errors } = formState;

  function onFormSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    loginPatient(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
    toast.success("code reached here");
    console.log("code reached here");
  }

  // Handle navigation to the signup page
  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="flex flex-col px-4 pt-2  w-full h-full bg-fuchsia-200">
        <MiniNavbar />
        <div
          className="flex flex-col self-center mx-auto px-2 md:px-16 m-6 md:py-2 mt-2 md:mt-2 max-w-lg text-base bg-white rounded-3xl
         "
        >
          <div className="self-center mt-8 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-black font-inter">
            <img
              src={logo}
              alt=""
              className="grow self-center mt-1.5 mx-auto"
            />
            <span className="">Welcome to JUVA</span>
          </div>

          <p className="mt-4 text-center text-sm md:text-base font-inter text-zinc-800 max-md:max-w-full">
            We provide healthcare services for all by offering remote medical
            consultation. Each of our service is tailored to help you achieve
            the most as a patient and an health professional.
          </p>

          <form onSubmit={onFormSubmit}>
            <div className=" flex flex-col w-full justify-center items-start mt-5 text-xl rounded bg-stone-50 text-stone-500 max-md:px-5 max-md:max-w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" my-auto focus:outline-none bg-stone-50 text-sm md:text-base w-full p-2 mt-2 focus:w-full rounded-lg border h-12"
                placeholder="Email or Phone Number"
              />
            </div>

            <div className="flex flex-col w-full justify-center items-start mt-5 text-xl rounded bg-stone-50 text-stone-500 max-md:px-5 max-md:max-w-full">
              <div className="flex items-center justify-between w-full">
                <input
                  autoComplete="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" my-auto focus:outline-none bg-stone-50 text-sm md:text-base w-full h-12 p-2 mt-2 focus:w-full rounded-lg border"
                  placeholder="Password"
                />

                {/* <FaEyeSlash size={20} color="black" className="ml-2" /> */}
              </div>
            </div>

            <button
              type="submit"
              className="justify-center items-center text-sm py-3 mt-7 w-full font-semibold text-white whitespace-nowrap bg-purple-800 rounded-lg max-md:px-5 max-md:max-w-full"
            >
              Login to your account
            </button>
          </form>

          <button
            onClick={handleSignupClick}
            className="justify-center items-center py-3 mt-4 mb-8 font-semibold text-center text-purple-800 whitespace-nowrap bg-fuchsia-200 rounded-lg max-md:px-5 max-md:max-w-full"
          >
            Click here to{" "}
            <span className="font-extrabold text-purple-800 text-sm">
              Sign Up
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
