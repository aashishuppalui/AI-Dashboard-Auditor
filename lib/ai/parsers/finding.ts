import { FindingSchema } from "../../../schemas/finding";

export function parseFinding(text: string) {
  try {
    const json = JSON.parse(text);

    return FindingSchema.parse(json);
  } catch (error) {
    console.error("❌ Finding Parser Failed");
    console.error(text);

    throw error;
  }
}