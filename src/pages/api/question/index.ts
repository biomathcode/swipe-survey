import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

// GET all question
// Post To create a new question

async function question(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const allquestion = await prisma.question.findMany({
        include: {
          Response: true,
        },
      });
      return res.status(200).json({
        data: allquestion,

        msg: "ALL the Question",
      });
    } catch (err: any) {
      console.error(err);
      return res.status(500).json({
        msg: err.message,
      });
    }
  }

  if (req.method === "POST") {
    const { content, surveyId, email } = req.body;

    if (typeof content === "string") {
      const createQuestion = await prisma.question.create({
        data: {
          content: content,
          createdAt: new Date(),
          surveyId: surveyId,
          email: email,
        },
      });

      return res.status(200).json({
        data: createQuestion,
        msg: "ALL the Question",
      });
    }

    if (typeof content === "object") {
      const manycontent = content.map((el: any) => {
        return {
          content: el,
          createdAt: new Date(),
          surveyId,
          email,
        };
      });
      const createQuestion = await prisma.question.createMany({
        data: manycontent,
        skipDuplicates: true,
      });

      return res.status(200).json({
        data: createQuestion,
        msg: "Created Multiple the Question",
      });
    }
  } else {
    return res.status(401).json({
      message: `HTTP method ${req.method} is not supported.`,
    });
  }
}

export default question;
