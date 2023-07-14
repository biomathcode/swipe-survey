import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const data = await prisma.user.findMany({});

  res.status(200).json({ data: data });
}
