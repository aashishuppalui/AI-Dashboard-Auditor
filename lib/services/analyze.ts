import { mockAnalyzeResponse } from "../../lib/mockData";
import { saveReview } from "../../lib/storage";

export async function analyzeDashboard() {
  saveReview(mockAnalyzeResponse);

  return mockAnalyzeResponse;
}