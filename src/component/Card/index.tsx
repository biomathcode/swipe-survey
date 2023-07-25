"use Client";

import * as Progress from "@radix-ui/react-progress";

const ProgressBar = ({
  progress,
  color = "#B6E2A1",
}: {
  progress: number;
  color?: string;
}) => {
  return (
    <Progress.Root
      className="relative overflow-hidden  rounded-full w-[300px] h-[10px]"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
        background: "#FF8787",
      }}
      value={progress}
    >
      <Progress.Indicator
        className=" w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{
          transform: `translateX(-${100 - progress}%)`,
          background: color,
        }}
      />
    </Progress.Root>
  );
};

const ResponseTable = ({ data }: { data: any }) => {
  const responses = data?.question.map((el: any) =>
    el?.Response.map((e: any) => ({ ...e, question: el.content }))
  );

  const flattenResponse = []?.concat(...responses);

  const totalYesResponse = flattenResponse.filter(
    (el: any) => el?.value === "true"
  ).length;

  const totalResponse = flattenResponse.length;

  const totalAgreeability = (totalYesResponse / flattenResponse.length) * 100;

  const totalDisAgreeability =
    ((totalResponse - totalYesResponse) / totalResponse) * 100;

  let desired_output = (employees_details: any) => {
    let unique_values = employees_details
      .map((item: any) => item.country)
      .filter(
        (value: any, index: any, current_value: any) =>
          current_value.indexOf(value) === index
      )
      .filter((n: any) => n);
    return unique_values;
  };

  let get_unique_users = (employees_details: any) => {
    let unique_values = employees_details
      .map((item: any) => item.byUser)
      .filter(
        (value: any, index: any, current_value: any) =>
          current_value.indexOf(value) === index
      )
      .filter((n: any) => n);
    return unique_values;
  };

  const unique_users = get_unique_users(flattenResponse);
  const response_by_users = () => {
    const obj: any = new Object();

    unique_users.map((el: string, i: number) => {
      obj[el] = flattenResponse.filter((e: any) => e.byUser === el);
    });

    return obj;
  };

  return (
    <div
      style={{ marginBottom: "80px", marginTop: "40px" }}
      className="markdown-body "
    >
      <h1>Responses:</h1>
      <p>Total Agreeable Response = {totalAgreeability.toFixed(2)}%</p>
      <p>Total Disagreeable Response = {totalDisAgreeability.toFixed(2)}%</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Country</th>
            <th>Device</th>
            <th>Total Response</th>
            <th>Total Yes</th>
            <th>Total No</th>
          </tr>
        </thead>
        <tbody>
          {unique_users?.map((el: any, i: any) => {
            const single_user = response_by_users()[el];

            const length = single_user.length;

            const user = single_user[0];

            console.log("single user", response_by_users()[el]);
            const device = user?.device?.match(/\(.*?;\s*([^)]+)/)?.[1];

            const totalYes = single_user.filter(
              (e: any) => e.value === "true"
            ).length;

            const totalNo = single_user.filter(
              (e: any) => e.value === "false"
            ).length;

            const IsOutlier = length === totalYes || length === totalNo;

            return (
              <tr key={el}>
                <td>{el}</td>
                <td>{user?.country || "🇮🇳"}</td>
                <td className="max-w-xs">{device || "MacOS"}</td>
                <td>{length}</td>
                <td>{totalYes}</td>
                <td>{totalNo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

function AnalyticsCard({ data }: { data: any }) {
  return (
    <div className="text-black max-w-2xl">
      <h1 className="my-4  text-2xl">{data.title}</h1>
      <div className="flex flex-col gap-10 align-center content-center">
        {data.question.map((el: any, i: any) => {
          const totalResponse = el.Response.length;
          const totalYes = el.Response.filter(
            (el: any) => el.value.trim() === "true"
          ).length;
          const totalNo = el.Response.filter(
            (el: any) => el.value === "false"
          ).length;

          const percentYes = (totalYes / totalResponse) * 100;

          const percentNo = (totalNo / totalResponse) * 100;

          return (
            <div
              key={el.id}
              className="flex flex-col gap-4 border border-gray-200 px-6 max-w-lg rounded-lg py-4"
            >
              <div>
                {" "}
                <span>{i + 1}</span>
                {". " + el.content}
              </div>
              <div className="flex gap-2 items-center content-center">
                <div className="text-sm text-gray-600">Yes: {totalYes}</div>
                <ProgressBar progress={percentYes} />
                <div className="text-sm text-gray-600">No: {totalNo}</div>
              </div>

              <div className="text-sm text-gray-600">
                {" "}
                Total response: {totalResponse}
              </div>
            </div>
          );
        })}
      </div>
      <ResponseTable data={data} />
    </div>
  );
}

export default AnalyticsCard;
