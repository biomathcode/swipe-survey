import { GetServerSideProps } from "next";
import Swiper from "../../component/Swiper";
import Head from "next/head";
import Link from "next/link";

function SurveyView(props: any) {
  return (
    <>
      <Head>
        <title>{props?.data?.title}</title>
      </Head>
      <div className="text-center w-full">
        <h1 className="text-md md:text-2xl">{props?.data?.title}</h1>
      </div>
      <div
        title="surveyView"
        className="flex flex-col mt-20 sm:mt-20 text-center md:mt-10 justify-center items-center content-center sm:justify-center sm:items-center sm:content-center md:justify-center md:items-center  md:content-center "
        style={{
          width: "100vw",
          height: "calc(100vh - 100px)",
        }}
      >
        {
          props?.data && 
          <Swiper questions={props.data?.question} isPreview={false} />

        }
        <div style={{ position: "fixed", bottom: "10px", width: "100vw" }}>
          Powered by{" "}
          <Link
            target="_blank"
            // style={{ color: "blue" }}
            className="text-blue-600"
            href="https://swipe-survey.vercel.app/"
            aria-label="swipe survey"
          >
            SwipeSurvey
          </Link>
        </div>
      </div>
    </>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const host = ctx.req.headers.host;
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
  let res = await fetch(`${protocal}://${host}/api/survey/${id}`, {
    cache: "no-store",
  });

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

export default SurveyView;
