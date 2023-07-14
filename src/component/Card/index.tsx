function AnalyticsCard({ data }: { data: any }) {
  return (
    <div className="text-black">
      <h1>{data.title}</h1>
      <div className="flex flex-col gap-10 align-center">
        {data.question.map((el: any, i: any) => {
          const totalResponse = el.Response.length;
          const totalYes = el.Response.filter(
            (el: any) => el.value.trim() === "true"
          ).length;
          const totalNo = el.Response.filter(
            (el: any) => el.value === "false"
          ).length;

          return (
            <div key={el.id}>
              <div>
                {" "}
                <span>{i + 1}</span>
                {". " + el.content}
              </div>
              <div> Total response: {totalResponse}</div>
              <div>Total Yes: {totalYes}</div>
              <div>Total No: {totalNo}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnalyticsCard;
