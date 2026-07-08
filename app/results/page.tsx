"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import type { ResumeAnalysis } from "@/lib/types/resumeAnalysis";

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
    <main className="min-h-screen bg-slate-50 p-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-slate-900">
          Results Page Loaded Successfully
        </h1>

        <p className="mt-4 text-slate-600">
          If you can see this page, then the crash is happening inside one of
          the Results components—not in the page itself.
        </p>

        <div className="mt-8 rounded-xl border border-slate-300 bg-white p-6">
          <pre className="overflow-auto whitespace-pre-wrap text-sm">
            {JSON.stringify(analysis, null, 2)}
          </pre>
        </div>
      </div>
    </main>
  );
}