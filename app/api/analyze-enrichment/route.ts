import { NextRequest, NextResponse } from "next/server";

import { generateReviewEnrichment } from "../../../lib/ai/generateReviewEnrichment";
import { FastReviewResultSchema } from "../../../schemas/report/fast-review-results";

export async function POST(req: NextRequest) {
  const requestStart = Date.now();

  console.log("================================");
  console.log("===== ANALYZE ENRICHMENT START =====");
  console.log("================================");

  try {
    const body = await req.json();

    const fastReview =
      FastReviewResultSchema.parse(
        body.fastReview
      );

    console.log(
      "Fast review received for enrichment."
    );

    const enrichmentStart =
      Date.now();

    const enrichment =
      await generateReviewEnrichment(
        fastReview
      );

    const enrichmentDuration =
      Date.now() - enrichmentStart;

    const totalDuration =
      Date.now() - requestStart;

    console.log(
      "Enrichment:",
      enrichmentDuration,
      "ms"
    );

    console.log(
      "Total Enrichment API Time:",
      totalDuration,
      "ms"
    );

    console.log("================================");
    console.log(
      "===== ANALYZE ENRICHMENT COMPLETE ====="
    );
    console.log("================================");

    return NextResponse.json({
      success: true,
      enrichment,
    });

  } catch (error) {
    const totalDuration =
      Date.now() - requestStart;

    console.error("================================");
    console.error(
      "===== ANALYZE ENRICHMENT ERROR ====="
    );
    console.error(
      "Failed after:",
      totalDuration,
      "ms"
    );
    console.error(
      "Error:",
      error
    );
    console.error("================================");

    const errorMessage =
      error instanceof Error
        ? error.message
        : "";

    if (
      errorMessage.includes("429") ||
      errorMessage.includes(
        "no credits remaining"
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Review temporarily unavailable. We couldn't complete the UX review right now. Please try again later.",
        },
        {
          status: 503,
        }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "We couldn't complete the UX review.",
      },
      {
        status: 500,
      }
    );
  }
}