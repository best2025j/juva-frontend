import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { MiniNavbar } from "../../components";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handlePatientSignup = () => {
    navigate("/patient-signup");
  };

  const handleDoctorSignup = () => {
    navigate("/doctor-signup");
  };

  return (
    <>
      <div className="flex flex-col px-4 pt-2 w-full h-screen bg-fuchsia-200">
        <MiniNavbar />
        <div
          className="flex flex-col justify-center mx-auto self-center px-4 md:px-16 m-6 md:py-6 py-8 md:mt-8 max-w-lg text-base bg-white rounded-3xl
         "
        >
          {" "}
          <div className="self-center mt-8  font-bold tracking-tighter leading-6 md:leading-10 text-black font-inter">
            <img src={logo} alt="" className="grow self-center mx-auto" />
            <span className="text-2xl md:text-4xl">Welcome to JUVA</span>
          </div>
          <p className="mt-4 text-center text-sm md:text-base  font-inter text-zinc-800">
            We provide healthcare services for all by offering remote medical
            consultation. Each of our service is tailored to help you achieve
            the most as a patient and an health professional.
          </p>
          <button
            type="button"
            onClick={handlePatientSignup}
            className="justify-center items-center px-16 py-3 mt-7 text-sm w-full font-semibold text-white whitespace-nowrap bg-purple-800 rounded-lg max-md:px-5 max-md:max-w-full"
          >
            Sign Up as a Patient
          </button>
          <button
            type="button"
            onClick={handleDoctorSignup}
            className="justify-center items-center px-16 py-3 mt-4 mb-8 text-sm font-bold font-inter text-center text-black bg-secondary whitespace-nowrap rounded-lg max-md:px-5 max-md:max-w-full"
          >
            Sign Up as a Doctor
          </button>
          <p className="mt-4 leading-6 text-center font-inter text-zinc-800 max-md:max-w-full">
            Already have an account?{" "}
            <Link to="/login">
              <span className="font-extrabold text-purple-800">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
