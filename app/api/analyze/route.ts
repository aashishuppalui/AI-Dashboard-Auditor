import { NextRequest, NextResponse } from "next/server";

import { analyzeDashboardImage } from "../../../lib/ai/dashboardUnderstanding";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = await analyzeDashboardImage(
      body.image
    );

    return NextResponse.json({
      success: true,
      result,
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