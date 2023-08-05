import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

async function question(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id as string;

  if (req.method === "GET") {
    try {
      return res.status(200).json({
        message: "Get question, " + id,
      });
    } catch (err: any) {
      console.error(err);
      return res.status(500).json({
        message: err.message,
      });
    }
  }

  if (req.method === "PUT") {
    // put request
    const { content } = req.body;
    const newData = await prisma.question.update({
      where: {
        id: id,
      },
      data: {
        content: content,
      },
    });

    return res.status(200).json({
      data: newData,
      message: "Updated the question content with id:  " + id,
    });
  }
  if (req.method === "DELETE") {
    const deleteContent = await prisma.question.delete({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: deleteContent,

      message: "Deleted question:  " + id,
    });
  } else {
    return res.status(401).json({
      message: `HTTP method ${req.method} is not supported.`,
    });
  }
}

export default question;
