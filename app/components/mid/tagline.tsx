import options from "../../templateConfig";
import Bubble from "../global/bubble";

const Tagline = () => {
  return (
    <Bubble>
        <h1 className="bg-transparent   text-xl">{options?.community?.tagline}</h1>
    </Bubble>
  );
};

export default Tagline;
