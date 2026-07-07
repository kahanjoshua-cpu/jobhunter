"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import type { ResumeAnalysis } from "@/lib/types/resumeAnalysis";

import MatchCard from "@/components/results/MatchCard/MatchCard";
import ResumeGaps from "@/components/results/ResumeGaps/ResumeGaps";
import ActionButtons from "@/components/results/ActionButtons";
import FeedbackBanner from "@/components/home/FeedbackBanner";
import { getWorkflow } from "@/lib/workflow/workflow";

export default function ResultsPage() {
  const router = useRouter();

  const [analysis, setAnalysis] =
    useState<ResumeAnalysis | null>(null);

  useEffect(() => {
    const workflow = getWorkflow();

    if (!workflow) {
      router.replace("/");
      return;
    }

    try {
      setAnalysis(workflow.analysis);
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
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 pb-32">

        <div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Your Jobhunter Report
          </h1>

          <p className="mt-3 text-lg leading-8 text-slate-600">
            Here's how your resume compares to this job,
            where you already stand out, and where you
            may want to strengthen your application.
          </p>
        </div>

        <MatchCard analysis={analysis} />

        <ResumeGaps
          missingSkills={analysis.missingSkills ?? []}
        />

        <ActionButtons />

      </div>

      <FeedbackBanner />
    </main>
  );
}