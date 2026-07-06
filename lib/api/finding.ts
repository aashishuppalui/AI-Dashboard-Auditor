import type { Finding } from "../../schemas/finding";

export async function analyzeFinding(
  context: string
): Promise<Finding> {

  const response = await fetch(
    "/api/finding",
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
      "Finding API failed."
    );
  }

  return response.json();
}