import type { PriorityAction } from "../../schemas/priorityAction";

export async function analyzePriorityActions(
  context: string
): Promise<PriorityAction[]> {

  const response = await fetch(
    "/api/priority-actions",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        context,
      }),
    }
  );

  if (!response.ok) {

    const error =
      await response.json();

    console.error(error);

    throw new Error(
      error.error ??
      "Priority Actions API failed."
    );
  }

  return response.json();
}