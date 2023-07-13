// Create Survey page
import { GetServerSideProps } from "next";
import Link from "next/link";

function Surveys(props: any) {
  console.log(props.data);
  return (
    <div>
      {props.data.map((el: any) => (
        <Link key={el.id} href={"/survey/" + el.id}>
          {el.id}
        </Link>
      ))}
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
