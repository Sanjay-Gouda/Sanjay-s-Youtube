import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import { abbreviateNumber } from "js-abbreviation-number";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

export const TitleContainer = () => {
  const details = useSelector((state) => state.videoDetails);

  const { snippet, statistics } = details.details;

  return (
    <>
      <div className="flex flex-col">
        <div className="my-4">
          <p className="text-xl font-bold">{snippet.title}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-x-2">
            <div className="flex justify-center items-center ">
              <div>
                <RxAvatar size={40} className="mr-2" />
              </div>
              <div>
                <p className="font-bold">{snippet.channelTitle}</p>
                <p className="text-gray-600 text-[14px]">
                  {`${abbreviateNumber(statistics.viewCount, 0)} subscriber`}{" "}
                </p>
              </div>
            </div>
            <div>
              <button className="bg-black text-white px-3 py-2 rounded-3xl">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex gap-x-2">
            <span className="px-4 py-2 rounded-full flex justify-center items-center text-gray-500 bg-gray-200 font-semibold text-sm  align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              <AiOutlineLike size={25} className="cursor-pointer" />
              {`${abbreviateNumber(statistics.likeCount, 0)}`}
            </span>
            <span className="px-4 py-2 rounded-full justify-center items-center text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              <AiOutlineDislike size={25} className="cursor-pointer" />
            </span>
            <span className="px-4 py-2 rounded-full justify-center items-center text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              <RiShareForwardLine size={25} className="cursor-pointer" /> Share
            </span>
          </div>
        </div>

        <div className="bg-gray-200 p-3 mt-4 rounded-full">
          <div className="flex gap-x-2 justify-start items-center">
            <p className="text-[16px] font-bold">
              {`${abbreviateNumber(statistics.viewCount, 0)} views`}{" "}
            </p>
            <ReactTimeAgo
              date={snippet.publishedAt}
              className="text-[16px] font-bold"
            />
          </div>
          <div>
            <p className="text-[14px]">{snippet.title}</p>
          </div>
        </div>
      </div>
    </>
  );
};
