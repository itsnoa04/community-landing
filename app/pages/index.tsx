import type { NextPage } from "next";
import Banner from "../components/mid/banner";
import Description from "../components/mid/description";
import Feed from "../components/mid/feed";
import MobileFeed from "../components/mid/mobileFeed";
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
        }}
      ></div>
      <div>
        <Banner />
        <Tagline />
        <Description />
        <div className="md:hidden">
          <MobileFeed />
        </div>
        <div className="hidden md:block">
          <Feed />
        </div>
      </div>
    </>
  );
};

export default Home;
