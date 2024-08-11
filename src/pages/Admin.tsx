import { Button, Card, useDisclosure } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { AddCardModal, ConfirmModal, EditCardModal } from "../modals";
import toast from "react-hot-toast";
type Props = {};
export interface ICard {
  question: string;
  answer: string;
  id: number;
}
export const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
export default function Admin({}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [cards, setCards] = useState<ICard[]>([]);
  async function fetchCards() {
    const res = await axios.get(`${SERVER_BASE_URL}/getCards`);
    setCards(res.data.result);
  }
  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="flex-wrap gap-x-4 gap-y-6 py-8 center ">
        {cards.map((card, i) => (
          <div className="">
            <CardComponent number={i} fetchCards={fetchCards} {...card} />
          </div>
        ))}
      </div>
      <AddCardModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        fetchCards={fetchCards}
      />
    </div>
  );
}

export function CardComponent(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isOpen: confirmisOpen, onOpenChange: confirmonOpenchange } =
    useDisclosure();
  async function handleDelete() {
    const res = await axios.delete(`${SERVER_BASE_URL}/${props.id}`);
    props.fetchCards();
    toast.success(res.data.result);
  }
  return (
    <div>
      <Card className="w-fit p-2 ">
        <Cards {...props} number={props.number} showFlip />

        <div className="center w-full mt-4 gap-2">
          <div className="">
            <Button
              variant="solid"
              color="danger"
              onClick={confirmonOpenchange}
            >
              Delete
            </Button>
          </div>
          <EditCardModal
            prevanswer={props.answer}
            prevquestion={props.question}
            id={props.id}
            isOpen={isOpen}
            onOpen={onOpen}
            onOpenChange={onOpenChange}
            fetchCards={props.fetchCards}
          />
          <ConfirmModal
            isOpen={confirmisOpen}
            onOpenChange={confirmonOpenchange}
            title={"Confirm to Delete"}
            message={"Are you sure?"}
            confirmFunction={handleDelete}
          />
        </div>
      </Card>
    </div>
  );
}
