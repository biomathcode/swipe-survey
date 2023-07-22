// TODO: Add Outliers
// TODO: Add Chart
// TODO: Aggreability of user
// TODO: Similar response by users
// TODO: See Response by User
import { GetServerSideProps } from "next";

import AnalyticsCard from "@/component/Card";
import Header from "@/component/Header";
import Separator from "@/component/Separator";

function Analytics(props: any) {
  console.log(props);

  return (
    <>
      <Header theme="light" />
      <div className="flex max-w-lg w-full mt-5 justify-start items-start content-start">
        <h1 className="text-4xl  ">Analytics </h1>
      </div>
      <Separator />
      <div className=""></div>

      <AnalyticsCard data={props.data} />
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
