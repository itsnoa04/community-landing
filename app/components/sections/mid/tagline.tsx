import options from "../../../templateConfig";
import Bubble from "../../global/bubble";

const Tagline = () => {
  return (
    <Bubble>
      <h1 className="bg-transparent text-gray-400 uppercase font-black text-2xl">
        {options?.community?.tagline}
      </h1>
    </Bubble>
  );
};

export default Tagline;
