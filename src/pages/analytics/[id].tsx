// analytics
// Get the Response on all the questions

function Analytics(props: any) {
  console.log(props);

  return (
    <div className="m-20 p-20">
      <AnalyticsCard data={props.data} />
    </div>
  );
}

import AnalyticsCard from "@/component/Card";
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";

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

export default Analytics;
