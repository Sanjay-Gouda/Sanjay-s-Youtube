import React from "react";
import { useNavigate } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

function RelatedVideoCard({ videos }) {
  const navigate = useNavigate();
  const { snippet, statistics } = videos;

  const { channelTitle, title, description, publishedAt, thumbnails } = snippet;

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
            <p className=" text-gray-700 font-medium ">
              <span>{`${abbreviateNumber(
                statistics.viewCount,
                0
              )} views`}</span>
              <span className="mx-1 text-xl">.</span>
              <span>
                <ReactTimeAgo date={publishedAt} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RelatedVideoCard;
