import { ShimmerThumbnail } from "react-shimmer-effects";

export const Shimmer = () => {
  return (
    <>
      {Array(8)
        .fill("")
        .map((card, ind) => {
          return (
            <>
              <ShimmerThumbnail key={ind} height={350} width={300} rounded />
            </>
          );
        })}
    </>
  );
};
