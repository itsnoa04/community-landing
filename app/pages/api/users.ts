import type { NextApiRequest, NextApiResponse } from "next";
import users from "./data/users.json";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(users);
}
