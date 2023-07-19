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

function Preview({ data }: { data: any }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Preview</h1>
      <Swiper questions={data} />
    </div>
  );
}

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
      <div className="flex  justify-around">
        <div
          style={{
            width: "50vw",
            maxHeight: "calc(100vh - 60px)",
            overflow: "scroll",
            padding: "100px 20px",
          }}
          className=" flex justify-start   content-center"
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
        <div>
          <Link target="_blank" href={"/survey/" + props.data.id}>
            <div className="flex mt-4 justify-around w-full">
              <h1 className="text-2xl font-bold text-center">Preview</h1>

              <ExternalLinkIcon />
            </div>
          </Link>
          <Swiper questions={data} isPreview={true} />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const { data } = await axios.get(`http://localhost:3000/api/survey/${id}`); // your fetch function here

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
