// Get the Question
// Put to udpate a question
// delete to delete question

import { NextApiRequest, NextApiResponse } from "next";

async function question(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      res.status(200).json({
        message: "Get question, " + id,
      });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({
        message: err.message,
      });
    }
  }

  if (req.method === "POST") {
    // Post Request
  }
  if (req.method === "PUT") {
    // put request
  } else {
    res.status(401).json({
      message: `HTTP method ${req.method} is not supported.`,
    });
  }
}

export default question;
