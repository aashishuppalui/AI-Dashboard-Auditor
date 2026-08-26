import { ExecutiveIntelligenceSchema } from "../../../schemas/context/executive-intelligence";

export function parseDashboardUnderstanding(text: string) {
  const json = JSON.parse(text);

  return ExecutiveIntelligenceSchema.parse(json);
}