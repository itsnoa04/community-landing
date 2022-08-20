import { useContext } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { UserContext } from "../../../context/UserContext";
import Creators from "../members/creators";
import Banner from "./banner";
import Description from "./description";
import FAQ from "./faq";
import Feed from "./feed";
import Tagline from "./tagline";
import Testimonials from "./testimonials";

export interface MidProps {}

const Mid: React.FC<MidProps> = (props) => {
  const { creators } = useContext(UserContext);

  return (
    <SimpleBar style={{ maxHeight: "100vh", width: "100%" }}>
      <Banner />
      <Tagline />
      <Description />
      <div className="lg:hidden">
        <Creators creatorList={creators} />
      </div>
      <Testimonials />
      <FAQ />
      <Feed />
      <div className="h-20-screen"></div>
    </SimpleBar>
  );
};

export default Mid;
