import { useInView } from "react-intersection-observer";
import options from "../../../templateConfig";
import Bubble from "../../global/bubble";

const Tagline = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      <Bubble
        className={` -translate-y-full ${
          !inView ? "opacity-0 " : "opacity-100 -translate-y-0"
        }`}
        style={{
          transition: "all 1.5s ease",
        }}
      >
        <h1 className="bg-transparent text-gray-400 uppercase font-black text-2xl">
          {options?.community?.tagline}
        </h1>
      </Bubble>
    </div>
  );
};

export default Tagline;
