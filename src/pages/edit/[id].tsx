// TODO: Add Preview

import QuestionForm from "@/component/QuestionForm";
import { useEffect, useReducer, useRef, useState } from "react";
import { GetServerSideProps } from "next";
import CopyButton from "@/component/CopyButton";
import EditForm from "@/component/EditForm";
import Swiper from "@/component/Swiper";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import axios from "axios";
import Header from "@/component/Header";
import AIWidgetQuestion from "@/component/AIWidget";

function Preview({
  data,
  id,
  title,
}: {
  data: any;
  id: string;
  title: string;
}) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("this is called");
    setToggle(true);
    setTimeout(() => {
      setToggle(false);
    }, 1000);
  }, [data]);

  return (
    <div className="flex flex-col gap-0 items-center max-w-lg content-center">
      <Link target="_blank" href={"/survey/" + id}>
        <div className="flex mt-4 justify-around w-full gap-10 items-center content-center">
          <h1 className="text-lg font-bold text-center">Preview</h1>

          <ExternalLinkIcon />
        </div>
      </Link>
      {!toggle && <Swiper questions={data} isPreview={true} />}

      <div className="markdown-body max-w-lg">
        <div>Share Link</div>
        <CopyButton link={`https://swipe-survey.vercel.app/survey/${id}`} />

        <div>Embed Code</div>

        <CopyButton
          link={`<iframe style={{ width: "100%", height: "700px" }} src="https://swipe-survey.vercel.app/survey/${id}"  title="${data.title}"></iframe>`}
        />
      </div>
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
            <div className="text-6xl border-b-2 border-gray-600">
              {props.data.title}
            </div>
            <div>
              Use Our AI Builder[BETA] :
              <AIWidgetQuestion setQuestions={setData} />
            </div>
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

        <Preview data={data} id={props.data.id} title={props.data.title} />
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
