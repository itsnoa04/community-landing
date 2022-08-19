import Color from "color";
import { colorMap } from "../../templateConfig";

export interface MobileNavigationProps {}

const MobileNavigation: React.FC<MobileNavigationProps> = (props) => {
  return (
    <div
      className="text-white p-5 m-5 w-90-screen text-center max-w-2xl rounded-xl"
      style={{ backgroundColor: Color(colorMap["500"]).saturate(0.9).hex() }}
    >
      MobileNavigation
    </div>
  );
};

export default MobileNavigation;
