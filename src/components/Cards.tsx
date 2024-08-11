import { useState } from "react";

type Props = {
  question: string;
  answer: string;
  number: number;
  showFlip?: boolean;
};

const bgColors = [
  "#f97316",
  "#8b5cf6",
  "#0ea5e9",
  "#14b8a6",
  "#eab308",
  "#f43f5e",
  "#22c55e",
  "#d946ef",
  "#a855f7",
];

export default function Cards({
  question,
  answer,
  number,
  showFlip = false,
}: Props) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="relative font-inter mx-auto max-w-[500px] center flex-col">
      <div
        className={`relative transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180 rotate-x-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          onClick={handleClick}
          className="absolute w-full h-full  text-black flex items-center justify-center backface-hidden"
        >
          <div
            style={{ backgroundColor: `${bgColors[number % bgColors.length]}` }}
            className={`flex-shrink-0  relative  overflow-hidden  rounded-lg w-[420px] h-[420px] center  shadow-lg`}
          >
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="absolute top-4 left-4 text-gray-200 font-medium text-xl center">
              #{number + 1}
            </div>

            <div className="relative  ">
              <div className="center flex-col  px-2">
                <p className="text-center text-3xl font-extrabold text-white">
                  {question}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={handleClick}
          className=" w-full h-full flex items-center justify-center rotate-x-180 rotate-y-180 backface-hidden"
        >
          <div
            style={{
              backgroundColor: `${bgColors[(number + 4) % bgColors.length]}`,
            }}
            className={`flex-shrink-0  relative overflow-hidden  rounded-lg w-[420px] h-[420px] center  shadow-lg`}
          >
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="absolute top-4 left-4 text-gray-200 font-medium text-xl center">
              Answer
            </div>
            <div className="relative center flex-col px-2 ">
              <div className="center flex-col">
                <p className="text-center text-3xl font-extrabold text-white">
                  {answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showFlip && (
        <button
          onClick={handleClick}
          className="center mx-auto mt-2   bg-gray-800 text-white px-4 py-2 rounded"
        >
          {flipped ? "Show Question" : "Reveal Answer"}
        </button>
      )}
    </div>
  );
}
