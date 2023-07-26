import AxiosDigestAuth from "@mhoc/axios-digest-auth";

export default async function (req, res) {
  const digestAuth = new AxiosDigestAuth({
    username: process.env.TIDB_PUBLIC_KEY || "",

    password: process.env.TIDB_PRIVATE_KEY || "",
  });

  const response = await digestAuth.request({
    headers: { Accept: "application/json" },
    method: "GET",
    url: "https://us-east-1.data.tidbcloud.com/api/v1beta/app/dataapp-NmKNFhfR/endpoint/Response",
  });
  console.log(response.data);

  res.status(200).json(response.data);
}
