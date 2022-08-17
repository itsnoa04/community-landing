import axios from "axios";
import { useEffect, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import feedSchema from "../../schema/feed";
import Bubble from "../global/bubble";
import Button from "../global/button";
import MobileFeedItem from "./mobileFeedItem";

function checkVibration() {
  if ("vibrate" in navigator) {
    return true;
  } else {
    return false;
  }
}

export interface mobileFeedProps {}

const MobileFeed: React.FC<mobileFeedProps> = (props) => {
  const [feed, setFeed] = useState<feedSchema[]>([]);

  useEffect(() => {
    axios.get("/api/feed").then((res) => {
      setFeed(res.data);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <p className="text-sm text-white justify-center items-center text-center">
          SWIPE TO NAVIGATE
        </p>
        <div
          className="text-white flex m-5 rounded-xl overflow-clip"
          style={{ height: "50vh" }}
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 1,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {/* <SwiperSlide>
                <MobileFeedItem
                  key="1"
                  author={feed?.[0]?.author}
                  title={feed?.[0]?.title}
                  groupName={feed?.[0]?.group.name}
                  groupColor={feed?.[0]?.group.color}
                  authorImage={feed?.[0]?.authorImg}
                  groupTextColor={feed?.[0]?.group.textColor}
                />
            </SwiperSlide> */}
            {feed.map((item) => {
              return (
                <SwiperSlide>
                  <MobileFeedItem
                    key="1"
                    author={item?.author}
                    title={item?.title}
                    groupName={item?.group.name}
                    groupColor={item?.group.color}
                    authorImage={item?.authorImg}
                    groupTextColor={item?.group.textColor}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MobileFeed;
