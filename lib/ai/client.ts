import OpenAI from "openai";

export function getOpenAI() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is missing. Add it to .env.local or configure it in your deployment environment."
    );
  }

  return new OpenAI({
    apiKey,
  });
}