import { useInView } from "react-intersection-observer";
import options from "../../../templateConfig";
import Bubble from "../../global/bubble";

const Description = () => {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={` -translate-y-full ${
        !inView ? "opacity-0 " : "opacity-100 -translate-y-0"
      }`}
      style={{
        transition: "all 1s ease",
      }}
    >
      <Bubble>
        <h1 className="text-xl uppercase font-bold">Description</h1>
        <br />
        <p className="bg-transparent text-gray-400 text-xl">
          {options?.community?.description}
        </p>
      </Bubble>
    </div>
  );
};

export default Description;
