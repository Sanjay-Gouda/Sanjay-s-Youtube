import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useVideos } from "../../hooks/useVideos";
import { closeSidebar } from "../../utils/sidebarSlice";
import RelatedVideoCard from "./RelatedVideoCard";

function WatchVideoContainer() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.videoDetails);

  const YT_VIDEOS = useVideos();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  return (
    <>
      <div className="flex w-full">
        <div className="p-5 w-[65%] overflow-hidden flex flex-col">
          <iframe
            width="100%"
            height="515"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <div className="my-4">
            <p className="text-xl font-bold">{details.details.snippet.title}</p>
          </div>
        </div>
        <div className="p-5 w-[35%]">
          {YT_VIDEOS?.map((data) => {
            return <RelatedVideoCard key={data.id} videos={data} />;
          })}
        </div>
      </div>
    </>
  );
}

export default WatchVideoContainer;
