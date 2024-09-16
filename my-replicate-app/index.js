import Replicate from "replicate";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

console.log("Current working directory:", process.cwd());
console.log("Files in current directory:", fs.readdirSync("."));

dotenv.config();

console.log(
  "REPLICATE_API_TOKEN:",
  process.env.REPLICATE_API_TOKEN ? "Set" : "Not set"
);

if (!process.env.REPLICATE_API_TOKEN) {
  console.error("REPLICATE_API_TOKEN is not set. Please check your env file.");
  process.exit(1);
}

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: "https://www.npmjs.com/package/create-replicate",
});
const model =
  "viktorfa/oot_diffusion:9f8fa4956970dde99689af7488157a30aa152e23953526a605df1d77598343d7";
const input = {
  seed: 0,
  steps: 20,
  model_image:
    "https://raw.githubusercontent.com/viktorfa/oot_diffusion/main/oot_diffusion/assets/model_1.png",
  garment_image:
    "https://replicate.delivery/pbxt/KTgyzr0WNtcgwN82xEEcc3zoydD8ooXPzMHC18fKZSWu9W5I/blue_jacket.webp",
  guidance_scale: 2,
};

console.log("Using model: %s", model);
console.log("With input: %O", input);

console.log("Running...");
const output = await replicate.run(model, { input });
console.log("Done!", output);
