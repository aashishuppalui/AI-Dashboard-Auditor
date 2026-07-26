import { z } from "zod";

/**
 * Indicates how severe a UX issue is.
 */
export const SeveritySchema = z.enum([
  "critical",
  "high",
  "medium",
  "low",
]);

export type Severity = z.infer<typeof SeveritySchema>;

/**
 * Indicates how urgently the recommendation should be addressed.
 */
export const PrioritySchema = z.enum([
  "immediate",
  "next",
  "later",
]);

export type Priority = z.infer<typeof PrioritySchema>;

/**
 * Represents how confident the AI is in its assessment.
 */
export const ConfidenceSchema = z.enum([
  "high",
  "medium",
  "low",
]);

export type Confidence = z.infer<typeof ConfidenceSchema>;