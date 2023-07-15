import { FileIcon, Pencil1Icon } from "@radix-ui/react-icons";
import axios from "axios";
import { useState } from "react";

function EditForm({ el, i }: { el: any; i: any }) {
  const [isEdit, setIsEdit] = useState(false);

  const [content, setContent] = useState(el.content);

  async function handleContent() {
    if (content !== el.content) {
      const res = await axios.put(
        "http://localhost:3000/api/question/" + el.id,
        {
          content: content,
        }
      );

      setContent(res.data.data.content);

      console.log(res.data);
    } else {
      console.log("content is same");
    }
  }

  return (
    <div className="flex gap-10 my-10">
      {isEdit ? (
        <>
          <input
            // disabled
            // {...register("question", { required: true })}
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="Write your question here"
            name="question"
            className="min-w-full border-b-2 border-gray-400 text-lg outline-none "
          />
          <button
            aria-label="Save"
            onClick={() => {
              handleContent();
              setIsEdit(false);
            }}
            className="px-2 py-1 bg-neutral-800 text-white rounded"
          >
            <FileIcon />
          </button>
        </>
      ) : (
        <>
          <div>{i + 1 + ". " + content}</div>
          <button
            aria-label="Edit"
            onClick={() => setIsEdit(true)}
            className="px-2 py-1 bg-neutral-800 text-white rounded"
          >
            <Pencil1Icon />
          </button>
        </>
      )}
    </div>
  );
}

export default EditForm;
