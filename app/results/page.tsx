"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import type { ResumeAnalysis } from "@/lib/types/resumeAnalysis";

import MatchCard from "@/components/results/MatchCard/MatchCard";
import ResumeGaps from "@/components/results/ResumeGaps/ResumeGaps";
import BeforeYouApply from "@/components/results/BeforeYouApply";
import OverallAssessment from "@/components/results/OverallAssessment";
import ActionButtons from "@/components/results/ActionButtons";

export default function ResultsPage() {
  const router = useRouter();

  const [analysis, setAnalysis] =
    useState<ResumeAnalysis | null>(null);

  useEffect(() => {
    const stored =
      sessionStorage.getItem("analysis");

    if (!stored) {
      router.replace("/");
      return;
    }

    try {
      const parsed: ResumeAnalysis =
        JSON.parse(stored);

      setAnalysis(parsed);
    } catch (error) {
      console.error(error);

      router.replace("/");
    }
  }, [router]);

  if (!analysis) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-500">
          Loading your report...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12">

        <div>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Your Jobhunter Report
          </h1>

<p className="mt-3 text-lg leading-8 text-slate-600">            Here's how your resume compares to this job,
            where you already stand out, and where you
            may want to strengthen your application.
          </p>

        </div>

        <MatchCard analysis={analysis} />
                <ResumeGaps
          missingSkills={
            analysis.missingSkills ?? []
          }
        />

        <BeforeYouApply
          missingRequirements={
            analysis.missingRequirements ?? []
          }
          recommendations={
            analysis.recommendations ?? []
          }
        />

        <OverallAssessment
          summary={analysis.summary}
          strengths={
            analysis.strengths ?? []
          }
          concerns={
            analysis.concerns ?? []
          }
          recommendation={
            analysis.recommendation
          }
        />

        <ActionButtons />
              </div>

    </main>
  );
}