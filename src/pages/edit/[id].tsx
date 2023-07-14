// id => Surveyid
// addQuestion
// Survey Builder

import QuestionForm from "@/component/QuestionForm";
import { useState } from "react";
import { GetServerSideProps } from "next";

function Edit(props: any) {
  console.log("this", props);
  const [data, setData] = useState([...props.data.question]);
  return (
    <div
      style={{ width: "100vw", height: "calc(100vh - 50px" }}
      className="mt-20 flex justify-center items-center content-center"
    >
      <div className="flex flex-col min-h-full max-w-lg ">
        <input
          className="text-6xl border-b-2 border-gray-600"
          defaultValue={props.data.title}
        />
        <QuestionForm surveyid={props.data.id} data={data} setData={setData} />

        {data.map((el, i) => (
          <div key={i} className="flex gap-10 my-10">
            <div>{i + 1 + ". " + el?.content}</div>
            <button className="px-2 py-1 bg-neutral-800 text-white rounded">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
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
