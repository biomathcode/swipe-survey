import { getToken } from "next-auth/jwt";

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`
  const session = await getServerSession(req, res, authOptions);

  console.log(session);

  return res.send(JSON.stringify(session, null, 2));
}
