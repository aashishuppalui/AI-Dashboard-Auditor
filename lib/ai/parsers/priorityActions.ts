import { PriorityActionsSchema } from "../../../schemas/priorityAction";

export function parsePriorityActions(
  text: string
) {
  try {
    const json = JSON.parse(text);

    return PriorityActionsSchema.parse(json);

  } catch (error) {

    console.error(
      "❌ Priority Actions Parser Failed"
    );

    console.error(text);

    throw error;
  }
}