import Bubble from "../../global/bubble";

export interface MobileFeedItemProps {
  author: string;
  authorImage: string;
  title: string;
  groupName: string;
  groupColor: string;
  groupTextColor: string;
}
const MobileFeedItem = ({
  author,
  title,
  groupName,
  groupColor,
  authorImage,
  groupTextColor,
}: MobileFeedItemProps) => {
  return (
    <div>
      <Bubble className="m-0 p-5" style={{ height: "50vh" }}>
        <div className="flex">
          <img
            className="rounded-xl w-24"
            src={authorImage}
            alt="author image"
          />
          <div className="px-5">
            <h1 className="text-2xl py-1 font-bold">{author}</h1>
            <div
              className="text-xl p-2 text-center rounded-md font-semibold "
              style={{ backgroundColor: groupColor, color: groupTextColor }}
            >
              <h1>{groupName}</h1>
            </div>
          </div>
        </div>
        <div className="flex h-2/4 w-full justify-center items-center">
          <h1 className="text-4xl p-5 uppercase font-semibold bg-transparent">
            {title}
          </h1>
        </div>
      </Bubble>
    </div>
  );
};
export default MobileFeedItem;
