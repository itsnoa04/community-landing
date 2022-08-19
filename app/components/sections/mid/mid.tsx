import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Banner from "./banner";
import Description from "./description";
import FAQ from "./faq";
import Feed from "./feed";
import Tagline from "./tagline";
import Testimonials from "./testimonials";

export interface MidProps {}

const Mid: React.FC<MidProps> = (props) => {
  return (
    <SimpleBar style={{ maxHeight: "100vh", width: "100%" }}>
      <Banner />
      <Tagline />
      <Description />
      <Testimonials />
      <FAQ />
      <Feed />
      <div className="h-20-screen"></div>
    </SimpleBar>
  );
};

export default Mid;
