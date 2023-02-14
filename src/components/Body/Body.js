import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import VideoContainer from "../VideoContainer/VideoContainer";

export const Body = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap  pt-[90px]">
        <Sidebar />
        <Outlet />
        {/* <VideoContainer /> */}
      </div>
    </div>
  );
};
