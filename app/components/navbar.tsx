import options from "../templateConfig";
import Button from "./button";
import ColorMap from "./colorMap";

export default function Navbar() {
  return (
    <nav>
      <div>
        <div className="flex justify-between p-5">
          <img src={options?.community?.logo} alt="logo" />
          <h1 className="text-white font-bold uppercase">
            {options?.community?.name}
          </h1>
        </div>
        <Button disabled={true}>h</Button>
        <ColorMap />
      </div>
    </nav>
  );
}
