import { NextRequest, NextResponse } from "next/server";

import { generateReview } from "../../../lib/ai/generateReview";

export async function POST(req: NextRequest) {
  const requestStart = Date.now();

  console.log("================================");
  console.log("===== ANALYZE API START =====");
  console.log("================================");

  try {
    const body = await req.json();

    console.log("Image received:", !!body.image);

    const reviewStart = Date.now();

    const review =
      await generateReview(body.image);

    const reviewDuration = Date.now() - reviewStart;

    console.log(
      "generateReview:",
      reviewDuration,
      "ms"
    );

    const totalDuration = Date.now() - requestStart;

    console.log("================================");
    console.log("===== ANALYZE API COMPLETE =====");
    console.log(
      "Total API Time:",
      totalDuration,
      "ms"
    );
    console.log(
      "Total API Time:",
      (totalDuration / 1000).toFixed(2),
      "seconds"
    );
    console.log("================================");

    return NextResponse.json({
      success: true,
      review,
    });

  } catch (error) {
    const totalDuration = Date.now() - requestStart;

    console.error("================================");
    console.error("===== ANALYZE API ERROR =====");
    console.error(
      "Failed after:",
      totalDuration,
      "ms"
    );
    console.error("Error:", error);
    console.error("================================");

    const errorMessage =
      error instanceof Error
        ? error.message
        : "";

    if (
      errorMessage.includes("429") ||
      errorMessage.includes("no credits remaining")
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