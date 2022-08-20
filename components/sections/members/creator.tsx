import Link from "next/link";
import { useInView } from "react-intersection-observer";
import github from "../../../assets/github.svg";
import Bubble from "../../global/bubble";

export interface CreatorProps {
  id: number;
  firstName: string;
  lastName: string;
  icon: string;
  bio: string;
  github: string;
  linkedin?: string;
  youtube: string;
  twitter: string;
}

const Creator: React.FC<CreatorProps> = ({
  id,
  firstName,
  lastName,
  icon,
  bio,
  github,
  linkedin = "",
  youtube,
  twitter,
}) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref}>
      <Bubble
        key={id}
        className={`md:m-5 lg:ml-0 md:p-10 pt-5 mt-2 translate-x-full ${
          !inView ? "opacity-0 " : "opacity-100 translate-x-0"
        }`}
        style={{
          transition: "all 1s ease",
        }}
      >
        <h1 className=" font-black text-3xl uppercase ">{`${firstName} ${lastName}`}</h1>
        <div className="flex w-full h-30-screen p-2 pl-0 ">
          <div
            className="rounded-xl mt-2 mb-2"
            style={{
              backgroundImage: "url(" + icon + ")",
              width: "50%",
              height: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className=" p-2"
            style={{
              width: "50%",
              height: "100%",
            }}
          >
            <p className="text-sm md:text-2xl lg:text-sm xl:text-lg pt-0 p-5 pr-0 font-bold">
              {bio}
            </p>

            <div className="flex p-2 w-full gap-3 flex-wrap">
              <Link href={github}>
                <img src="/assets/github.svg" className="w-10" />
              </Link>
              <Link href={linkedin}>
                <img src="/assets/linkedin.svg" className="w-10" />
              </Link>
              <Link href={youtube}>
                <img src="/assets/youtube.svg" className="w-10" />
              </Link>
              <Link href={twitter}>
                <img src="/assets/twitter.svg" className="w-10" />
              </Link>
            </div>
          </div>
        </div>
      </Bubble>
    </div>
  );
};

export default Creator;
