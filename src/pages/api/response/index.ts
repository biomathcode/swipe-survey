// GET:  get all response by user
// POST: create new Response

import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function Response(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const getMany = await prisma.response.findMany({});
    return res.status(200).json({ data: getMany, msg: "success" });
  }
  if (req.method === "POST") {
    const { questionId, value, userId } = req.body;
    const createPost = await prisma.response.create({
      data: {
        questionId: questionId,
        value: value,
        byUser: userId,
        question: {
          connect: {
            id: questionId,
          },
        },
      },
    });

    return res
      .status(200)
      .json({ data: createPost, msg: "Successfully created Response" });
  }
}
