import React, { useEffect, useState } from "react";
import HumburgerMenu from "../../assets/menu.png";
import { TbSearch } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setToggleSidebar } from "../../utils/sidebarSlice";
import { useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../../constants/Constant";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setToggleSidebar());
  }, []);

  useEffect(() => {
    //call search API after 200ms
    const timer = setTimeout(() => {
      getYoutubeSuggestion();
    }, 4000);

    //  This method is user for
    // if  onChange event called before the given setTime out time then it will destroy the ongoing/current componnet.
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getYoutubeSuggestion = async () => {
    const suggestion = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await suggestion.json();

    console.log(json);
  };

  const handleSidebar = () => {
    dispatch(setToggleSidebar());
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="grid grid-flow-col fixed w-full bg-white p-4 shadow-lg ">
      <div className=" flex  col-span-2">
        <div className="w-10 h-6 mr-4" onClick={handleSidebar}>
          <img
            alt="menu"
            src={HumburgerMenu}
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>

        <div className="w-28 h-6" onClick={() => navigate("/")}>
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
          value={searchQuery}
          onChange={handleSearchChange}
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
