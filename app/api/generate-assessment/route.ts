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
  } catch (error: unknown) {
    console.error(
      "GENERATE ASSESSMENT ERROR:",
      error
    );

    let errorMessage = "Unknown error";

    if (error instanceof Error) {
      console.error(error.message);
      console.error(error.stack);
      errorMessage = error.message;
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      {
        status: 500,
      }
    );
  }
}