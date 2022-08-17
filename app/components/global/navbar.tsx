import options from "../../templateConfig";
import Button from "./button";

export default function Navbar() {
  return (
    <nav>
      <div className="md:flex md:justify-between p-5 items-center">
        <div className="flex justify-between md:justify-center p-3 items-center">
          <img src={options?.community?.logo} alt="logo" />
          <h1 className="text-white pl-5 font-bold uppercase">
            {options?.community?.name}
          </h1>
        </div>
        <Button className="hidden md:flex">JOIN NOW</Button>
      </div>
    </nav>
  );
}
