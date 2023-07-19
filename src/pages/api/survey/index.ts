// GET:  get all survey by user
// POST:  Create survey by user

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

// GET all survey
// Post To create a new survey

async function survey(req: NextApiRequest, res: NextApiResponse) {
  // const session = await getServerSession(req, res, authOptions);

  // console.log("SESSION: ", session?.user?.email);

  if (req.method === "GET") {
    try {
      const allsurvey = await prisma.survey.findMany({});

      console.log("data", allsurvey);
      return res.status(200).json({
        data: allsurvey,

        msg: "All the Survey",
      });
    } catch (err: any) {
      console.error(err);
      return res.status(500).json({
        msg: err.message,
      });
    }
  }

  if (req.method === "POST") {
    const { title, email } = req.body;

    console.log(email);

    const createSurvey = await prisma.survey.create({
      data: {
        title: title,
        email: email,
      },
    });

    return res.status(200).json({
      data: createSurvey,
      msg: "ALL the Survey",
    });
  } else {
    return res.status(401).json({
      message: `HTTP method ${req.method} is not supported.`,
    });
  }
}

export default survey;
