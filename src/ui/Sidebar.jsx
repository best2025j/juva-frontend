import Logo from "./Logo"
import MainNav from "./MainNav"

function Sidebar() {
    return (
      <aside className="bg-gray-100 px-2 py-2 border-r border-gray-200 w-ful h-full">
        <Logo />
        <MainNav />
      </aside>
    );
  }
  
  export default Sidebar;
  