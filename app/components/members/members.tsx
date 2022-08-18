import axios from "axios";
import { useEffect, useState } from "react";

export interface MembersProps {}

const Members: React.FC<MembersProps> = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => {
        return <h1>{user}</h1>;
      })}
    </div>
  );
};

export default Members;
