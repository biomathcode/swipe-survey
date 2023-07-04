import { NextApiRequest, NextApiResponse } from "next";

// GET all question
// Post To create a new question

async function question(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      res.status(200).json({
        message: "Get Request",
      });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({
        message: err.message,
      });
    }
  }

  if (req.method === "POST") {
  } else {
    res.status(401).json({
      message: `HTTP method ${req.method} is not supported.`,
    });
  }
}

export default question;
