import Color from "color";
import { colorMap } from "../../templateConfig";
import Button from "./button";

export interface LoginButtonProps {}

const LoginButton: React.FC<LoginButtonProps> = ({}) => {
  return (
    <div
      className="flex justify-center items-center md:p-5 rounded-2xl"
      style={{
        backgroundColor: Color(colorMap["900"]).saturate(0.9).hex(),
      }}
    >
      <h1
        className="hidden md:flex px-5 text-2xl font-black uppercase"
        style={{
          color: colorMap["30"],
        }}
      >
        Want to Join the party ?
      </h1>
      <Button
        className="font-black btn rounded-2xl"
        color={colorMap["50"]}
        textColor={colorMap["900"]}
      >
        <h1 className="sm:text-2xl md:text-xl lg:text-2xl p-2">JOIN NOW</h1>
      </Button>
    </div>
  );
};

export default LoginButton;
