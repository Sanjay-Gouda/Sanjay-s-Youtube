import React from "react";
import { useNavigate } from "react-router-dom";

function RelatedVideoCard({ videos }) {
  const navigate = useNavigate();
  const { snippet, statistics } = videos;

  const { channelTitle, title, description, thumbnails } = snippet;

  const { medium } = thumbnails;

  const { viewCount } = statistics;

  const channelVideoTitle = title?.substring(0, 50) + "...";

  return (
    <>
      <div
        className="flex justify-start items-start w-full gap-x-4 mt-4 cursor-pointer"
        onClick={() => {
          navigate(`/watch?v=` + videos.id);
        }}
      >
        <div className="w-[40%]">
          <img
            src={medium.url}
            className="h-[120px] w-[240px] rounded-xl"
            alt="thumbnail"
          />
        </div>
        <div className="w-[60%]">
          <div className="flex flex-col items-start gap-y-2 ">
            <p className=" text-gray-800 font-bold ">{channelVideoTitle}</p>
            <p className=" text-gray-700 font-medium">{channelTitle}</p>
            <p>{viewCount}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RelatedVideoCard;
