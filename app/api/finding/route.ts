import { NextRequest, NextResponse } from "next/server";

import { generateFinding } from "../../../lib/ai/engines/finding";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const finding = await generateFinding(
      body.context
    );

    return NextResponse.json(finding);

  } catch (error) {

    console.error("Finding API Error");

    console.error(error);

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