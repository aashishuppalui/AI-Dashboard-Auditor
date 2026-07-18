import { z } from "zod";

import { DashboardClassificationSchema }
  from "./dashboardClassification";

import { EvidenceSchema }
  from "./evidence";

import { FindingSchema }
  from "./finding";

  import { PriorityActionsSchema }
  from "./priorityAction";

export const ReviewSchema = z.object({

  understanding:
    DashboardClassificationSchema,

  evidence:
    EvidenceSchema,

  finding:
    FindingSchema,

     priorityActions:
    PriorityActionsSchema,

  metadata: z.object({

    createdAt: z.string(),

    model: z.string(),

    appVersion: z.string(),

  })

});

export type Review =
  z.infer<typeof ReviewSchema>;