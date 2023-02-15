import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL, YOUTUBE_VIDEOS_API } from "../../constants/Constant";
import TagList from "./TagList";
import VideoDetailCard from "./VideoDetailCard";
import { useVideos } from "../../hooks/useVideos";

const Category = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "Music",
  },
  {
    id: 2,
    name: "Bollywood",
  },
  {
    id: 3,
    name: "Computer Programming",
  },
  {
    id: 4,
    name: "Game Shows",
  },
  {
    id: 5,
    name: "Live",
  },
  {
    id: 6,
    name: "History",
  },
  {
    id: 7,
    name: "Kapil Sharma",
  },
  {
    id: 8,
    name: "Shark Tank",
  },
  {
    id: 9,
    name: "Game Shows",
  },
  {
    id: 10,
    name: "Live",
  },
  {
    id: 11,
    name: "Music",
  },
];

function VideoContainer() {
  const YT_VIDEOS = useVideos();
  return (
    // <div className="w-full md:w-10/12">
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto">
      <div className="flex flex-col relative">
        <div className="flex flex-wrap ">
          {Category.map((cat) => {
            return <TagList key={cat.id} name={cat.name} />;
          })}
        </div>

        <div className="flex  flex-wrap gap-x-4">
          {YT_VIDEOS?.map((data) => {
            return <VideoDetailCard key={data.id} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default VideoContainer;
