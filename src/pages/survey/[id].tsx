import { GetServerSideProps } from "next";
import Swiper from "../../component/Swiper";
import { headers } from "next/headers";
import { nanoid } from "nanoid";
import axios from "axios";
import { useEffect, useState } from "react";

function SurveyView(props: any) {
  const [user, setUser] = useState({
    ip: "",
    countryName: "",
    countryCode: "",
    city: "",
    timezone: "",
  });

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setUser({
          ...user,
          ip: data.ip,
          countryName: data.country_name,
          countryCode: data.country_calling_code,
          city: data.city,
          timezone: data.timezone,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    let device = window.navigator.userAgent;
    console.log("device", device);
    getGeoInfo();
  }, []);

  console.log("this is user", user);

  return (
    <>
      <div
        title="surveyView"
        className="flex flex-col mt-20 sm:mt-20 text-center md:mt-10 justify-start items-start content-start md:justify-center md:items-center md:content-center "
        style={{
          width: "100vw",
          height: "calc(100vh - 100px)",
        }}
      >
        <h1 className="text-md md:text-2xl">{props.data.title}</h1>
        <Swiper questions={props.data.question} isPreview={false} />
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
