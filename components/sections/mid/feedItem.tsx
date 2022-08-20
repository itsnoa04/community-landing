import { useInView } from "react-intersection-observer";
import Bubble from "../../global/bubble";

export interface FeedItemProps {
  author: string;
  authorImage: string;
  title: string;
  groupName: string;
  groupColor: string;
  groupTextColor: string;
}
const FeedItem = ({
  author,
  title,
  groupName,
  groupColor,
  authorImage,
  groupTextColor,
}: FeedItemProps) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={` -translate-y-full ${
        !inView ? "opacity-0 " : "opacity-100 -translate-y-0"
      }`}
      style={{
        transition: "all 1.5s ease",
      }}
    >
      <Bubble>
        <div className="flex items-center">
          <div className="flex  mr-16">
            <img
              className="rounded-3xl p-1 w-fit h-24 bg-transparent"
              src={authorImage}
              alt="author image"
            />
            <div className="flex flex-col items-start justify-center">
              <h1 className=" text-xl p-1 font-bold">{author}</h1>
              <div
                className="text-sm p-2 px-5 m-1 rounded-md font-semibold "
                style={{ backgroundColor: groupColor, color: groupTextColor }}
              >
                <h1>{groupName}</h1>
              </div>
            </div>
          </div>
          <h1 className="text-2xl uppercase font-semibold bg-transparent">
            {title}
          </h1>
        </div>
      </Bubble>
    </div>
  );
};
export default FeedItem;
