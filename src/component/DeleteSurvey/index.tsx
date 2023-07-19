import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, PlusCircledIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useState } from "react";

type DeleteType = {
  id: string;
  popSurvey: (id: string) => void;
};

function DeleteSurvey({ id, popSurvey }: DeleteType) {
  const [loading, setLoading] = useState(false);

  const handleDeleteSurvey = async () => {
    setLoading(true);
    const res = await axios.delete("http://localhost:3000/api/survey/" + id);

    if (res.status === 200) {
      popSurvey(id);
      setLoading(false);
      window.location.reload();
    } else {
      setLoading(false);
    }
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-violet11 bg-neutral-900 gap-2 text-white hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px]  px-[15px] font-medium leading-none  focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          <PlusCircledIcon /> Delete Survey
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Delete Survey
          </Dialog.Title>

          <div className="mt-[25px] flex justify-end">
            {/* <Dialog.Close asChild> */}
            <button
              onClick={handleDeleteSurvey}
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

export default DeleteSurvey;
