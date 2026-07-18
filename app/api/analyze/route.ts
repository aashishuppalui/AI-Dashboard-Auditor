import { NextRequest, NextResponse } from "next/server";

import { generateReview } from "../../../lib/ai/generateReview";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const review =
      await generateReview(body.image);

    return NextResponse.json({
      success: true,
      review,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}