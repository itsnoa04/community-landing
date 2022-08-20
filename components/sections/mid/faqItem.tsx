import { useInView } from "react-intersection-observer";
import Bubble from "../../global/bubble";

export interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
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
      <Bubble className="m-5 p-5 min-h-30-screen  ">
        <div className=" h-2/4 w-full justify-start items-center">
          <h1 className="text-xl p-5  font-semibold bg-transparent">
            Q: {question}
          </h1>
          <p className="p-5 text-sm">{answer}</p>
        </div>
      </Bubble>
    </div>
  );
};

export default FaqItem;
