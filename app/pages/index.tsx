import type { NextPage } from "next";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Members from "../components/members/members";
import Banner from "../components/mid/banner";
import Description from "../components/mid/description";
import Feed from "../components/mid/feed";
import Tagline from "../components/mid/tagline";
import Testimonials from "../components/mid/testimonials";

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
        <div className="lg:w-70-screen">
          <SimpleBar style={{ maxHeight: "100vh", width: "100%" }}>
            <Banner />
            <Tagline />
            <Description />
            <Testimonials />
            <Feed />
            <div className="h-20-screen"></div>
          </SimpleBar>
        </div>
        <div className="flex lg:flex-auto">
          <SimpleBar style={{ maxHeight: "100vh", width: "100%" }}>
            <Members />
            <div className="h-20-screen"></div>
          </SimpleBar>
        </div>
      </div>
    </>
  );
};

export default Home;
