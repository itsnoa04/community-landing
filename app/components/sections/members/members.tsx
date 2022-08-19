import axios from "axios";
import { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import usersSchema from "../../../schema/users";
import Bubble from "../../global/bubble";
import Creators from "./creators";

export interface MembersProps {}

const Members: React.FC<MembersProps> = (props) => {
  const [creators, setCreators] = useState<usersSchema[]>([]);
  const [mods, setMods] = useState<usersSchema[]>([]);
  const [members, setMembers] = useState<usersSchema[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/api/users");
      await setCreators(
        res.data.filter((person: any) => person.role === "creator")
      );
      await setMods(res.data.filter((person: any) => person.role === "mod"));
      await setMembers(
        res.data.filter((person: any) => person.role === "member")
      );
    };
    getData();
  }, []);

  return (
    <SimpleBar style={{ maxHeight: "100vh", width: "100%" }}>
      <div className="flex flex-col">
        <Creators creatorList={creators} />
        <h1 className="text-md font-bold text-white pt-3 pl-0 pr-10">MODS</h1>
        {mods.map((user) => {
          return (
            <Bubble
              key={user.id}
              className="flex m-1 ml-0 p-2 justify-start items-center "
            >
              <img
                src={user.icon}
                alt="user avatar"
                className="w-16 rounded-xl"
              />
              <h1 className="text-xl pl-12 font-bold">{`${user.firstName} ${user.lastName}`}</h1>
            </Bubble>
          );
        })}
        <h1 className="text-md font-bold text-white pt-3 pl-0 pr-10">
          MEMBERS
        </h1>
        {members.map((user) => {
          return (
            <Bubble
              key={user.id}
              className="flex m-1 ml-0 p-2 justify-start items-center"
            >
              <img
                src={user.icon}
                alt="user avatar"
                className="w-16 rounded-xl"
              />
              <h1 className="text-xl pl-12 font-bold">{`${user.firstName} ${user.lastName}`}</h1>
            </Bubble>
          );
        })}
      </div>
    </SimpleBar>
  );
};

export default Members;
