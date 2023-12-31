// Create Survey page

"use Client";
import CreateSurvey from "@/component/CreateSurvey";
import {
  ExternalLinkIcon,
  Pencil1Icon,
  PieChartIcon,
  ViewGridIcon,
} from "@radix-ui/react-icons";
import axios from "axios";
import { formatDistance, setDate } from "date-fns";
import { GetServerSideProps } from "next";
import { getToken } from "next-auth/jwt";
import Link from "next/link";
import { useRouter } from "next/router";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import DeleteSurvey from "@/component/DeleteSurvey";
import { useEffect, useState } from "react";
import Header from "@/component/Header";
import { headers } from "next/headers";
import Image from "next/image";

// TODO: REPLACE LINK TO DIALOG TO CREATE SURVEY
function Surveys(props) {
  const router = useRouter();

  let [data, setData] = useState(props.data);

  const popDelete = (id) => {
    const newData = props.data?.filter((el) => el.id !== id);

    setData(newData);
  };

  console.log(data);
  return (
    <>
      <Header />
      <div
        style={{
          width: "100vh",
          height: "calc(100vh -  80px)",
          overflow: "scroll",
        }}
        className="flex flex-col justify-start gap-2 items-center mt-5 min-w-full min-h-full"
      >
        <div className="flex justify-between gap-20">
          <h1 className="font-bold text-2xl">Survey</h1>
          <CreateSurvey />
        </div>
        <hr style={{ width: "100vw" }} />
        <div className="w-full p-10 flex justify-center items-center content-center">
          <div className="md:flex flex-wrap ">
            {data?.length > 0 ? (
              data?.map((el) => (
                <div
                  key={el.id}
                  style={{ minWidth: "300px" }}
                  className="p-4 w-md md:m-10 bg-white border border-gray-200 rounded-lg shadow flex flex-col mt-3 gap-2 justify-between "
                >
                  <div
                    style={{ minWidth: "300px" }}
                    className="p-2 w-md   flex gap-2 justify-between "
                  >
                    <Link
                      target="_blank"
                      href={"/survey/" + el.id}
                      className="flex gap-4 justify-start font-bold items-center"
                    >
                      <div>{el.title}</div>
                      <ExternalLinkIcon />
                    </Link>
                    <div className="text-sm text-neutral-400 flex items-end justify-end">
                      {formatDistance(new Date(el.createdAt), new Date(), {
                        addSuffix: true,
                      })}
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm text-neutral-500">
                    <div>Question: {el.question.length}</div>
                    <div>Response: {el.question[0]?.Response?.length} </div>
                  </div>

                  <div className="flex justify-around gap-2">
                    <button
                      onClick={() => {
                        router.push("/analytics/" + el.id);
                      }}
                      className="bg-neutral-900 text-white px-3 text-sm rounded py-2 flex gap-2 items-center justify-center"
                    >
                      <PieChartIcon />
                      Analytics
                    </button>
                    <button
                      onClick={() => {
                        router.push("/edit/" + el.id);
                      }}
                      className=" bg-neutral-900 text-white px-3 rounded py-2 text-sm flex gap-2 items-center justify-center"
                    >
                      <Pencil1Icon />
                      Edit
                    </button>

                    <DeleteSurvey id={el.id} popSurvey={popDelete} />
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col justify-center gap-10 items-center content-center">
                <Image
                  src={"/Calendar.png"}
                  width={400}
                  height={300}
                  alt="Calendar image"
                />
                <p>No Survey Found </p>

                <CreateSurvey />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps = async (ctx) => {
  const host = ctx.req.headers.host;

  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  if (session) {
    const response = await fetch(
      `${protocal}://${host}/api/email/${session.user?.email}/survey`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = await response.json();

    return {
      props: {
        data: res.data,
      },
    };
  } else {
    return {
      props: {
        data: [],
        msg: "Not Authenticated",
      },
    };
  }

  // your fetch function here
};

export default Surveys;
