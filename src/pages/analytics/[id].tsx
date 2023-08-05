// TODO: Add Outliers
// TODO: Add Chart
// TODO: Aggreability of user
// TODO: Similar response by users
// TODO: See Response by User
import { GetServerSideProps } from "next";

import AnalyticsCard from "@/component/Card";
import Header from "@/component/Header";
import Separator from "@/component/Separator";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function AITable() {
  const [data, setData] = useState<any>();

  const columns = data?.data?.columns.map((el: any) => el.col);

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
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
          disabled={isLoading}
          className=" text-neutral-200 bg-neutral-900 inline-block h-[35px] px-2 py-1 rounded"
        >
          submit
        </button>
      </form>

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

function Analytics(props: any) {
  console.log(props);

  return (
    <>
      <Header theme="light" />
      <div className="flex max-w-lg w-full mt-5 justify-around items-center content-center">
        <h1 className="text-4xl  ">Analytics </h1>
        <Link target="_blank" href={"/survey/" + props.data.id}>
          <ExternalLinkIcon />
        </Link>
      </div>
      <Separator />

      <AnalyticsCard data={props.data} />
      <AITable />
    </>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const host = ctx.req.headers.host;

  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocal}://${host}/api/survey/${id}`); // your fetch function here

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.data,
    },
  };
};

export default Analytics;
