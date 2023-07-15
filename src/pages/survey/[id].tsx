//

import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import Swiper from "../../component/Swiper";

function SurveyView(props: any) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Swiper data={props.data} />
    </div>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

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

export default SurveyView;
