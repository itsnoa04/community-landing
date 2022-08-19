import axios from "axios";
import { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import usersSchema from "../../../schema/users";
import Bubble from "../../global/bubble";

export interface GroupsProps {}

const Groups: React.FC<GroupsProps> = (props) => {
  const [creators, setCreators] = useState<usersSchema[]>([]);
  const [mods, setMods] = useState<usersSchema[]>([]);
  const [Groups, setGroups] = useState<usersSchema[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/api/users");
      await setCreators(
        res.data.filter((person: any) => person.role === "creator")
      );
      await setMods(res.data.filter((person: any) => person.role === "mod"));
      await setGroups(
        res.data.filter((person: any) => person.role === "member")
      );
    };
    getData();
  }, []);

  return (
    <SimpleBar style={{ maxHeight: "100vh", width: "100%" }}>
      <div className="flex flex-col">
        <h1 className="text-md font-bold text-white pt-5 pl-0 pr-10">
          CREATORS
        </h1>
        {creators.map((user) => {
          return (
            <Bubble key={user.id} className="m-5 ml-0 p-5 pt-5 mt-2">
              <h1 className=" font-bold text-xl uppercase ">{`${user.firstName} ${user.lastName}`}</h1>
              <div className="flex w-full h-30-screen p-2 pl-0 ">
                <div
                  className="rounded-xl mt-2 mb-2"
                  style={{
                    backgroundImage: "url(" + user.icon + ")",
                    width: "50%",
                    height: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="text-sm lg:text-xl p-2"
                  style={{
                    width: "50%",
                    height: "100%",
                  }}
                >
                  <p>{user.bio}</p>
                </div>
              </div>
            </Bubble>
          );
        })}
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
        <h1 className="text-md font-bold text-white pt-3 pl-0 pr-10">Groups</h1>
        {Groups.map((user) => {
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
      <div className="h-20-screen"></div>
    </SimpleBar>
  );
};

export default Groups;
