import type { NextPage } from "next";
import Banner from "../components/mid/banner";
import Description from "../components/mid/description";
import Tagline from "../components/mid/tagline";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Tagline />
      <Description />
    </>
  );
};

export default Home;
