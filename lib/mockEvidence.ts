import { Evidence } from "../schemas/reasoning/evidence";

export const realEvidence: Evidence[] = [
  {
    id: "evidence-1",
    title: "Missing Supplier Context",
    observation:
      "Supplier information is not visible in the defect table.",
    reasoning:
      "Engineers cannot directly associate defects with suppliers from this screen.",
    impact:
      "Users must switch between screens, increasing cognitive load and investigation time.",
    severity: "high",
  },
  {
    id: "evidence-2",
    title: "No Priority Indicator",
    observation:
      "No priority indicator is visible for listed defects.",
    reasoning:
      "Users cannot distinguish urgent defects at a glance.",
    impact:
      "Critical issues may be overlooked, slowing response time.",
    severity: "medium",
  },
];