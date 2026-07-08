"use client";

import { useEffect, useState } from "react";

import type { ResumeAnalysis } from "@/lib/types/resumeAnalysis";
import type { Assessment } from "@/lib/types/assessment";
import { getWorkflow } from "@/lib/workflow/workflow";

import AssessmentHeader from "@/components/assessment/AssessmentHeader";
import StrengthsCard from "@/components/assessment/StrengthsCard";
import ConcernsCard from "@/components/assessment/ConcernsCard";
import FinalAssessment from "@/components/assessment/FinalAssessment";
import InterviewQuestionsModal from "@/components/assessment/InterviewQuestionsModal";
import FinalAssessmentLoading from "@/components/loading/FinalAssessmentLoading";
import FeedbackBanner from "@/components/home/FeedbackBanner";

export default function AssessmentPage() {
  const [analysis, setAnalysis] =
    useState<ResumeAnalysis | null>(null);

  const [assessment, setAssessment] =
    useState<Assessment | null>(null);

  const [loadingFinished, setLoadingFinished] =
    useState(false);

  const [showInterviewModal, setShowInterviewModal] =
    useState(false);

  useEffect(() => {
    const workflow = getWorkflow();

    if (!workflow) {
      return;
    }

    setAnalysis(workflow.analysis);

    async function loadAssessment() {
      try {
        const response = await fetch(
          "/api/generate-assessment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              resume: workflow.resume,
              jobDescription: workflow.jobDescription,
              matchAnalysis: workflow.analysis,
              resumeGapResponses:
                workflow.resumeGapResponses,
              acceptedResumeBullets:
                workflow.acceptedResumeBullets,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(
            "Failed to generate assessment."
          );
        }

        const result = await response.json();

        setAssessment(result);
      } catch (error) {
        console.error(error);
      }
    }

    loadAssessment();
  }, []);

  if (!analysis || !loadingFinished) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <FinalAssessmentLoading
          isComplete={!!assessment}
          onFinished={() => setLoadingFinished(true)}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <AssessmentHeader />

        <div className="mt-8 space-y-8">
          <StrengthsCard
            strengths={assessment!.strengths}
          />

          <ConcernsCard
            strengthenApplication={
              assessment!.strengthenApplication
            }
            onOpenInterviewQuestions={() =>
              setShowInterviewModal(true)
            }
          />
        </div>

        <FinalAssessment
          assessment={assessment!.finalAssessment}
        />
      </div>

      {showInterviewModal && (
        <InterviewQuestionsModal
          questions={assessment!.interviewQuestions}
          onClose={() =>
            setShowInterviewModal(false)
          }
        />
      )}

      <FeedbackBanner />
    </main>
  );
}