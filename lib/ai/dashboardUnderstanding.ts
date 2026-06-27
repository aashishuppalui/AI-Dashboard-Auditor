import { openai } from "./client";
import { DASHBOARD_UNDERSTANDING_PROMPT } from "./prompts";

export async function analyzeDashboardImage(base64Image: string) {
  const response = await openai.responses.create({
    model: "gpt-5.1",

    input: [
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: DASHBOARD_UNDERSTANDING_PROMPT,
          },
          {
            type: "input_image",
            image_url: base64Image,
          },
        ],
      },
    ],
  });

  return response.output_text;
}