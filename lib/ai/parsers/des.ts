import { DESSchema } from "../../../schemas/des";

export function parseDES(text: string) {
  try {
    const json = JSON.parse(text);

    return DESSchema.parse(json);
  } catch (error) {
    console.error("❌ DES Parser Failed");
    console.error(text);

    throw error;
  }
}