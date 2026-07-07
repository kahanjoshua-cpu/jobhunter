import { NextResponse } from "next/server";
import { analyzeResume } from "@/lib/ai/analyzeResume";
import { extractResumeText } from "@/lib/ai/resume/extractResumeText";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const resumeFile = formData.get("resume") as File | null;
    const jobDescription = formData.get("jobDescription") as string | null;

    console.log("JOB DESCRIPTION:");
    console.log(jobDescription);

    if (!resumeFile || !jobDescription) {
      return NextResponse.json(
        {
          success: false,
          error: "Resume and job description are required.",
        },
        { status: 400 }
      );
    }

    const resume = await extractResumeText(resumeFile);

    const analysis = await analyzeResume({
      resume,
      jobDescription,
    });

    return NextResponse.json({
      success: true,
      resume,
      analysis,
    });
  } catch (error: unknown) {
    console.error("ANALYZE ERROR:", error);

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
      { status: 500 }
    );
  }
}