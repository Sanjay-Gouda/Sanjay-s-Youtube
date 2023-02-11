import React from "react";

function VideoDetailCard({ data }) {
  console.log(data);

  const { snippet, statistics } = data;

  const { thumbnails } = snippet;

  const { high, medium } = thumbnails;

  return (
    <div className="flex flex-col p-2 m-2 w-80 overflow-hidden  ">
      <div>
        <img alt="thumbnail" src={medium.url} className="rounded-xl" />
      </div>
      <div className="flex flex-col">
        <p className="my-2 text-gray-800 font-bold">{snippet.title}</p>
        <p className="my-2 text-gray-700 font-medium">{snippet.channelTitle}</p>
        <p>{statistics.viewCount}</p>
      </div>
    </div>
  );
}

export default VideoDetailCard;
