import { RxAvatar } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { COMMENTS_DATA } from "../../constants/Constant";

const Comments = ({ data }) => {
  return (
    <div>
      <div className="flex justify-start items-start py-4   ">
        <div>
          <RxAvatar size={40} />
        </div>
        <div className="flex flex-col px-2">
          <p className="font-bold">{data?.name}</p>
          <p className="text-gray-900">{data?.text}</p>

          <div className="flex ">
            <AiOutlineLike size={25} className="ml-2 cursor-pointer" />
            <AiOutlineDislike size={25} className="ml-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Recursion Method Invoke to Call Comments Compnent for reolies of the comments.
const CommentList = ({ comments }) => {
  console.log(comments, "comments");

  return comments?.map((el, ind) => (
    <div>
      <Comments data={el} key={ind} />
      <div className="ml-5 pl-5  border-l-2 border-gray-300">
        <CommentList comments={el.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  console.log(COMMENTS_DATA, "COMMENTS_DATA");
  return (
    <>
      <h3 className="text-xl font-bold">Comments :{COMMENTS_DATA.length}</h3>
      <CommentList comments={COMMENTS_DATA} />
    </>
  );
};

export default CommentContainer;
