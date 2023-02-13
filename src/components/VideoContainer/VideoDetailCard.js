import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setVideoDetails } from "../../utils/videoDescriptionSlice";

function VideoDetailCard({ data }) {
  const { snippet, statistics } = data;

  const { thumbnails } = snippet;

  const { high, medium } = thumbnails;
  const { title } = snippet;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleWatchVideo = (videoId, data) => {
    navigate(`/watch?v=` + videoId);
    dispatch(setVideoDetails(data));
  };

  const channerTitle = title?.substring(0, 68) + "...";

  return (
    <div
      className="flex flex-col p-2 m-2 w-80 overflow-hidden  cursor-pointer"
      onClick={() => handleWatchVideo(data.id, data)}
    >
      <div>
        <img alt="thumbnail" src={medium.url} className="rounded-xl" />
      </div>
      <div className="flex flex-col">
        <p className="my-2 text-gray-800 font-bold ">{channerTitle}</p>
        <p className="my-2 text-gray-700 font-medium">{snippet.channelTitle}</p>
        <p>{statistics.viewCount}</p>
      </div>
    </div>
  );
}

export default VideoDetailCard;
