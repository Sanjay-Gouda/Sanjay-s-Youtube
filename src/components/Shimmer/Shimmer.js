import { ShimmerThumbnail } from "react-shimmer-effects";

export const Shimmer = () => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((card, ind) => {
          return (
            <>
              <ShimmerThumbnail key={ind} height={150} width={300} rounded />
            </>
          );
        })}
    </>
  );
};
