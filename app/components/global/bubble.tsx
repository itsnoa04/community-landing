import color from "color";
import options, { colorMap } from "../../templateConfig";

const Bubble = ({ children }: any) => {
  return (
    <div
      style={{
        backgroundColor: color(colorMap["900"]).desaturate(0.7).hex(),
      }}
      className="text-white m-5 p-3 rounded-xl "
    >
      {children}
    </div>
  );
};

export default Bubble;
