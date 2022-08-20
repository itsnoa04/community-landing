import type { NextApiRequest, NextApiResponse } from "next";
import testimonials from "./data/testimonials.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(testimonials);
}
