import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

// run example
// get User by email=sharma.pratik2016@gmail.com
// get Response with all columns where value = false
// Count Response where Country = India
//

export default function AITable() {
  const [data, setData] = useState<any>();

  const columns = data?.data?.columns.map((el: any) => el.col);

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const response = await axios.post("/api/analysis", {
      message: data.message,
    });

    setData(response.data);
    reset();
  };

  return (
    <div className="markdown-body ">
      <h1 className="my-4  text-2xl">AI Query</h1>

      <form className="flex gap-2 my-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Write your ai query"
          {...register("message", { required: true })}
          className="min-w-[320px]  border-b-2 border-gray-900 text-lg outline-none "
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <button
          type="submit"
          disabled={isSubmitting}
          className=" text-neutral-200 bg-neutral-900 inline-block h-[35px] px-2 py-1 rounded"
        >
          {isSubmitting ? "loading..." : "submit"}
        </button>
      </form>
      {isSubmitting && <div>LOADING...</div>}

      <table className="max-w-md">
        <thead>
          <tr>
            {data &&
              data?.data?.columns?.map((e: any, i: number) => (
                <th key={i}>{e.col}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.data?.rows?.map((e: any) => (
              <tr key={e.id}>
                {columns.map((il: any) => (
                  <td className="w-12" key={il}>
                    {e[il]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
