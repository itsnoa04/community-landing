import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "react-lottie";
import LoginButton from "../components/global/loginButton";
import MobileNavigation from "../components/global/mobileNavigation";
import Large from "../components/views/large";
import Small from "../components/views/small";
import { MobileNavContext } from "../context/MobileNavigationContext";
import { UserContext } from "../context/UserContext";
import confettiData from "../lottie/confetti.json";
import usersSchema from "../schema/users";
import options from "../templateConfig";

const Home: NextPage = () => {
  const [creators, setCreators] = useState<usersSchema[]>([]);
  const [mods, setMods] = useState<usersSchema[]>([]);
  const [members, setMembers] = useState<usersSchema[]>([]);
  const [currentPage, setCurrentPage] = useState<"groups" | "users" | "home">(
    "home"
  );
  const [swiper, setSwiper] = useState<any>();
  const { ref, inView } = useInView();
  const [isConfettiStopped, setIsConfettiStopped] = useState(true);

  return (
    <>
      <UserContext.Provider
        value={{
          creators,
          mods,
          members,
          setCreators,
          setMods,
          setMembers,
        }}
      >
        <MobileNavContext.Provider
          value={{ currentPage, setCurrentPage, swiper, setSwiper }}
        >
          <Head>
            <title>
              {options.community.name} | {options.community.tagline}
            </title>
            <link
              rel="shortcut icon"
              href={options.community.logo}
              type="image/x-icon"
            />
            <meta name="description" content={options.community.description} />
          </Head>
          <div
            ref={ref}
            className="mist"
            style={{
              pointerEvents: "none",
              background:
                "linear-gradient(359.51deg, #000000 0.4%, rgba(0, 0, 0, 0) 28.56%);",
              position: "fixed",
              width: "100vw",
              height: "100vh",
              zIndex: 20,
              bottom: 0,
              transition: "none",
            }}
          ></div>
          <div
            className={`fixed z-30 bottom-0 w-screen flex flex-col h-20-screen items-center justify-center translate-y-full ${
              !inView ? "opacity-0 " : "opacity-100 translate-y-0"
            }`}
            style={{
              transition: "all 1.5s ease",
            }}
          >
            <div
              className={`absolute ${
                isConfettiStopped ? "hidden" : "block"
              } -z-10`}
            >
              <Lottie
                eventListeners={[
                  {
                    eventName: "complete",
                    callback: () => {
                      setIsConfettiStopped(true);
                    },
                  },
                ]}
                isStopped={isConfettiStopped}
                options={{
                  loop: false,
                  autoplay: false,
                  animationData: confettiData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={500}
                width={1000}
              />
            </div>
            <LoginButton onClick={() => setIsConfettiStopped(false)} />
            <div className="lg:hidden">
              <MobileNavigation />
            </div>
          </div>
          <div className={` ${!inView ? "opacity-0 " : "opacity-100"}`}>
            <Large />
            <Small />
          </div>
        </MobileNavContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default Home;
