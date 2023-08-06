// TODO: Add Outliers
// TODO: Add Chart
// TODO: Aggreability of user
// TODO: Similar response by users
// TODO: See Response by User
import { GetServerSideProps } from "next";

import AnalyticsCard, { ResponseTable } from "@/component/Card";
import Header from "@/component/Header";
import Separator from "@/component/Separator";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import AITable from "@/component/AITable";

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
      <ResponseTable data={props.data} />
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
