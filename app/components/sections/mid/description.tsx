import options from "../../../templateConfig";
import Bubble from "../../global/bubble";

const Description = () => {
  return (
    <Bubble>
      <h1 className="text-3xl uppercase font-bold">Description</h1>
      <br />
      <p className="bg-transparent text-gray-400 text-xl">
        {options?.community?.description}
      </p>
    </Bubble>
  );
};

export default Description;
