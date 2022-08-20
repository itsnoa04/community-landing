import { useInView } from "react-intersection-observer";
import DynamicBanner from "../../sample/dynamicBanner";

const Banner = () => {
  const { ref, inView } = useInView();
  return (
    <div
      className={`text-white m-5 rounded-3xl overflow-hidden -translate-y-full ${
        !inView ? "opacity-0 " : "opacity-100 -translate-y-0"
      }`}
      ref={ref}
      style={{
        transition: "all 1s ease",
      }}
    >
      <DynamicBanner />
    </div>
  );
};

export default Banner;
