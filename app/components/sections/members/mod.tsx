import Bubble from "../../global/bubble";

export interface ModProps {
  id: number;
  firstName: string;
  lastName: string;
  icon: string;
}

const Mod: React.FC<ModProps> = ({ id, firstName, lastName, icon }) => {
  return (
    <Bubble key={id} className="flex m-1 ml-0 p-2 justify-start items-center ">
      <img src={icon} alt="user avatar" className="w-16 rounded-xl" />
      <h1 className="text-xl pl-12 font-bold">{`${firstName} ${lastName}`}</h1>
    </Bubble>
  );
};

export default Mod;
