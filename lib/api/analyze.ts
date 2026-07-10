import { DashboardClassification } from "../../schemas/dashboardClassification";

export async function analyzeDashboard(
  base64Image: string
): Promise<DashboardClassification> {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: base64Image,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze dashboard.");
  }

  const data = await response.json();

  return data.understanding;
}