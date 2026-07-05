import { Evidence } from "../../schemas/evidence";

export async function analyzeEvidence(
  image: string
): Promise<Evidence> {

  const response = await fetch(
    "/api/evidence",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        image,
      }),
    }
  );

  if (!response.ok) {
   const error = await response.json();

console.error(error);

throw new Error(
  error.error ?? "Evidence API failed."
);
  }

  return response.json();
}