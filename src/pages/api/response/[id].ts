//GET:  get response
//DELETE:  delete response
//UPDATE:  udpate response

import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import { Question } from "@prisma/client";

export default async function Response(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === "GET") {
    const question = await prisma.question.findFirst({
      where: {
        id: id,
      },
    });

    res.status(200).json({ data: question, msg: "SuccessFul " });
  }
}
