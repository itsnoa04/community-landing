import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import faqSchema from "../../../schema/faq";
import Bubble from "../../global/bubble";
import FaqItem from "./faqItem";

const FAQ = () => {
  const [faq, setFaq] = useState<faqSchema[]>([]);
  const getData = useCallback(async () => {
    const res = await axios.get("/api/faq");
    await setFaq(res.data);
  }, []);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold text-white pt-3 p-7 pb-1 pr-10">FAQ</h1>
      <p className="text-sm text-white justify-center items-center text-center">
        SWIPE TO NAVIGATE
      </p>

      <Swiper slidesPerView={3} className="hidden md:block">
        {faq.map((item, key) => {
          return (
            <>
              <SwiperSlide key={key}>
                <FaqItem question={item.question} answer={item.answer} />
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
        {faq.map((item) => {
          return (
            <>
              <SwiperSlide key={item.id}>
                <Bubble className="m-5 p-5 min-h-30-screen  ">
                  <div className=" h-2/4 w-full justify-start items-center">
                    <h1 className="text-2xl p-5  font-semibold bg-transparent">
                      Q: {item.question}
                    </h1>
                    <p className="p-5">{item.answer}</p>
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

export default FAQ;
