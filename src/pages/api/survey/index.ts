// GET:  get all survey by user
// POST:  Create survey by user

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

// GET all survey
// Post To create a new survey

async function survey(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const allsurvey = await prisma.survey.findMany({});
      res.status(200).json({
        data: allsurvey,
        msg: "ALL the Survey",
      });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({
        msg: err.message,
      });
    }
  }

  if (req.method === "POST") {
    const { title, surveyId, userId } = req.body;

    const createSurvey = await prisma.survey.create({
      data: {
        title: title,
        createAt: new Date(),
        createdBy: {
          connect: {
            id: userId,
          },
        },
      },
    });

    res.status(200).json({
      data: createSurvey,
      msg: "ALL the Survey",
    });
  } else {
    res.status(401).json({
      message: `HTTP method ${req.method} is not supported.`,
    });
  }
}

export default survey;
