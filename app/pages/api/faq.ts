import type { NextApiRequest, NextApiResponse } from "next";
import faq from "./data/faq.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(faq);
}
