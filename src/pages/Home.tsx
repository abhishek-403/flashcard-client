import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "../components/Cards";
import { ICard, SERVER_BASE_URL } from "./Admin";
import { Button } from "@nextui-org/react";

type Props = {};

export default function Home({}: Props) {
  const [cards, setCards] = useState<ICard[]>([]);
  async function fetchCards() {
    try {
      const res = await axios.get(`${SERVER_BASE_URL}/getCards`);
      if (res.data.status === "success") {
        setCards(res.data.result);
      }
    } catch (error) {
      toast.error("Internal Error");
    }
  }
  useEffect(() => {
    fetchCards();
  }, []);
  return (
    <div className="min-h-screen">
      <Link to={"/admin"}>
        <Button className="bg-black text-white m-4 absolute">Go to admin page</Button>
      </Link>

      <div className="center flex-col">
        <div className="font-rubik mt-8 text-4xl font-bold text-red-500 ">
          Flash Card Project
        </div>
        <div className="pt-20 pb-2 flex  gap-2 w-[600px] items-center">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              nextEl: "#next-icon",
              prevEl: "#prev-icon",
            }}
            loop
            scrollbar={{ draggable: true }}
          >
            {cards.map((quest: any, i: number) => (
              <SwiperSlide key={i}>
                <Cards {...quest} number={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-2 font-poppins">
          <div id="prev-icon">
            <Button variant="solid" color="secondary">
              Prev
            </Button>
          </div>
          <div id="next-icon">
            <Button color="primary">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
