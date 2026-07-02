import { NextRequest, NextResponse } from "next/server";

import { generateResumeBullet } from "@/lib/ai/generateResumeBullet";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = await generateResumeBullet({
      skill: body.skill,
      usedWhere: body.usedWhere,
      years: body.years,
      description: body.description,
      mode: body.mode,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("GENERATE BULLET ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to generate resume bullet.",
      },
      {
        status: 500,
      }
    );
  }
}