import { useInView } from "react-intersection-observer";
import Bubble from "../../global/bubble";

export interface MemberProps {
  id: number;
  firstName: string;
  lastName: string;
  icon: string;
}

const Member: React.FC<MemberProps> = ({ id, icon, firstName, lastName }) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref}>
      <Bubble
        key={id}
        className={`flex m-1 ml-0 p-2 justify-start items-center translate-x-full ${
          !inView ? "opacity-0 " : "opacity-100 translate-x-0"
        }`}
        style={{
          transition: "all 0.5s ease",
        }}
      >
        <img src={icon} alt="user avatar" className="w-16 rounded-xl" />
        <h1 className="text-xl pl-12 text-gray-400 font-bold">{`${firstName} ${lastName}`}</h1>
      </Bubble>
    </div>
  );
};

export default Member;
