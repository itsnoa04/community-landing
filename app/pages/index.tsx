import type { NextPage } from "next";
import Groups from "../components/sections/groups/groups";
import Members from "../components/sections/members/members";
import Mid from "../components/sections/mid/mid";

const Home: NextPage = () => {
  return (
    <>
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
      <div className="lg:flex">
        <div className="flex lg:flex-auto">
          <Groups />
        </div>
        <div className="lg:w-50-screen">
          <Mid />
        </div>
        <div className="flex lg:w-30-screen">
          <Members />
        </div>
      </div>
    </>
  );
};

export default Home;
