import data from "./data";

type CardTypes = {
  header: string;
  description: string;
};

const Card = ({ header, description }: CardTypes) => {
  return (
    <div
      title="card"
      style={{ maxWidth: "340px" }}
      className="transition-colors	 flex  h-fit md:p-10 p-4 flex-col gap-2 hover:bg-neutral-900 hover:text-white bg-white text-neutral-900"
    >
      <h2 className="text-2xl">{header}</h2>
      <p>{description}</p>
    </div>
  );
};

function Features() {
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
      }}
      className="bg-orange-100 md:p-0 p-20"
    >
      <div className="flex flex-col gap-4 m-2 justify-center content-center items-center">
        <h1 className="text-4xl m-2 font-semibold">Features</h1>
        <p className="text-lg">Surveys can be simple and more realistic.</p>
      </div>
      <div className="flex flex-wrap md:gap-10 gap-5 flex-col lg:flex-row justify-center max-w-screen-xl  ">
        {data.map((el) => (
          <Card key={el.id} header={el.header} description={el.description} />
        ))}
      </div>
    </main>
  );
}

export default Features;
