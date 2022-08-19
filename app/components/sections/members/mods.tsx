import usersSchema from "../../../schema/users";
import Bubble from "../../global/bubble";
import Mod from "./mod";

export interface ModsProps {
  modList: usersSchema[];
}

const Mods: React.FC<ModsProps> = ({ modList }) => {
  return (
    <>
      <h1 className="text-md font-bold text-white pt-3 pl-0 pr-10">MODS</h1>
      {modList.map((user) => {
        return (
          <Mod
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            icon={user.icon}
          />
        );
      })}
    </>
  );
};

export default Mods;
