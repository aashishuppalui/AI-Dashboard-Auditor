import { z } from "zod";

export const MetadataSchema = z.object({
  /**
   * Schema version.
   */
  schemaVersion: z.literal("1.0.0"),

  /**
   * Unique review identifier.
   */
  reviewId: z.string().min(1),

  /**
   * ISO timestamp when the review was generated.
   */
  createdAt: z.string(),

  /**
   * AI model used.
   * Example: "gpt-5.5"
   */
  model: z.string(),

  /**
   * Prompt version used to generate the review.
   */
  promptVersion: z.string(),

  /**
   * Total processing time in milliseconds.
   */
  processingTimeMs: z.number().nonnegative(),
});

export type Metadata = z.infer<typeof MetadataSchema>;