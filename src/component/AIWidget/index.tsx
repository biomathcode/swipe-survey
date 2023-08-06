"use client";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Cross2Icon,
  MagicWandIcon,
  PlusCircledIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import axios from "axios";
import { useState } from "react";

import Chat from "./Chat";

type AIWidgetType = {};

function AIWidgetQuestion({ setQuestions }: { setQuestions: any }) {
  const [loading, setLoading] = useState(false);

  const handleAIWidgetQuestion = async () => {
    setLoading(true);
    location.reload();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="my-4 text-neutral-200 bg-neutral-900 gap-2 hover:bg-mauve3 inline-flex h-[30px] items-center justify-center rounded-[4px]  px-[10px] font-medium leading-none  focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          <MagicWandIcon />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray-200 opacity-60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            AIWidget Question
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            <Chat setQuestions={setQuestions} />
          </Dialog.Description>

          <div className="mt-[25px] flex justify-end">
            {/* <button
              onClick={handleAIWidgetQuestion}
              disabled={loading}
              className="bg-neutral-900 text-white  hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            >
              {loading ? <div>Loading...</div> : <div> Add Questions</div>}
            </button> */}
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

export default AIWidgetQuestion;
