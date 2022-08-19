import usersSchema from "../../../schema/users";
import Bubble from "../../global/bubble";
import Creator from "./creator";

export interface CreatorsProps {
  creatorList: usersSchema[];
}

const Creators: React.FC<CreatorsProps> = ({ creatorList }) => {
  return (
    <>
      <h1 className="text-md font-bold text-white pt-5 px-5">CREATORS</h1>
      {creatorList.map((user) => {
        return (
          <Creator
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            icon={user.icon}
            bio={user.bio}
            github={user.social.github}
            linkedin={user?.social?.linkedin}
            youtube={user.social.youtube}
            twitter={user.social.twitter}
          />
        );
      })}
      ;
    </>
  );
};

export default Creators;
