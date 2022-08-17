import type { NextApiRequest, NextApiResponse } from "next";
import groups from "./data/groups.json";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(groups);
}
