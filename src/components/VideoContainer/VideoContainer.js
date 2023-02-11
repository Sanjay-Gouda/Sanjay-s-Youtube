import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL, YOUTUBE_VIDEOS_API } from "../../constants/Constant";
import TagList from "./TagList";
import VideoDetailCard from "./VideoDetailCard";

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
  const [youtubeData, setYouTubeData] = useState([]);

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setYouTubeData(json.items);
  };

  return (
    <div className="w-full md:w-10/12">
      <div className="flex flex-col">
        <div className="flex flex-wrap">
          {Category.map((cat) => {
            return <TagList key={cat.id} name={cat.name} />;
          })}
        </div>

        <div className="flex  flex-wrap gap-x-4">
          {youtubeData?.map((data) => {
            return <VideoDetailCard key={data.id} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default VideoContainer;
