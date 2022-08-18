import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialSchema from "../../schema/testimonialSchema";
import Bubble from "../global/bubble";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<testimonialSchema[]>([]);
  const getData = useCallback(async () => {
    const res = await axios.get("/api/users");
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

      <Swiper slidesPerView={"auto"} spaceBetween={30} className="mySwiper">
        {testimonials.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Bubble>
                <div className="flex items-center">
                  <div className="flex  mr-16">
                    <img
                      className="rounded-3xl p-1 w-fit h-24 bg-transparent"
                      src={item.avatar}
                      alt="author image"
                    />
                    <div className="flex flex-col items-start justify-center">
                      <h1 className=" text-xl p-1 font-bold">
                        {item.authorName}
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-2xl uppercase font-semibold bg-transparent">
                    {item.remarks}
                  </h1>
                </div>
              </Bubble>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testimonials;
