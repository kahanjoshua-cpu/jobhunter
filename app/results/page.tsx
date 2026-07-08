"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import type { ResumeAnalysis } from "@/lib/types/resumeAnalysis";

import MatchCard from "@/components/results/MatchCard/MatchCard";
import ResumeGaps from "@/components/results/ResumeGaps/ResumeGaps";
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

    setAnalysis(workflow.analysis);
  }, [router]);

  if (!analysis) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12">

        <MatchCard analysis={analysis} />

        <ResumeGaps
          missingSkills={analysis.missingSkills ?? []}
        />

      </div>
    </main>
  );
}