import type { NextPage } from "next";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Members from "../components/members/members";
import Banner from "../components/mid/banner";
import Description from "../components/mid/description";
import Feed from "../components/mid/feed";
import Tagline from "../components/mid/tagline";

const Home: NextPage = () => {
  return (
    <>
      <div
        className="mist"
        style={{
          pointerEvents: "none",
          background:
            "linear-gradient(1.99deg, #070604 -2.29%, rgba(0, 0, 0, 0) 49.94%)",
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 20,
          bottom: 0,
          transition: "none",
        }}
      ></div>
      <div className="md:flex">
        <div className="lg:w-80-screen md:w-70-screen">
          <SimpleBar style={{ maxHeight: "100vh", width: "100%" }}>
            <Banner />
            <Tagline />
            <Description />
            <Feed />
          </SimpleBar>
        </div>
        <div className="flex md:flex-auto">
          <SimpleBar style={{ maxHeight: "100vh", width: "100%" }}>
            <Members />
          </SimpleBar>
        </div>
      </div>
    </>
  );
};

export default Home;
