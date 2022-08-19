import Groups from "../sections/groups/groups";
import Members from "../sections/members/members";
import Mid from "../sections/mid/mid";

export interface LargeProps {}

const Large: React.FC<LargeProps> = () => {
  return (
    <div className="lg:flex hidden">
      <div className="hidden lg:flex lg:flex-auto">
        <Groups />
      </div>
      <div className="lg:w-50-screen">
        <Mid />
      </div>
      <div className=" hidden lg:flex lg:w-30-screen">
        <Members />
      </div>
    </div>
  );
};

export default Large;
