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
    const response = await prisma.response.findFirst({
      where: {
        id: id,
      },
    });

    res.status(200).json({ data: response, msg: "SuccessFul " });
  }
  if (req.method === "PUT") {
    const value = req.body.value;
    const response = await prisma.response.update({
      where: {
        id: id,
      },
      data: {
        value: value,
      },
    });

    res
      .status(200)
      .json({ data: response, msg: "SuccessFul Updated Response" });
  }

  if (req.method === "DELETE") {
    const deleteResponse = await prisma.response.delete({
      where: {
        id,
      },
    });
    res
      .status(200)
      .json({ data: deleteResponse, msg: "SuccessFul Deleted Response" });
  }
}
