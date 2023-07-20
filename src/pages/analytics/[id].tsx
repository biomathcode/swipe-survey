// TODO: Add Outliers
// TODO: Add Chart
// TODO: Aggreability of user
// TODO: Similar response by users
// TODO: See Response by User
import { GetServerSideProps } from "next";

import AnalyticsCard from "@/component/Card";
import Header from "@/component/Header";

function Analytics(props: any) {
  console.log(props);

  return (
    <>
      <Header />
      <div className="m-20 p-20">
        <div>See Response by user email</div>
        <div>
          Remove Outliers{" "}
          <i>Users which response yes or no to all the answers</i>
          <input type="checkbox" />
        </div>

        <AnalyticsCard data={props.data} />
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
