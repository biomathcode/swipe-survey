import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import { data } from "autoprefixer";

export default async function User(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id as string;

  if (req.method === "GET") {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return res.status(200).json({ data: user, msg: "Unique user" });
  }

  if (req.method === "PUT") {
    const { name, image } = req.body;
    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name: name,
      },
    });
    return res.status(200).json({ data: updateUser, msg: "Updated  user" });
  }

  if (req.method === "DELETE") {
    const deleteUser = await prisma.user.delete({
      where: {
        id,
      },
    });
    return res.status(200).json({ data: deleteUser, msg: "Delete user" });
  }
}
