import Color from "color";
import { group } from "console";
import { useContext } from "react";
import { MobileNavContext } from "../../context/MobileNavigationContext";
import { colorMap } from "../../templateConfig";

export interface MobileNavigationProps {}

export interface IconsProps {
  type: "groups" | "users" | "home";
  active?: boolean;
}

const Icons: any = ({ type, active = false }: IconsProps) => {
  const activeColor = colorMap["10"];
  const inactiveColor = colorMap["50"];
  switch (type) {
    case "groups":
      return (
        <svg
          width={26}
          height={22}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.938 4.688V3.125h.976a.586.586 0 0 0 .586-.586V.586A.586.586 0 0 0 24.914 0h-1.953a.586.586 0 0 0-.586.586v.977H3.625V.586A.586.586 0 0 0 3.039 0H1.086A.586.586 0 0 0 .5.586v1.953c0 .324.262.586.586.586h.976V18.75h-.976a.586.586 0 0 0-.586.586v1.953c0 .324.262.586.586.586h1.953a.586.586 0 0 0 .586-.586v-.977h18.75v.977c0 .324.262.586.586.586h1.953a.586.586 0 0 0 .586-.586v-1.953a.586.586 0 0 0-.586-.586h-.977V4.687Zm-18.75 7.226v-6.64c0-.324.262-.587.585-.587h8.204c.323 0 .585.263.585.586v6.641a.586.586 0 0 1-.585.586H5.773a.586.586 0 0 1-.585-.586Zm15.625 4.688a.586.586 0 0 1-.586.585h-8.204a.586.586 0 0 1-.585-.585v-2.54h3.515c.647 0 1.172-.524 1.172-1.171V9.375h4.102c.323 0 .585.262.585.586v6.64Z"
            fill={active ? activeColor : inactiveColor}
          />
        </svg>
      );

    case "users":
      return (
        <svg
          width={26}
          height={18}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.938a4.373 4.373 0 0 0 4.375-4.376A4.373 4.373 0 0 0 8 .188a4.373 4.373 0 0 0-4.375 4.375A4.373 4.373 0 0 0 8 8.938Zm3 1.25h-.324A6.154 6.154 0 0 1 8 10.812c-.96 0-1.86-.234-2.676-.624H5a4.501 4.501 0 0 0-4.5 4.5v1.124c0 1.036.84 1.876 1.875 1.876h11.25c1.035 0 1.875-.84 1.875-1.875v-1.126c0-2.484-2.016-4.5-4.5-4.5Zm8.25-1.25a3.751 3.751 0 0 0 0-7.5 3.751 3.751 0 0 0 0 7.5Zm1.875 1.25h-.148a5.263 5.263 0 0 1-1.727.312c-.61 0-1.184-.125-1.727-.313h-.148c-.797 0-1.531.231-2.176.602.953 1.027 1.551 2.39 1.551 3.899v1.5c0 .085-.02.168-.023.25h6.898c1.035 0 1.875-.84 1.875-1.875a4.373 4.373 0 0 0-4.375-4.376Z"
            fill={active ? activeColor : inactiveColor}
          />
        </svg>
      );

    case "home":
      return (
        <svg
          width={26}
          height={20}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m12.668 5.26-8.002 6.59v7.114a.694.694 0 0 0 .695.695l4.864-.013a.694.694 0 0 0 .69-.694v-4.155a.694.694 0 0 1 .695-.694h2.778a.694.694 0 0 1 .694.694v4.151a.695.695 0 0 0 .695.697l4.862.014a.695.695 0 0 0 .694-.695v-7.118l-8-6.586a.53.53 0 0 0-.665 0Zm12.64 4.48L21.68 6.749V.737a.52.52 0 0 0-.52-.52h-2.431a.52.52 0 0 0-.521.52V3.89L14.322.692a2.084 2.084 0 0 0-2.647 0L.688 9.74a.52.52 0 0 0-.07.733l1.107 1.346a.52.52 0 0 0 .734.07l10.21-8.408a.53.53 0 0 1 .664 0l10.21 8.409a.52.52 0 0 0 .733-.07l1.107-1.345a.522.522 0 0 0-.074-.735Z"
            fill={active ? activeColor : inactiveColor}
          />
        </svg>
      );

    default:
      break;
  }
};

const MobileNavigation: React.FC<MobileNavigationProps> = (props) => {
  const { currentPage, setCurrentPage, swiper } = useContext(MobileNavContext);

  const moveToPage = (page: string) => {
    const screenIndexMap: any = {
      groups: 0,
      home: 1,
      users: 2,
    };
    setCurrentPage(page);
    swiper.slideTo(screenIndexMap[page]);
  };
  return (
    <div
      className="text-white p-2 m-5 w-90-screen md:w-50-screen text-center max-w-2xl rounded-xl flex justify-evenly items-center"
      style={{ backgroundColor: Color(colorMap["900"]).desaturate(0.5).hex() }}
    >
      <button
        onClick={() => {
          setCurrentPage("groups");
          moveToPage("groups");
        }}
        className="py-3 px-5 rounded-xl outline-none"
        style={
          currentPage === "groups"
            ? {
                backgroundColor: Color(colorMap["500"]).saturate(0.7).hex(),
              }
            : {
                backgroundColor: "inherit",
              }
        }
      >
        <Icons type="groups" active={currentPage === "groups"} />
      </button>
      <button
        onClick={() => {
          setCurrentPage("home");
          moveToPage("home");
        }}
        className="py-3 px-5 rounded-xl outline-none"
        style={
          currentPage === "home"
            ? {
                backgroundColor: Color(colorMap["500"]).saturate(0.7).hex(),
              }
            : {
                backgroundColor: "inherit",
              }
        }
      >
        <Icons type="home" active={currentPage === "home"} />
      </button>
      <button
        onClick={() => {
          setCurrentPage("users");
          moveToPage("users");
        }}
        className="py-3 px-5 rounded-xl outline-none"
        style={
          currentPage === "users"
            ? {
                backgroundColor: Color(colorMap["500"]).saturate(0.7).hex(),
              }
            : {
                backgroundColor: "inherit",
              }
        }
      >
        <Icons type="users" active={currentPage === "users"} />
      </button>
    </div>
  );
};

export default MobileNavigation;
