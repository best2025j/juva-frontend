import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaMicrophone } from "react-icons/fa6";
import People01 from "../assets/people01.png";
function Header() {
  return (
    <header className="mb-4">
      <div className="flex gap-5 justify-between w-full whitespace-nowrap max-md:flex-wrap max-md:max-w-full px-10 mt-5">
        <div className="flex gap-5 items-center justify-between self-start p-1 text-xl bg-purple-50 rounded-xl text-zinc-400">
          <div className="search_box ml-4 flex items-center">
            <FaSearch className="text-gray-600 ml-2 h-4 w-4" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-gray-400 focus:outline-none focus:border-black px-2 py-1"
            />
            <button class="btn btn-outline-success" type="submit"></button>
          </div>
          <FaMicrophone className="text-gray-600 mr-6 h-4 w-4" />
        </div>

        <div className="flex items-center space-x-2 justify-between my-auto">
          <SlLocationPin className="w-4 h-4" />
          <h4 className="text-sm font-semibold">Lagos</h4>
          <img src={People01} className="rounded-full w-10 h-10" />
        </div>
      </div>
    </header>
  );
}

export default Header;
