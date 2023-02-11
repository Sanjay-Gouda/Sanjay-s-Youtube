import React from "react";
import HumburgerMenu from "../../assets/menu.png";

import { TbSearch } from "react-icons/tb";

import { useDispatch } from "react-redux";
import { setToggleSidebar } from "../../utils/sidebarSlice";
function Header() {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(setToggleSidebar());
  };

  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className=" flex  col-span-2">
        <div className="w-10 h-6 mr-4" onClick={handleSidebar}>
          <img
            alt="menu"
            src={HumburgerMenu}
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>

        <div className="w-28 h-6">
          <img
            alt="menu"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>
      </div>

      <div className="flex col-span-8 justify-center items-center">
        <input
          placeholder="Search"
          className="border border-grey-400 w-1/2 p-2 rounded-l-full outline-none px-4"
        />
        <button className="border border-grey-400 px-5 py-2 rounded-r-full bg-gray-100">
          <TbSearch size={25} className="text-gray-400" />
        </button>
      </div>

      <div className="flex col-span-2"></div>
    </div>
  );
}

export default Header;
