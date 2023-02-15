import React, { useState } from "react";
import {
  MdOutlineSubscriptions,
  MdOutlineMovie,
  MdOutlineLiveTv,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { RiFireLine } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { IoMusicalNoteOutline, IoNewspaperOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const SideBarElements = {
  top: [
    {
      id: 0,
      icon: <AiOutlineHome size={25} />,
      label: "Home",
    },
    {
      id: 1,
      icon: <MdOutlineSlowMotionVideo size={25} />,
      label: "Shorts",
    },
    {
      id: 2,
      icon: <MdOutlineSubscriptions size={25} />,
      label: "Subscriptions",
    },
  ],

  explore: [
    {
      id: 0,
      icon: <RiFireLine size={25} />,
      label: "Trending",
    },
    {
      id: 1,
      icon: <IoMusicalNoteOutline size={25} />,
      label: "Music",
    },
    {
      id: 2,
      icon: <MdOutlineMovie size={25} />,
      label: "Movies",
    },
    {
      id: 3,
      icon: <SiYoutubegaming size={25} />,
      label: "Gaming",
    },
    {
      id: 4,
      icon: <IoNewspaperOutline size={25} />,
      label: "News",
    },
    {
      id: 5,
      icon: <RiFireLine size={25} />,
      label: "Sports",
    },
    {
      id: 6,
      icon: <MdOutlineLiveTv size={25} />,
      label: "Live",
    },
  ],
};

function Sidebar() {
  const toggleState = useSelector((state) => state.toggle.isSidebarOpen);

  //Early return pattern
  // if (!toggleState) return null;

  return (
    <>
      {/* <div className="w-full md:w-2/12 shadow-lg h-screen overflow-hidden"> */}
      <div
        className={`overflow-y-auto h-full py-4 bg-white absolute md:relative z-10  md:translate-x-0 transition-all ${
          !toggleState
            ? "md:block w-[50px] hidden"
            : "md:block w-[240px] translate-x-[0px]"
        }`}
      >
        <div className="flex flex-col px-2">
          <div className="flex flex-col   border-b-2 justify-start items-start">
            {SideBarElements?.top?.map((el) => {
              return (
                <div
                  key={el.id}
                  className="py-2 flex justify-start items-start rounded-lg cursor-pointer w-full hover:bg-gray-200"
                >
                  <div className="mr-2 mx-3">{el.icon}</div>
                  <div>{el.label}</div>
                </div>
              );
            })}
          </div>
          {/* Expore */}
          <div className="flex flex-col  border-b-2 justify-start items-start">
            {SideBarElements?.explore?.map((el) => {
              return (
                <div
                  key={el.id}
                  className="py-2 flex justify-start rounded-lg items-start cursor-pointer w-full hover:bg-gray-200"
                >
                  <div className="mr-2 mx-3">{el.icon}</div>
                  <div>{el.label}</div>
                </div>
              );
            })}
          </div>
          {/* Expore */}
          <div className="flex flex-col  border-b-2 justify-start items-start">
            {SideBarElements?.explore?.map((el) => {
              return (
                <div
                  key={el.id}
                  className="py-2 flex justify-start rounded-lg items-start cursor-pointer w-full hover:bg-gray-200"
                >
                  <div className="mr-2 mx-3">{el.icon}</div>
                  <div>{el.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
