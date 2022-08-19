import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialSchema from "../../../schema/testimonial";
import Bubble from "../../global/bubble";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<testimonialSchema[]>([]);
  const getData = useCallback(async () => {
    const res = await axios.get("/api/testimonials");
    await setTestimonials(res.data);
  }, []);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="text-md font-bold text-white pt-3 p-7 pb-1 pr-10">
        TESTIMONIALS
      </h1>
      <p className="text-sm text-white justify-center p-2 items-center text-center">
        SWIPE TO NAVIGATE
      </p>

      <Swiper slidesPerView={2} className="hidden md:block">
        {testimonials.map((item) => {
          return (
            <>
              <SwiperSlide key={item.id}>
                <Bubble className="m-5 p-5 min-h-50-screen  ">
                  <div className="flex h-2/4 w-full justify-start items-center">
                    <h1 className="text-2xl p-5  font-semibold bg-transparent">
                      {item.remark}
                    </h1>
                  </div>
                  <div className="h-28" />
                  <div className="flex  absolute bottom-5 right-5 items-center justify-end">
                    <div className="px-5">
                      <h1 className="text-2xl py-1 font-bold">
                        {item.authorName}
                      </h1>
                    </div>
                    <img
                      className="rounded-xl w-24 m-5 ml-2"
                      src={item.avatar}
                      alt="author image"
                    />
                  </div>
                </Bubble>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 1,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        className="md:hidden"
      >
        {testimonials.map((item) => {
          return (
            <>
              <SwiperSlide key={item.id}>
                <Bubble className="m-5 p-5 min-h-50-screen  ">
                  <div className="flex h-2/4 w-full justify-start items-center">
                    <h1 className="text-sm p-5  font-semibold bg-transparent">
                      {item.remark}
                    </h1>
                  </div>
                  <div className="h-10-screen" />
                  <div className="flex  absolute bottom-5 right-5 items-center justify-end">
                    <div className="px-5">
                      <h1 className="text-2xl py-1 font-bold">
                        {item.authorName}
                      </h1>
                    </div>
                    <img
                      className="rounded-xl w-16 m-5 ml-2"
                      src={item.avatar}
                      alt="author image"
                    />
                  </div>
                </Bubble>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testimonials;
