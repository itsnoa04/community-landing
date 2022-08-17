import type { NextApiRequest, NextApiResponse } from "next";
import feed from "./data/feed.json";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(feed);
}
