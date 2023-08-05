/* eslint-disable import/no-anonymous-default-export */
import AxiosDigestAuth from "@mhoc/axios-digest-auth";

export default async function (req, res) {
  const { message } = req.body;

  console.log(message);
  const digestAuth = new AxiosDigestAuth({
    username: process.env.TIDB_AI_PUBLIC_KEY || "UtpvZHXk",

    password:
      process.env.TIDB_AI_PRIVATE_KEY || "e947ef68-d9f4-4ae8-87b8-fa5790c8f44c",
  });

  const response = await digestAuth.request({
    headers: { Accept: "application/json" },
    method: "POST",
    url: "https://data.tidbcloud.com/api/v1beta/app/chat2query-RiYCYBHe/endpoint/chat2data",
    data: {
      cluster_id: "1379661944646167521",
      database: "test",
      tables: ["User, Response, Question, Survey"],
      instruction: message,
    },
  });

  if (response.status === 200) {
    console.log(response.data);

    res.status(200).json(response.data);
  } else {
    res.status(400).json(response);
  }
}
