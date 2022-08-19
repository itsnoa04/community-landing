import { Swiper, SwiperSlide } from "swiper/react";
import Groups from "../sections/groups/groups";
import Users from "../sections/members/users";
import Mid from "../sections/mid/mid";

export interface LargeProps {}

type currentSlide = "groups" | "users" | "mid";

const Small: React.FC<LargeProps> = () => {
  return (
    <>
      <Swiper slidesPerView={1} initialSlide={1} slideToClickedSlide={true}>
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
