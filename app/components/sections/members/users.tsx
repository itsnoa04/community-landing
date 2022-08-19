import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import { UserContext } from "../../../context/UserContext";
import usersSchema from "../../../schema/users";
import Bubble from "../../global/bubble";
import Creators from "./creators";
import Members from "./members";
import Mods from "./mods";
export interface UsersProps {}

const Users: React.FC<UsersProps> = (props) => {
  const { setCreators, setMods, setMembers, creators, mods, members } =
    useContext(UserContext);

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
        <Mods modList={mods} />
        <Members membersList={members} />
      </div>
    </SimpleBar>
  );
};

export default Users;
