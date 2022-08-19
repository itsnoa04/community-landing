import Bubble from "../../global/bubble";

export interface CreatorProps {
  id: number;
  firstName: string;
  lastName: string;
  icon: string;
  bio: string;
}

const Creator: React.FC<CreatorProps> = ({
  id,
  firstName,
  lastName,
  icon,
  bio,
}) => {
  return (
    <Bubble key={id} className="m-5 ml-0 p-10 pt-5 mt-2">
      <h1 className=" font-black text-3xl uppercase ">{`${firstName} ${lastName}`}</h1>
      <div className="flex w-full h-30-screen p-2 pl-0 ">
        <div
          className="rounded-xl mt-2 mb-2"
          style={{
            backgroundImage: "url(" + icon + ")",
            width: "50%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className=" p-2"
          style={{
            width: "50%",
            height: "100%",
          }}
        >
          <p className="text-sm xl:text-lg pt-0 p-5 font-bold">{bio}</p>
        </div>
      </div>
    </Bubble>
  );
};

export default Creator;
