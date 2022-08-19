import options from "../../../templateConfig";
import Bubble from "../../global/bubble";

const Description = () => {
  return (
    <Bubble>
      <h1 className="text-lg font-semibold">Description</h1>
      <br />
      <p className="bg-transparent text-sm">
        {options?.community?.description}
      </p>
    </Bubble>
  );
};

export default Description;
