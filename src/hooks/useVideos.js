import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../constants/Constant";

export const useVideos = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideoList(json.items);
  };

  return videoList;
};
