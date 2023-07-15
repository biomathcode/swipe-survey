// Create Survey page
import CreateSurvey from "@/component/CreateSurvey";
import {
  ExternalLinkIcon,
  Pencil1Icon,
  PieChartIcon,
  ViewGridIcon,
} from "@radix-ui/react-icons";
import { formatDistance } from "date-fns";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

// TODO: REPLACE LINK TO DIALOG TO CREATE SURVEY
function Surveys(props: any) {
  console.log(props.data);
  const router = useRouter();
  return (
    <div
      style={{ width: "100vh", height: "calc(100vw -  40px)" }}
      className="flex flex-col justify-start gap-10 items-center mt-20 min-w-full min-h-full"
    >
      <h1 className="font-bold text-2xl">Survey</h1>
      <hr style={{ width: "100vw" }} />
      {props.data.length > 0 ? (
        props.data.map((el: any) => (
          <div
            key={el.id}
            style={{ minWidth: "500px" }}
            className="p-2 w-md  bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-10 justify-between "
          >
            <Link href={"/survey/" + el.id}>
              <div
                style={{ minWidth: "500px" }}
                className="p-2 w-md   flex justify-between "
              >
                <div className="flex gap-4 justify-start items-center">
                  <div>{el.title}</div>
                  <div>
                    <ExternalLinkIcon />
                  </div>
                </div>
                <div className="text-sm text-neutral-400 flex items-end justify-end">
                  {formatDistance(new Date(el.createdAt), new Date(), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </Link>

            <div className="flex justify-around">
              <button
                onClick={() => {
                  router.push("/edit/" + el.id);
                }}
                className=" bg-neutral-900 text-white px-5 rounded py-2 flex gap-2 items-center justify-center"
              >
                <Pencil1Icon />
                Edit
              </button>
              <button
                onClick={() => {
                  router.push("/survey/" + el.id);
                }}
                className="bg-neutral-900 text-white px-5 rounded py-2 flex gap-2 items-center justify-center"
              >
                <ViewGridIcon />
                Preview
              </button>
              <button
                onClick={() => {
                  router.push("/analytics/" + el.id);
                }}
                className="bg-neutral-900 text-white px-5 rounded py-2 flex gap-2 items-center justify-center"
              >
                <PieChartIcon />
                Analytics
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>No Survey Found </p>
          <CreateSurvey />

          <Link href="/edit">Create Survey</Link>
        </div>
      )}
    </div>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/survey"); // your fetch function here

  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
};

export default Surveys;
