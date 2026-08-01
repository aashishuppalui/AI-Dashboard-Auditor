import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface AnalyzeDashboardParams {
  imageBase64: string;
  prompt: string;
}

export async function analyzeDashboard({
  imageBase64,
  prompt,
}: AnalyzeDashboardParams): Promise<string> {
  const response = await client.responses.create({
    model: "gpt-5.5",

    input: [
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: prompt,
          },
          {
            type: "input_image",
            image_url: `data:image/png;base64,${imageBase64}`,
            detail: "high",
          },
        ],
      },
    ],
  });

  return response.output_text;
}