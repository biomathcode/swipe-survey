// id
// get survey also all the question in survey
// delete
// update

import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function Survey(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === "GET") {
    const survey = await prisma.survey.findUnique({
      where: {
        id: id,
      },
      include: {
        question: true,
      },
    });
    return res.status(200).json({ data: survey, msg: "Unique survey" });
  }

  if (req.method === "PUT") {
    const { title } = req.body;
    const updateSurvey = await prisma.survey.update({
      where: {
        id,
      },
      data: {
        title: title,
      },
    });
    return res.status(200).json({ data: updateSurvey, msg: "Updated  survey" });
  }

  if (req.method === "DELETE") {
    const deleteSurvey = await prisma.survey.delete({
      where: {
        id,
      },
    });
    return res.status(200).json({ data: deleteSurvey, msg: "Delete survey" });
  }
}
