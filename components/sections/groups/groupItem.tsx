import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Bubble from "../../global/bubble";

export interface GroupItemProps {
  id: number;
  name: string;
  banner: string;
  description: string;
  color: string;
  textColor: string;
}

const GroupItem: React.FC<GroupItemProps> = ({
  id,
  name,
  banner,
  description,
  color,
  textColor,
}) => {
  const { ref: grpItem, inView } = useInView();
  return (
    <div ref={grpItem}>
      <Bubble
        key={id}
        style={{
          transition: "all 1s ease",
        }}
        className={`m-5 ml-0 p-5 pt-5 mt-2 group-item -translate-x-full ${
          !inView ? "opacity-0 " : "opacity-100 -translate-x-0"
        }`}
      >
        <div className="flex">
          <h1
            className=" font-bold text-xl uppercase p-2 rounded-xl mb-5"
            style={{
              color: textColor,
              backgroundColor: color,
            }}
          >
            {name}
          </h1>
        </div>
        <div className="flex flex-col w-full p-2 pl-0 ">
          <div
            className="rounded-xl mt-2 mb-2 "
            style={{
              backgroundImage: "url(" + banner + ")",
              width: "100%",
              height: "20vh",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="text-md lg:text-xl p-2 pt-5"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <p className="text-xl text-gray-400">{description}</p>
          </div>
        </div>
      </Bubble>
    </div>
  );
};

export default GroupItem;
