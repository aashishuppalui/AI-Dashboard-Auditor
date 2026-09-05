import { openai } from "../client";

import type {
  AIInput,
  AIProvider,
  AIRequestOptions,
  AIResponse,
} from "./types";

export const openAIProvider: AIProvider = {
  name: "openai",
  defaultModel: "gpt-5.1",

  capabilities: {
    vision: true,
    structuredOutput: true,
    streaming: true,
  },

  async generate(
    input: AIInput,
    options: AIRequestOptions
  ): Promise<AIResponse> {

    const content: any[] = [
      {
        type: "input_text",
        text: input.prompt,
      },
    ];

    if (input.image) {
      content.push({
        type: "input_image",
        image_url: input.image,
      });
    }

    if (input.context) {
      content.push({
        type: "input_text",
        text: input.context,
      });
    }

    const start = Date.now();

    const response = await openai.responses.create({
      model: options.model,
      input: [
        {
          role: "user",
          content,
        },
      ],
    });

    const durationMs = Date.now() - start;

    return {
      text: response.output_text,
      durationMs,
    };
  },
};