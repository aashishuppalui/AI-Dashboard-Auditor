import { NextRequest, NextResponse } from "next/server";

import { understandDashboard } from "../../../lib/ai/engines/understanding";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const understanding =
      await understandDashboard(body.image);

    return NextResponse.json({
      success: true,
      understanding,
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