"use Client";

import { PlusIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";

function QuestionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      className="mt-20 "
      onSubmit={handleSubmit((ol, onerror) => console.log(ol, onerror))}
    >
      {/* <fieldset className="flex gap-4 mb-10"> */}
      <label htmlFor="question">Question:</label>
      <input
        disabled
        {...register("question", { required: true })}
        placeholder="Write your question here"
        name="question"
        className="min-w-full border-b-2 border-gray-400 text-lg outline-none "
      />
      {/* </fieldset> */}

      {errors.content && <p>Last name is required.</p>}

      <input
        disabled
        type="submit"
        value="Submit"
        className="flex self-end gap-2 text-sm justify-center items-center bg-neutral-900 rounded text-white px-3 py-2"
      />
    </form>
  );
}

export default QuestionForm;
