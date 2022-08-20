import { useInView } from "react-intersection-observer";
import { SwiperSlide } from "swiper/react";
import Bubble from "../../global/bubble";

export interface TestimonialProps {
  remark: string;
  authorName: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  remark,
  authorName,
  avatar,
}) => {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={` -translate-y-full ${
        !inView ? "opacity-0 " : "opacity-100 -translate-y-0"
      }`}
      style={{
        transition: "all 1.5s ease",
      }}
    >
      <Bubble className="m-5 p-5 min-h-50-screen  ">
        <div className="flex h-2/4 w-full justify-start items-center">
          <h1 className="text-2xl p-5  font-semibold bg-transparent">
            {remark}
          </h1>
        </div>
        <div className="h-28" />
        <div className="flex  absolute bottom-5 right-5 items-center justify-end">
          <div className="px-5">
            <h1 className="text-2xl py-1 font-bold">{authorName}</h1>
          </div>
          <img
            className="rounded-xl w-24 m-5 ml-2"
            src={avatar}
            alt="author image"
          />
        </div>
      </Bubble>
    </div>
  );
};

export default Testimonial;
