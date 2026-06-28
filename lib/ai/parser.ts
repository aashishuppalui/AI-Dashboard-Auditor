import { DashboardClassificationSchema } from "../../schemas/dashboardClassification";

export function parseDashboardClassification(
  text: string
) {
  const json = JSON.parse(text);

  return DashboardClassificationSchema.parse(json);
}