import { DashboardClassification } from "./classification";
import { Review } from "./review";

export interface AnalyzeResponse {
  classification: DashboardClassification;

  review: Review;
}