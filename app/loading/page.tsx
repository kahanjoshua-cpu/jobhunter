"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  saveWorkflow,
} from "@/lib/workflow/workflow";
import {
  BrainCircuit,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const stages = [
  "Reading your resume...",
  "Extracting your experience...",
  "Understanding employer requirements...",
  "Comparing your qualifications...",
  "Calculating your Match Score...",
  "Looking for missing skills...",
  "Evaluating your strengths...",
  "Preparing recommendations...",
  "Finalizing your Jobhunter Report...",
];

const aiMessages = [
  "Scanning your resume for measurable achievements...",
  "Comparing your experience against job requirements...",
  "Looking for transferable skills...",
  "Evaluating years of relevant experience...",
  "Checking education and qualifications...",
  "Analyzing resume gaps...",
  "Preparing personalized recommendations...",
];

export default function LoadingPage() {
  const router = useRouter();

  const [currentStage, setCurrentStage] =
    useState(0);

  const [messageIndex, setMessageIndex] =
    useState(0);

  const [progress, setProgress] =
    useState(0);

  // Step list animation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) =>
        prev < stages.length - 1
          ? prev + 1
          : prev
      );
    }, 700);

    return () => clearInterval(interval);
  }, []);

  // Rotating AI message

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(
        (prev) =>
          (prev + 1) % aiMessages.length
      );
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // Smooth progress animation

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;

        return prev + 1;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  // Perform the analysis

  useEffect(() => {
    async function analyze() {
      try {
        const resumeData =
          sessionStorage.getItem("resumeFile");

        const jobDescription =
          sessionStorage.getItem(
            "jobDescription"
          );

        if (
          !resumeData ||
          !jobDescription
        ) {
          router.push("/");
          return;
        }

        const parsed =
          JSON.parse(resumeData);

        const uint8 = new Uint8Array(
          parsed.bytes
        );

        const file = new File(
          [uint8],
          parsed.name,
          {
            type: parsed.type,
          }
        );

        const formData = new FormData();

        formData.append("resume", file);

        formData.append(
          "jobDescription",
          jobDescription
        );

        const response = await fetch(
          "/api/analyze-resume",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          const error =
            await response.json();

          console.error(error);

          throw new Error(
            error.error ??
              "Analysis failed."
          );
        }

        const result =
          await response.json();

saveWorkflow({
  resume: result.resume,
  jobDescription,
  analysis: result.analysis,
  resumeGapResponses: [],
  acceptedResumeBullets: [],
  assessment: null,
});

        setProgress(100);

        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              350
            )
        );

        router.push("/results");
      } catch (error) {
        console.error(error);

        router.push("/");
      }
    }

    analyze();
  }, [router]);
    return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

      <div className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-12 shadow-xl">

        {/* AI Badge */}

        <div className="mb-8 flex justify-center">
          <div className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-700">
            🧠 Comparing 40+ hiring signals
          </div>
        </div>

        {/* Header */}

        <div className="flex flex-col items-center text-center">

          <BrainCircuit className="h-14 w-14 animate-pulse text-indigo-600" />

          <h1 className="mt-5 text-4xl font-bold text-slate-900">
            Analyzing Your Match
          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">
            We're comparing your resume against this job description to
            build your personalized Jobhunter report.
          </p>

          {/* Percentage */}

          <div className="mt-10 text-7xl font-extrabold tracking-tight text-indigo-600">
            {progress}%
          </div>

          {/* AI Message */}

          <div className="mt-4 h-6 overflow-hidden">
            <p
              key={messageIndex}
              className="animate-[fadeIn_500ms_ease] text-base text-slate-600"
            >
              {aiMessages[messageIndex]}
            </p>
          </div>

        </div>

        {/* Progress Bar */}

        <div className="mt-10 h-5 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-100 ease-linear"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        {/* Steps */}

        <div className="mt-12 space-y-5">

          {stages.map((stage, index) => {
            if (index < currentStage) {
              return (
                <div
                  key={stage}
                  className="flex items-center gap-4 text-emerald-700"
                >
                  <CheckCircle2 className="h-6 w-6 shrink-0" />

                  <span className="text-base">
                    {stage}
                  </span>
                </div>
              );
            }

            if (index === currentStage) {
              return (
                <div
                  key={stage}
                  className="flex items-center gap-4 font-semibold text-slate-900"
                >
                  <Loader2 className="h-6 w-6 animate-spin text-indigo-600" />

                  <span className="text-base">
                    {stage}
                  </span>
                </div>
              );
            }

            return (
              <div
                key={stage}
                className="flex items-center gap-4 text-slate-400"
              >
                <div className="h-6 w-6 rounded-full border-2 border-slate-300" />

                <span className="text-base">
                  {stage}
                </span>
              </div>
            );
          })}

        </div>

        {/* Footer */}

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">

          <h2 className="text-lg font-semibold text-slate-900">
            What we're doing
          </h2>

          <p className="mt-3 leading-8 text-slate-600">
            Jobhunter analyzes your resume against the job description
            to identify strengths, missing qualifications, resume
            improvement opportunities, and an overall Match Score.
            Our goal isn't to tell you whether to apply—it's to give
            you the information you need to make a more informed decision.
          </p>

        </div>

      </div>

    </main>
  );
}