import { NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(request: Request) {
  const body = await request.json();

  // Validate input
  if (!body || !body.userPhoto || !body.garmentPhoto) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
    userAgent: "https://www.npmjs.com/package/create-replicate",
  });

  const model =
    "viktorfa/oot_diffusion:9f8fa4956970dde99689af7488157a30aa152e23953526a605df1d77598343d7";

  try {
    const output = await replicate.run(model, {
      input: {
        seed: 0,
        steps: 20,
        model_image: body.userPhoto,
        garment_image: body.garmentPhoto,
        guidance_scale: 2,
      },
    });
    console.log(output);
    return NextResponse.json({ output: output[3] });
  } catch (error) {
    console.error("Error running the model:", error);
    return NextResponse.json(
      { error: "Failed to run the model" },
      { status: 500 }
    );
  }
}
