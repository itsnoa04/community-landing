import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MobileNavContext } from "../../context/MobileNavigationContext";
import Groups from "../sections/groups/groups";
import Users from "../sections/members/users";
import Mid from "../sections/mid/mid";

export interface LargeProps {}

const Small: React.FC<LargeProps> = () => {
  const { setSwiper, setCurrentPage } = useContext(MobileNavContext);
  const screenList = ["groups", "home", "users"];
  return (
    <>
      <Swiper
        slidesPerView={1}
        initialSlide={1}
        slideToClickedSlide={true}
        onSwiper={(swiper) => setSwiper(swiper)}
        onRealIndexChange={(swiper) =>
          setCurrentPage(screenList[swiper.realIndex])
        }
      >
        <SwiperSlide>
          <Groups />
        </SwiperSlide>
        <SwiperSlide>
          <Mid />
        </SwiperSlide>
        <SwiperSlide>
          <Users />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Small;
