import Bubble from "../../global/bubble";

export interface MemberProps {
  id: number;
  firstName: string;
  lastName: string;
  icon: string;
}

const Member: React.FC<MemberProps> = ({ id, icon, firstName, lastName }) => {
  return (
    <Bubble key={id} className="flex m-1 ml-0 p-2 justify-start items-center">
      <img src={icon} alt="user avatar" className="w-16 rounded-xl" />
      <h1 className="text-xl pl-12 text-gray-400 font-bold">{`${firstName} ${lastName}`}</h1>
    </Bubble>
  );
};

export default Member;
