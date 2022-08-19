import axios from "axios";
import { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import groupSchema from "../../../schema/group";
import Bubble from "../../global/bubble";
import GroupItem from "./groupItem";

export interface GroupsProps {}

const Groups: React.FC<GroupsProps> = () => {
  const [groups, setGroups] = useState<groupSchema[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/api/groups");
      await setGroups(res.data);
    };
    getData();
  }, []);

  return (
    <SimpleBar style={{ maxHeight: "100vh", width: "100%" }}>
      <div className="flex flex-col pl-5">
        <h1 className="text-md font-bold text-white pb-2 pt-5">GROUPS</h1>
        {groups.map((group) => {
          return (
            <GroupItem
              id={group.id}
              name={group.name}
              banner={group.banner}
              description={group.description}
              color={group.color}
              textColor={group.textColor}
            />
          );
        })}
      </div>
      <div className="h-20-screen"></div>
    </SimpleBar>
  );
};

export default Groups;
