import Link from "next/link";
import data from "./data";

type CardTypes = {
  header: string;
  description: string;
  id: string;
};

const Card = ({ header, description, id }: CardTypes) => {
  return (
    <Link href={"/survey/" + id} target="_blank">
      <div
        title="card"
        style={{ maxWidth: "340px" }}
        className="transition-colors cursor-pointer	 flex  h-fit md:p-10 p-4 flex-col gap-2 hover:bg-green-900 hover:text-white bg-white text-neutral-900"
      >
        <h2 className="text-2xl">{header}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

function Templates() {
  return (
    <main
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",

        justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
        borderRadius: "50px",
      }}
      className="flex flex-col gap-2 justify-around
      bg-green-100 md:p-0 p-20
      "
    >
      <div className="flex flex-col gap-4 m-2 justify-center content-center items-center">
        <h1 className="text-4xl m-2 font-semibold">Templates</h1>
        <p className="text-lg">Try this template to get started</p>
      </div>
      <div className="flex flex-wrap md:gap-10 gap-5 flex-col lg:flex-row justify-center max-w-screen-xl  ">
        {data.map((el) => (
          <Card
            key={el.id}
            header={el.header}
            id={el.link}
            description={el.description}
          />
        ))}
      </div>
    </main>
  );
}

export default Templates;
