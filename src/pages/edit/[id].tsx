// TODO: Add Preview

import QuestionForm from "@/component/QuestionForm";
import { useState } from "react";
import { GetServerSideProps } from "next";
import EditForm from "@/component/EditForm";
import Swiper from "@/component/Swiper";

function Edit(props: any) {
  console.log("this", props);
  const [data, setData] = useState([...props.data.question]);

  const newData = {
    question: data.map((el, i) => ({
      id: i + 1,
      question: el.content,
    })),
  };
  console.log(newData);
  return (
    <>
      <div className="flex justify-around">
        <div
          style={{ width: "50vw", height: "calc(100vh - 50px" }}
          className="mt-20 flex justify-center items-center content-center"
        >
          <div className="flex flex-col min-h-full max-w-lg ">
            <input
              className="text-6xl border-b-2 border-gray-600"
              defaultValue={props.data.title}
            />
            <QuestionForm
              surveyid={props.data.id}
              data={data}
              setData={setData}
            />

            {data.map((el, i) => (
              <EditForm i={i} el={el} key={i} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center">Preview</h1>
          <Swiper data={props.data} />
        </div>
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

  return {
    props: {
      data: data.data,
    },
  };
};

export default Edit;
