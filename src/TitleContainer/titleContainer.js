import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import { abbreviateNumber } from "js-abbreviation-number";

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
          <div className="flex">
            <div className="flex">
              <div>
                <RxAvatar size={30} className="mr-2" />
              </div>
              <div>
                <p>{snippet.channelTitle}</p>
                <p>
                  {`${abbreviateNumber(statistics.viewCount, 0)} subscriber`}{" "}
                </p>
              </div>
            </div>
            {/* <div>
              <button>Subscribe</button>
            </div> */}
          </div>

          <div className="flex gap-x-2">
            <AiOutlineLike size={25} />
            <AiOutlineDislike size={25} />
            <RiShareForwardLine size={25} />
          </div>
        </div>
      </div>
    </>
  );
};
