import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error(
    "OPENAI_API_KEY is missing. Add it to .env.local and restart the Next.js dev server."
  );
}

export const openai = new OpenAI({
  apiKey,
});