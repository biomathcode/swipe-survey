//
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, PlusCircledIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

function CreateSurvey() {
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");

  const router = useRouter();

  const { data: session } = useSession();

  const handleCreateSurvey = async () => {
    setLoading(true);

    if (!session) {
      return console.log("Please login");
    }

    const create = await axios.post("http://localhost:3000/api/survey", {
      title: title,
      email: session.user?.email,
    });
    console.log(create);

    router.push("/edit/" + create.data.data.id);
    setLoading(false);
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-violet11 bg-neutral-900 gap-2 text-white hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px]  px-[15px] font-medium leading-none  focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          <PlusCircledIcon /> Create Survey
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Create Survey
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Start your survey with a title...
          </Dialog.Description>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-violet11 w-[90px] text-right text-[15px]"
              htmlFor="name"
            >
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="name"
              placeholder="Give Feedback"
              defaultValue="Give feedback"
            />
          </fieldset>

          <div className="mt-[25px] flex justify-end">
            {/* <Dialog.Close asChild> */}
            <button
              onClick={handleCreateSurvey}
              className="bg-neutral-900 text-white  hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            >
              {loading ? <div>Loading...</div> : <div> Create</div>}
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

export default CreateSurvey;
