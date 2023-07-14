// Create Survey page
import CreateSurvey from "@/component/CreateSurvey";
import { GetServerSideProps } from "next";
import Link from "next/link";

// TODO: REPLACE LINK TO DIALOG TO CREATE SURVEY
function Surveys(props: any) {
  console.log(props.data);
  return (
    <div className="mt-20">
      {props.data.length > 0 ? (
        props.data.map((el: any) => (
          <Link key={el.id} href={"/survey/" + el.id}>
            {el.id}
          </Link>
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
