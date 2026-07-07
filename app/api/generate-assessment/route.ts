import { NextRequest, NextResponse } from "next/server";

import { generateAssessment } from "@/lib/ai/generateAssessment";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = await generateAssessment({
      resume: body.resume,
      jobDescription: body.jobDescription,
      matchAnalysis: body.matchAnalysis,
      resumeGapResponses: body.resumeGapResponses,
      acceptedResumeBullets: body.acceptedResumeBullets,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error(
      "GENERATE ASSESSMENT ERROR:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to generate assessment.",
      },
      {
        status: 500,
      }
    );
  }
}