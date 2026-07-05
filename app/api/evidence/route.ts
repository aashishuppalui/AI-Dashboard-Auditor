import { NextRequest, NextResponse } from "next/server";
import { extractEvidence } from "../../../lib/ai/engines/evidence";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const evidence = await extractEvidence(body.image);

    return NextResponse.json(evidence);

  } catch (error) {
    console.error("Evidence API Error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}