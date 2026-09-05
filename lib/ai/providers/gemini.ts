import { GoogleGenAI } from "@google/genai";

import type {
  AIInput,
  AIProvider,
  AIRequestOptions,
  AIResponse,
} from "./types";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error(
    "GEMINI_API_KEY is missing. Add it to .env.local and restart the Next.js dev server."
  );
}

const googleAI = new GoogleGenAI({
  apiKey,
});

export const geminiProvider: AIProvider = {
  name: "gemini",

  defaultModel: "gemini-3.6-flash",

  capabilities: {
    vision: true,
    structuredOutput: true,
    streaming: true,
  },

  async generate(
    input: AIInput,
    options: AIRequestOptions
  ): Promise<AIResponse> {
    const contents: any[] = [];

    if (input.image) {
      contents.push({
        inlineData: {
          mimeType: "image/png",
          data: input.image.replace(/^data:image\/\w+;base64,/, ""),
        },
      });
    }

    contents.push({
      text: [
        input.prompt,
        input.context
          ? `\n\nAdditional context:\n${input.context}`
          : "",
      ].join(""),
    });

    const start = Date.now();

    const response = await googleAI.models.generateContent({
      model: options.model,
      contents,
    });

    const durationMs = Date.now() - start;

    return {
      text: response.text ?? "",
      durationMs,
    };
  },
};