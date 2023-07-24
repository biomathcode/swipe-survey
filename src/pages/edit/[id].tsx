// TODO: Add Preview

import QuestionForm from "@/component/QuestionForm";
import { useState } from "react";
import { GetServerSideProps } from "next";
import EditForm from "@/component/EditForm";
import Swiper from "@/component/Swiper";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import axios from "axios";
import Header from "@/component/Header";

function Edit(props: any) {
  console.log("this", props);
  const [data, setData] = useState(props.data.question);

  function popDelete(id: string) {
    const newData = data.filter((el: any) => el.id !== id);

    setData(newData);
  }

  return (
    <>
      <Header />
      <div className="flex  justify-around flex-col md:flex-row w-screen ">
        <div
          style={{
            maxHeight: "calc(100vh - 60px)",
            overflow: "scroll",
            padding: "50px 0px",
          }}
          className="flex w-[340px] sm:w-[400px] min-w-full md:min-w-fit md:w-[500px] lg:w-[700px]   justify-start   content-center"
        >
          <div className="flex flex-col justify-start max-w-lg ">
            <h1 className="text-6xl border-b-2 border-gray-600">
              {props.data.title}
            </h1>
            <QuestionForm
              surveyid={props.data.id}
              data={data}
              setData={setData}
            />

            {data?.map((el: any, i: any) => (
              <EditForm i={i} el={el} key={i} popDelete={popDelete} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-0 items-center max-w-lg content-center">
          <Link target="_blank" href={"/survey/" + props.data.id}>
            <div className="flex mt-4 justify-around w-full">
              <h1 className="text-2xl font-bold text-center">Preview</h1>

              <ExternalLinkIcon />
            </div>
          </Link>
          <Swiper questions={data} isPreview={true} />
          <div className="markdown-body max-w-lg">
            <h3>Embed Code</h3>
            <div className="bg-gray-200 p-3 rounded-lg text-[14px]">
              {`<iframe style={{ width: "100%", height: "700px" }} src="https://swipe-survey.vercel.app/survey/${props.data.id}"  title="${props.data.title}"></iframe>`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const host = ctx.req.headers.host;

  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const { id } = ctx.query;
  const { data } = await axios.get(`${protocal}://${host}/api/survey/${id}`); // your fetch function here

  if (!data) {
    return {
      notFound: true,
    };
  }

  console.log(data.data);

  return {
    props: {
      data: data.data,
    },
  };
};

export default Edit;
