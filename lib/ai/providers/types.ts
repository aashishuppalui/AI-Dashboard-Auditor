export type AIInput = {
  prompt: string;
  image?: string;
  context?: string;
};

export type AIRequestOptions = {
  model: string;
};

export type AIResponse = {
  text: string;
  durationMs: number;
};

export type AIProviderCapabilities = {
  vision: boolean;
  structuredOutput: boolean;
  streaming: boolean;
};

export interface AIProvider {
  name: string;
  defaultModel: string;

  capabilities: AIProviderCapabilities;

  generate(
    input: AIInput,
    options: AIRequestOptions
  ): Promise<AIResponse>;
}