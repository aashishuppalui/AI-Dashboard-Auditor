import { Evidence } from "../schemas/reasoning/evidence";

export const realEvidence: Evidence = {
  evidence: [
    {
      type: "Missing Context",

      severity: "High",

      observation:
        "Supplier information is not visible in the defect table.",

      reasoning:
        "Engineers cannot directly associate defects with suppliers from this screen.",

      observable: true,
    },

    {
      type: "Workflow",

      severity: "Medium",

      observation:
        "No priority indicator is visible for listed defects.",

      reasoning:
        "Users cannot distinguish urgent defects at a glance.",

      observable: true,
    },
  ],
};