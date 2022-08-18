import axios from "axios";
import { useEffect, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import feedSchema from "../../schema/feed";
import FeedItem from "./feedItem";
import MobileFeedItem from "./mobileFeedItem";

const Feed = () => {
  const [feed, setFeed] = useState<feedSchema[]>([]);

  useEffect(() => {
    axios.get("/api/feed").then((res) => {
      setFeed(res.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-md font-bold text-white p-7 pb-1 pr-10">LIVE FEED</h1>

      <div className="hidden md:block">
        {feed.map((item) => {
          return (
            <FeedItem
              key={item.id}
              author={item?.author}
              authorImage={item?.authorImg}
              title={item?.title}
              groupName={item?.group?.name}
              groupColor={item?.group?.color}
              groupTextColor={item?.group?.textColor}
            />
          );
        })}
      </div>
      <div className="md:hidden">
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
              {feed.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <MobileFeedItem
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
      </div>
    </>
  );
};
export default Feed;
