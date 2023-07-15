"use Client";

import { PlusIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

function QuestionForm({
  data,
  setData,
  surveyid,
}: {
  data: any;
  setData: any;
  surveyid: any;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: session } = useSession();

  return (
    <form
      className="mt-20 flex justify-between items-center gap-2  "
      onSubmit={handleSubmit(async (ol, onerror) => {
        setData((data: any) => [
          ...data,
          {
            content: ol.question,
            email: session?.user?.email,
          },
        ]);
        const data = await axios.post("http://localhost:3000/api/question", {
          content: ol.question,
          surveyId: surveyid,
          email: session?.user?.email,
        });
        console.log(data);
        reset();
      })}
    >
      <input
        // disabled
        {...register("question", { required: true })}
        placeholder="Write your question here"
        name="question"
        className="min-w-full border-b-2 border-gray-400 text-lg outline-none "
      />

      {errors.content && <p>Last name is required.</p>}

      <input
        // disabled
        type="submit"
        value="Submit"
        className="flex  gap-2 text-sm justify-center items-center bg-neutral-900 rounded text-white px-3 py-2"
      />
    </form>
  );
}

export default QuestionForm;
