import { openai } from "./client";
import { createDashboardUnderstandingPrompt } from "../prompts";
import { parseDashboardClassification } from "./parser";

export async function understandDashboard(
  base64Image: string
) {
  const response = await openai.responses.create({
    model: "gpt-5.1",

    input: [
      {
        role: "user",

        content: [
          {
            type: "input_text",
            text: createDashboardUnderstandingPrompt(),
          },
          {
            type: "input_image",
            image_url: base64Image,
          },
        ],
      },
    ],
  });

  return parseDashboardClassification(
    response.output_text
  );
}