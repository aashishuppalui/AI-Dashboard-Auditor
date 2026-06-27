export interface DashboardClassification {
  dashboardSummary: string;

  dashboardType: string;

  primaryUser: string;

  primaryGoal: string;

  confidence: number;

  reasoning: string[];
}