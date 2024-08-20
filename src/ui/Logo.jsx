import { logo } from "../assets";
const Logo = () => {
  return (
    <div className="flex gap-2 my-auto pl-6 w-full h-12 text-purple-800">
      <div href="/" className="flex items-center gap-2 w-full">
        <img src={logo} alt="" className="w-10 h-10" />
        <span className=" text-base font-inter font-bold "> Juva Health </span>
      </div>
    </div>
  );
};

export default Logo;
