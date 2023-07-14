// id => Surveyid
// addQuestion
// Survey Builder

import QuestionForm from "@/component/QuestionForm";
import { GetServerSideProps } from "next";

function edit(props: any) {
  console.log(props);
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
        <QuestionForm />
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

export default edit;
