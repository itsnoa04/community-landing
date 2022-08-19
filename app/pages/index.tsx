import type { NextPage } from "next";
import { useState } from "react";
import Large from "../components/views/large";
import { UserContext } from "../context/UserContext";
import usersSchema from "../schema/users";

const Home: NextPage = () => {
  const [creators, setCreators] = useState<usersSchema[]>([]);
  const [mods, setMods] = useState<usersSchema[]>([]);
  const [members, setMembers] = useState<usersSchema[]>([]);
  return (
    <>
      <UserContext.Provider
        value={{
          creators,
          mods,
          members,
          setCreators,
          setMods,
          setMembers,
        }}
      >
        <div
          className="mist"
          style={{
            pointerEvents: "none",
            background:
              "linear-gradient(359.51deg, #000000 0.4%, rgba(0, 0, 0, 0) 28.56%);",
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: 20,
            bottom: 0,
            transition: "none",
          }}
        ></div>
        <Large />
      </UserContext.Provider>
    </>
  );
};

export default Home;
