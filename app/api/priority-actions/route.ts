import { NextRequest, NextResponse } from "next/server";

import { generatePriorityActions }
  from "../../../lib/ai/engines/priorityActions";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const priorityActions =
      await generatePriorityActions(
        body.context
      );

    return NextResponse.json(
      priorityActions
    );

  } catch (error) {

    console.error(
      "Priority Actions API Error"
    );

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