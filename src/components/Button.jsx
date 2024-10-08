import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button = ({ styles }) => (
  <Link
    to="/signup"
    className={`flex items-center py-3 px-10 font-inter font-medium text-[14px] text-white bg-primary rounded-full outline-none ${styles}`}
  >
    GET STARTED <FaArrowRight className={`ml-2`} />
  </Link>
);

export default Button;
