import usersSchema from "../../../schema/users";
import Bubble from "../../global/bubble";
import Member from "./member";

export interface MembersProps {
  membersList: usersSchema[];
}

const Members: React.FC<MembersProps> = ({ membersList }) => {
  return (
    <>
      <h1 className="text-md font-bold text-white pt-3 pl-0 pr-10">MEMBERS</h1>
      {membersList.map((user) => {
        return (
          <Member
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

export default Members;
