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

  return (
    <div
      style={{ marginBottom: "80px", marginTop: "40px" }}
      className="markdown-body "
    >
      <h1>Responses:</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Country</th>
            <th>Device</th>
            <th>Question</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
          {flattenResponse?.map((el: any) => {
            return (
              <tr key={el?.id}>
                <td>{el?.byUser}</td>
                <td>{el?.country || "🇮🇳"}</td>
                <td>{el?.device || "MacOS"}</td>
                <td>{el?.question}</td>
                <td>{el?.value}</td>
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

          const percentYes = (totalYes / totalResponse) * 100;

          const percentNo = (totalNo / totalResponse) * 100;

          return (
            <div key={el.id} className="flex flex-col gap-4">
              <div>
                {" "}
                <span>{i + 1}</span>
                {". " + el.content}
              </div>
              <div className="flex gap-2 items-center content-center">
                <div>Yes: {totalYes}</div>
                <ProgressBar progress={percentYes} />
                <div>No: {totalNo}</div>
              </div>

              <div> Total response: {totalResponse}</div>
            </div>
          );
        })}
      </div>
      <ResponseTable data={data} />
    </div>
  );
}

export default AnalyticsCard;
