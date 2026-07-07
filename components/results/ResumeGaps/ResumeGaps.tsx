"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lightbulb } from "lucide-react";

import type { MissingSkill } from "@/lib/types/resumeAnalysis";

import ResumeGapCard from "./ResumeGapCard";
import ResumeGapProgress from "./ResumeGapProgress";
import ResumeGapFlow from "./ResumeGapFlow";
import ResumeBulletGenerator from "./ResumeBulletGenerator";
import ResumeGapSkipConfirmation from "./ResumeGapSkipConfirmation";

interface ResumeGapsProps {
  missingSkills: MissingSkill[];
}

type Step =
  | "question"
  | "skip"
  | "details"
  | "generated"
  | "complete";

export default function ResumeGaps({
  missingSkills,
}: ResumeGapsProps) {
  const router = useRouter();

  const [currentGapIndex, setCurrentGapIndex] =
    useState(0);

  const [step, setStep] =
    useState<Step>("question");

  const [generatedBullet, setGeneratedBullet] =
    useState("");

  const [lastDetails, setLastDetails] =
    useState<{
      usedWhere: string;
      years: string;
      description: string;
    } | null>(null);

  const [isGenerating, setIsGenerating] =
    useState(false);

  const [error, setError] =
    useState("");

  const [acceptedBullets, setAcceptedBullets] =
    useState<string[]>([]);

  const [completedGaps, setCompletedGaps] =
    useState(0);

  const currentGap =
    missingSkills[currentGapIndex];

  if (!currentGap) {
    return null;
  }

  async function generateBullet(
    details: {
      usedWhere: string;
      years: string;
      description: string;
    },
    mode: "original" | "alternative" = "original"
  ) {
    try {
      setError("");
      setLastDetails(details);
      setIsGenerating(true);

      const response = await fetch(
        "/api/generate-resume-bullet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            skill: currentGap.skill,
            ...details,
            mode,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to generate bullet."
        );
      }

      const result =
        await response.json();

      setGeneratedBullet(result.bullet);
      setStep("generated");
          } catch (error) {
      console.error(error);

      setError(
        "We couldn't generate a resume bullet. Please try again."
      );
    } finally {
      setIsGenerating(false);
    }
  }

  function nextGap() {
    const updatedBullets = [
      ...acceptedBullets,
      generatedBullet,
    ];

    setAcceptedBullets(updatedBullets);
    setCompletedGaps((prev) => prev + 1);

    if (
      currentGapIndex ===
      missingSkills.length - 1
    ) {
      setStep("complete");
      return;
    }

    setCurrentGapIndex((prev) => prev + 1);
    setGeneratedBullet("");
    setError("");
    setStep("question");
  }

  function skipGap() {
    setCompletedGaps((prev) => prev + 1);

    if (
      currentGapIndex ===
      missingSkills.length - 1
    ) {
      setStep("complete");
      return;
    }

    setCurrentGapIndex((prev) => prev + 1);
    setGeneratedBullet("");
    setError("");
    setStep("question");
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-2">

        <Lightbulb className="h-6 w-6 text-amber-500" />

        <div>
          <h2 className="text-[2.15rem] font-semibold tracking-tight text-slate-900">
            Resume Gaps
          </h2>

          <p className="mt-0.5 text-[1.08rem] font-medium text-slate-600">
            Let's uncover experience you may have forgotten to include.
          </p>
        </div>

      </div>

      <div className="space-y-4 p-6">

        {step !== "complete" && (
          <ResumeGapProgress
            current={currentGapIndex + 1}
            total={missingSkills.length}
            completed={completedGaps}
          />
        )}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

       {step === "question" && (
  <ResumeGapCard
    gap={currentGap}
    index={currentGapIndex + 1}
    total={missingSkills.length}
    onStart={() => setStep("details")}
    onNoExperience={() => setStep("skip")}
  />
)}

        {step === "skip" && (
          <ResumeGapSkipConfirmation
            skill={currentGap.skill}
            onGoBack={() => setStep("question")}
            onSkip={skipGap}
          />
        )}

        {step === "details" && (
          <ResumeGapFlow
            gap={currentGap}
            isGenerating={isGenerating}
            onGenerate={generateBullet}
          />
        )}

        {step === "generated" && (
          <ResumeBulletGenerator
            bullet={generatedBullet}
            onAccept={nextGap}
            onEdit={() => {}}
            onRegenerate={() => {
              if (lastDetails) {
                generateBullet(
                  lastDetails,
                  "alternative"
                );
              }
            }}
          />
        )}
                {step === "complete" &&
          (acceptedBullets.length > 0 ? (

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">

              <div className="text-5xl">
                🎉
              </div>

  <h3 className="mt-4 text-3xl font-semibold text-slate-900">
  Resume Review Complete!
</h3>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                You've worked through every resume gap we identified and
                generated stronger resume content tailored to this job.
              </p>

              <p className="mt-6 text-sm text-slate-500">
                Great work. Your resume is now better aligned with this
                opportunity.
              </p>

              <div className="mt-10">
                <button
                  onClick={() =>
                    router.push("/results/assessment")
                  }
                  className="rounded-xl bg-indigo-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-indigo-700"
                >
                  View Your Overall Assessment →
                </button>
              </div>

            </div>

          ) : (

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-10 text-center">

              <div className="text-5xl">
                ✅
              </div>

              <h3 className="mt-4 text-3xl font-semibold text-slate-900">
                Resume Review Complete
              </h3>

<p className="mt-6 text-lg leading-8 text-slate-700">
  Continue to your overall assessment and personalized
  suggestions for strengthening your application.
</p>

              <div className="mt-10">
                <button
                  onClick={() =>
                    router.push("/results/assessment")
                  }
                  className="rounded-xl bg-indigo-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-indigo-700"
                >
                  View Your Overall Assessment →
                </button>
              </div>

            </div>

          ))}

      </div>

    </section>
  );
}