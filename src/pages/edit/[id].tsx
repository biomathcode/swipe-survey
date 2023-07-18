// TODO: Add Preview

import QuestionForm from "@/component/QuestionForm";
import { useState } from "react";
import { GetServerSideProps } from "next";
import EditForm from "@/component/EditForm";
import Swiper from "@/component/Swiper";

function Edit(props: any) {
  console.log("this", props);
  const [data, setData] = useState(props.data.question);

  return (
    <>
      <div className="flex justify-around">
        <div
          style={{
            width: "50vw",
            height: "calc(100vh - 50px",
            overflow: "scroll",
            padding: "100px 20px",
          }}
          className="mt-20 flex justify-center items-center content-center"
        >
          <div className="flex flex-col max-w-lg ">
            <input
              className="text-6xl border-b-2 border-gray-600"
              defaultValue={props.data.title}
            />
            <QuestionForm
              surveyid={props.data.id}
              data={data}
              setData={setData}
            />

            {data?.map((el: any, i: any) => (
              <EditForm i={i} el={el} key={i} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center">Preview</h1>
          <Swiper questions={data} />
        </div>
      </div>
      <div
        style={{
          position: "sticky",
          bottom: "0px",
          width: "100vw",
          height: "60px",
        }}
        className="bg-neutral-800 text-white flex justify-around content-center items-center "
      >
        <div></div>
        <button className="bg-blue-600 px-4 py-2  ">Publish</button>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const res = await fetch("http://localhost:3000/api/survey/" + id); // your fetch function here

  const data = await res.json();

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
