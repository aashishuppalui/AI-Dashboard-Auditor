import { geminiProvider } from "./gemini";
import { openAIProvider } from "./openai";
import type { AIProvider } from "./types";

const providers: Record<string, AIProvider> = {
  openai: openAIProvider,
  gemini: geminiProvider,
};

export function getAIProvider(name: string): AIProvider {
  const provider = providers[name.toLowerCase()];

  if (!provider) {
    throw new Error(`Unsupported AI provider: ${name}`);
  }

  return provider;
}