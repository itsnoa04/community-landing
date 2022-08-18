import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import usersSchema from "../../schema/users";
import Bubble from "../global/bubble";

export interface MembersProps {}

const Members: React.FC<MembersProps> = (props) => {
  const [users, setUsers] = useState<usersSchema[]>([]);
  const [creators, setCreators] = useState<usersSchema[]>([]);
  const [mods, setMods] = useState<usersSchema[]>([]);
  const [members, setMembers] = useState<usersSchema[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = useCallback(async () => {
    const res = await axios.get("/api/users");
    await setUsers(res.data);
    setCreators(users.filter((user) => user.role === "creator"));
    setMods(users.filter((user) => user.role === "mod"));
    setMembers(users.filter((user) => user.role === "member"));
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-md font-bold text-white p-5 pl-0 pr-10">CREATORS</h1>
      {creators.map((user) => {
        return (
          <Bubble key={user.id} className="m-5 ml-0 p-3">
            <h1>{`${user.firstName} ${user.lastName}`}</h1>
            <div className="flex w-70 h-52">
              <div
                className="rounded-xl"
                style={{
                  backgroundImage: "url(" + user.icon + ")",
                  width: "50%",
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="flex w-70 h-52">
              <div
                className="rounded-xl"
                style={{
                  backgroundImage: "url(" + user.icon + ")",
                  width: "50%",
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="flex w-70 h-52">
              <div
                className="rounded-xl"
                style={{
                  backgroundImage: "url(" + user.icon + ")",
                  width: "50%",
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </Bubble>
        );
      })}
    </div>
  );
};

export default Members;
