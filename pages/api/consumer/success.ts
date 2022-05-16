import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Get success request");
  return res.status(200).json({ data: "success" });
  
}
