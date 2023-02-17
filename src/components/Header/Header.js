import React, { useEffect, useState } from "react";
import HumburgerMenu from "../../assets/menu.png";
import { TbSearch } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setToggleSidebar } from "../../utils/sidebarSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../../constants/Constant";
import { setSearchCache } from "../../utils/searchSlice";

function Header() {
  const [showSuggestionbar, setShowSuggestionBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((state) => state.cache.suggestionList);

  const [suggestionData, setSuggestionData] = useState([]);

  useEffect(() => {
    dispatch(setToggleSidebar());
  }, []);

  //Debouncing technique used in this useEffect for retreivg OnChange suggestions
  useEffect(() => {
    //call search API after 200ms
    const timer = setTimeout(() => {
      // seachKeywod : ["suggestion data1","suggestion data2","suggestion data2"...]
      //for this syntax is :
      if (searchCache[searchQuery]) {
        setSuggestionData(searchCache[searchQuery]);
      } else {
        getYoutubeSuggestion();
      }
    }, 200);

    //  This method is user for
    // if  onChange event called before the given setTime out time then it will destroy the ongoing/current componnet.
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getYoutubeSuggestion = async () => {
    console.log("API CALL : ", searchQuery);
    const suggestion = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await suggestion.json();
    setSuggestionData(json[1]);

    dispatch(setSearchCache({ [searchQuery]: json[1] }));
  };

  const handleSidebar = () => {
    dispatch(setToggleSidebar());
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="grid grid-flow-col sticky top-0 z-20 w-full bg-white p-4 shadow-lg ">
      <div className=" flex  col-span-2">
        <div
          className="w-10 h-6 mr-4 hover:bg-gray-200 rounded-full"
          onClick={handleSidebar}
        >
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

      <div className="flex col-span-8 justify-center items-center relative">
        <input
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          onBlur={() => setShowSuggestionBar(false)}
          onFocus={() => setShowSuggestionBar(true)}
          className="border border-grey-400 w-1/2 p-2 rounded-l-full outline-none px-4"
        />
        <button className="border border-grey-400 px-5 py-2 rounded-r-full bg-gray-100">
          <TbSearch size={25} className="text-gray-400" />
        </button>

        <div className="absolute w-full flex justify-center items-center  top-11">
          {showSuggestionbar ? (
            <div className="w-[55%]  bg-white border shadow-lg rounded-xl ">
              {/* <ul> */}
              {suggestionData?.map((item, ind) => {
                return (
                  // <div className="flex justify-center items-center w-full border border-t-4">

                  <p
                    key={ind}
                    className="hover:bg-gray-200 p-2 cursor-pointer flex"
                  >
                    {item}
                  </p>
                  // </div>
                );
              })}
              {/* </ul> */}
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex col-span-2"></div>
    </div>
  );
}

export default Header;
