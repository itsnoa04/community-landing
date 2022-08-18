import color from "color";
import options, { colorMap } from "../../templateConfig";

interface BubbleProps {
  children: any;
  className?: string;
  style?: any;
}

const Bubble = ({ children, className = "", style = {} }: BubbleProps) => {
  return (
    <div
      style={{
        backgroundColor: color(colorMap["1000"]).desaturate(0.7).hex(),
        ...style,
      }}
      className={`text-white m-5 p-3 rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Bubble;
