import { normalizeAIResponse } from "./normalize";
import { getAIProvider } from "./providers";

import type { AIInput } from "./providers/types";
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
  model,
}: ExecuteAIOptions<T>): Promise<T> {
  const input: AIInput = {
    prompt,
    image,
    context,
  };

  const providerName = process.env.AI_PROVIDER ?? "openai";
  const provider = getAIProvider(providerName);
  
  const selectedModel = model ?? provider.defaultModel;

  const response = await provider.generate(input, {
    model: selectedModel,
  });

  console.log("================================");
  console.log("🤖 AI EXECUTOR");
  console.log("Provider:", provider.name);
console.log("Model:", selectedModel);
  console.log("Duration:", response.durationMs + " ms");
  console.log("================================");

  console.log("===== RAW AI OUTPUT =====");
  console.log(response.text);

 const normalizedText = normalizeAIResponse(response.text);

console.log("===== NORMALIZED AI OUTPUT =====");
console.log(normalizedText);

const parsed = parser(normalizedText);

console.log("===== PARSED OUTPUT =====");
console.log(parsed);

  return parsed;
}