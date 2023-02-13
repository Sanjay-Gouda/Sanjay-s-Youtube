import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import VideoContainer from "../VideoContainer/VideoContainer";

export const Body = () => {
  return (
    <div className="flex flex-wrap">
      <Sidebar />
      <Outlet />
      {/* <VideoContainer /> */}
    </div>
  );
};
