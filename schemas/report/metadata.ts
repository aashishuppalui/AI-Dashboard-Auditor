import { z } from "zod";

export const MetadataSchema = z.object({
  reviewId: z.string(),

  createdAt: z.string(),

  model: z.string(),

  promptVersion: z.string(),

  processingTimeMs: z.number(),
});

export type Metadata = z.infer<typeof MetadataSchema>;