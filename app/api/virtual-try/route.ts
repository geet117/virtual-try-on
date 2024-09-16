import type { NextApiRequest, NextApiResponse } from "next";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { userPhoto, garmentPhoto } = req.body;

  try {
    const output = await replicate.run(
      "viktorfa/oot_diffusion:9f8fa4956970dde99689af7488157a30aa152e23953526a605df1d77598343d7",
      {
        input: {
          seed: 0,
          steps: 20,
          model_image: userPhoto,
          garment_image: garmentPhoto,
          guidance_scale: 2,
        },
      }
    );

    res.status(200).json({ result: output });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error processing the virtual try-on" });
  }
}
