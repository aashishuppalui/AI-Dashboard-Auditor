import { openai } from "./client";

type ExecuteAIOptions<T> = {
  prompt: string;
  parser: (text: string) => T;
  image?: string;
  context?: string;
  model?: string;
};

export async function executeAI<T>({
  prompt,
  parser,
  image,
  context,
  model = "gpt-5.1",
}: ExecuteAIOptions<T>): Promise<T> {
  const content: any[] = [
    {
      type: "input_text",
      text: prompt,
    },
  ];

  if (image) {
    content.push({
      type: "input_image",
      image_url: image,
    });
  }

  if (context) {
    content.push({
      type: "input_text",
      text: context,
    });
  }

  const start = Date.now();

  const response = await openai.responses.create({
    model,
    input: [
      {
        role: "user",
        content,
      },
    ],
  });

  const duration = Date.now() - start;

  console.log("================================");
  console.log("🤖 AI EXECUTOR");
  console.log("Model:", model);
  console.log("Duration:", duration + " ms");
  console.log("================================");
const rawOutput = response.output_text;

console.log("===== RAW AI OUTPUT =====");
console.log(rawOutput);

const parsed = parser(rawOutput);

console.log("===== PARSED OUTPUT =====");
console.log(parsed);

return parsed;
}