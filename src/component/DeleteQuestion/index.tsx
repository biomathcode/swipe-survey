//
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, PlusCircledIcon, TrashIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useState } from "react";

type DeleteType = {
  id: string;
  popQuestion: (id: string) => void;
};

function DeleteQuestion({ id, popQuestion }: DeleteType) {
  const [loading, setLoading] = useState(false);

  const handleDeleteQuestion = async () => {
    setLoading(true);
    const deleteRes = await axios.delete(
      "http://localhost:3000/api/question/" + id
    );

    if (deleteRes) {
      setLoading(false);
      popQuestion(id);
    } else {
      setLoading(true);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className=" bg-neutral-200 text-neutral-900 gap-2 hover:bg-mauve3 inline-flex h-[30px] items-center justify-center rounded-[4px]  px-[10px] font-medium leading-none  focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          <TrashIcon />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Delete Question
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Delete Question
          </Dialog.Description>

          <div className="mt-[25px] flex justify-end">
            {/* <Dialog.Close asChild> */}
            <button
              onClick={handleDeleteQuestion}
              className="bg-neutral-900 text-white  hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            >
              {loading ? <div>Loading...</div> : <div> Confirm</div>}
            </button>
            {/* </Dialog.Close> */}
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default DeleteQuestion;
