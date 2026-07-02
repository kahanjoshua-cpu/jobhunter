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
      analysis,
    });
  } catch (error) {
console.error("ANALYZE ERROR:", error);

if (error instanceof Error) {
  console.error(error.message);
  console.error(error.stack);
}

return NextResponse.json(
  {
    success: false,
    error:
      error instanceof Error
        ? error.message
        : JSON.stringify(error, null, 2),
  },
  { status: 500 }
);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}