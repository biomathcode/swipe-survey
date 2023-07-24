import { FileIcon, Pencil1Icon } from "@radix-ui/react-icons";
import axios from "axios";
import { useState } from "react";
import DeleteQuestion from "../DeleteQuestion";

function EditForm({ el, i, popDelete }: { el: any; i: any; popDelete: any }) {
  const [isEdit, setIsEdit] = useState(false);

  const [content, setContent] = useState(el.content);

  async function handleContent() {
    if (content !== el.content) {
      const res = await axios.put("/api/question/" + el.id, {
        content: content,
      });

      setContent(res.data.data.content);

      console.log(res.data);
    } else {
      console.log("content is same");
    }
  }

  return (
    <div className="flex gap-10 my-10 items-center content-center">
      {isEdit ? (
        <div className="flex gap-2">
          <div>{i + 1}</div>

          <textarea
            // disabled
            // {...register("question", { required: true })}
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="Write your question here"
            name="question"
            className=" border-b-2 w-[300px] border-gray-400 text-lg outline-none "
          />
          <button
            aria-label="Save"
            onClick={() => {
              handleContent();
              setIsEdit(false);
            }}
            className=" bg-neutral-200 text-neutral-900 inline-block h-[35px] px-2 py-1 rounded"
          >
            <FileIcon />
          </button>
        </div>
      ) : (
        <>
          <div className="w-[300px]">{i + 1 + ". " + content}</div>
          <button
            aria-label="Edit"
            onClick={() => setIsEdit(true)}
            className="  inline-block h-[30px] px-[8px] bg-neutral-200 text-neutral-900 rounded"
          >
            <Pencil1Icon />
          </button>
          <DeleteQuestion id={el.id} popQuestion={popDelete} />
        </>
      )}
    </div>
  );
}

export default EditForm;
