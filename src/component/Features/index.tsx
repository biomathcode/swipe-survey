type CardTypes = {
  header: string;
  description: string;
};

const Card = ({ header, description }: CardTypes) => {
  return (
    <div
      title="card"
      style={{ maxWidth: "340px" }}
      className="flex  h-fit p-10 flex-col gap-2 hover:bg-neutral-900 hover:text-white bg-neutral-100 text-neutral-900"
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
    >
      <div className="flex flex-col gap-4 justify-center content-center items-center">
        <h1 className="text-4xl mb-5">Features</h1>
        <p className="text-lg">Surveys can be simple and more realistic.</p>
      </div>
      <div className="flex flex-wrap gap-10 flex-col lg:flex-row justify-center  ">
        {[1, 2, 3, 4, 5, 6].map((el) => (
          <Card
            key={el}
            header="Analytics"
            description="Get insights of your data, remove outliers and get a proper path to your hypothesis"
          />
        ))}
      </div>
    </main>
  );
}

export default Features;
