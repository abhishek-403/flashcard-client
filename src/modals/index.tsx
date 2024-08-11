import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { SERVER_BASE_URL } from "../pages/Admin";
import toast from "react-hot-toast";
import { GrAdd, GrAddCircle } from "react-icons/gr";
import { IoAddCircle } from "react-icons/io5";
export function AddCardModal({
  isOpen,
  onOpen,
  onOpenChange,
  fetchCards,
}: any) {
  const question = useRef<HTMLInputElement>(null);
  const answer = useRef<HTMLInputElement>(null);
  async function handleAdd() {
    const res = await axios.post(`${SERVER_BASE_URL}/addCard`, {
      question: question.current?.value,
      answer: answer.current?.value,
    });
    if (res.data.status === "success") {
      onOpenChange();
      fetchCards();
      toast.success(res.data.result);
    } else {
      toast.error(res.data.result);
    }
  }
  return (
    <>
      <Button
        onPress={onOpen}
        color="secondary"
        className="font-poppins fixed bottom-10 right-10"
        size="lg"
      >
        Add New Card <IoAddCircle size={26}/>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Flash Card
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  placeholder="What's the question"
                  variant="bordered"
                  ref={question}
                  required
                />
                <Input
                  placeholder="What's the answer"
                  variant="bordered"
                  ref={answer}
                  required
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleAdd}>
                  Add Question
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function EditCardModal({
  isOpen,
  onOpen,
  onOpenChange,
  prevquestion,
  prevanswer,
  id,
  fetchCards,
}: any) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    setQuestion(prevquestion);
    setAnswer(prevanswer);
  }, []);
  async function handleAdd() {
    const res = await axios.patch(`${SERVER_BASE_URL}/updatedCard`, {
      question,
      id,
      answer,
    });
    if (res.data.status === "success") {
      onOpenChange();
      fetchCards();
      toast.success(res.data.result);
    } else {
      toast.error(res.data.result);
    }
  }
  return (
    <>
      <Button onPress={onOpen} color="primary">
        Edit
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Flash Card
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  placeholder="What's the question"
                  variant="bordered"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <Input
                  placeholder="What's the answer"
                  variant="bordered"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleAdd}>
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function ConfirmModal({
  isOpen,
  onOpenChange,
  title,
  message,
  confirmFunction,
}: any) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <p>{message}</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => onClose()}
                >
                  No
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    confirmFunction(), onClose();
                  }}
                >
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
