"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import ResumeGapConfirmationModal from "./ResumeGapConfirmationModal";
import type { MissingSkill } from "@/lib/types/resumeAnalysis";

interface ResumeGapFlowProps {
  gap: MissingSkill;
  isGenerating: boolean;
  onGenerate: (details: {
    usedWhere: string;
    years: string;
    description: string;
  }) => void;
}

export default function ResumeGapFlow({
  gap,
  isGenerating,
  onGenerate,
}: ResumeGapFlowProps) {
  const [usedWhere, setUsedWhere] =
    useState("");

  const [years, setYears] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [
    showConfirmation,
    setShowConfirmation,
  ] = useState(false);

  const [
    missingQuestions,
    setMissingQuestions,
  ] = useState<string[]>([]);

  function handleGenerate() {
    const missing: string[] = [];

    if (!usedWhere.trim()) {
      missing.push(
        "Where did you use this skill?"
      );
    }

    if (!years.trim()) {
      missing.push(
        "Approximately how long have you used it?"
      );
    }

    if (!description.trim()) {
      missing.push(
        "Describe how you used it."
      );
    }
console.log("Missing questions:", missing);
    if (missing.length > 0) {
      setMissingQuestions(missing);
      setShowConfirmation(true);
      return;
    }

    onGenerate({
      usedWhere,
      years,
      description,
    });
  }
  return (
    <>
      <div className="rounded-2xl border-2 border-indigo-700 bg-blue-100 p-6">

        <h3 className="text-4xl font-semibold text-slate-900">
          Great!
        </h3>

        <p className="mt-3 text-xl leading-8 text-slate-800">
          Let's make sure employers see your
          experience with{" "}
          <strong>{gap.skill}</strong>. 🎉
        </p>

<div className="mt-8 space-y-6">
                  <div>
            <label className="mb-2 block text-lg font-medium text-slate-800">
              Where did you use this skill?
            </label>

            <input
              value={usedWhere}
              onChange={(e) =>
                setUsedWhere(e.target.value)
              }
              disabled={isGenerating}
              placeholder="Amplify, Quest to Learn, Freelance..."
              className="
                w-full
                rounded-lg
                border-2
                border-blue-400
                bg-blue-50
                px-4
                py-3
                shadow-md
                transition
                focus:border-indigo-600
                focus:ring-4
                focus:ring-indigo-200
                focus:outline-none
                disabled:cursor-not-allowed
                disabled:bg-slate-100
                disabled:text-slate-500
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-lg font-medium text-slate-800">
              Approximately how long have you used it?
            </label>

            <input
              value={years}
              onChange={(e) =>
                setYears(e.target.value)
              }
              disabled={isGenerating}
              placeholder="e.g., 6 months, 1 year, etc."
              className="
                w-full
                rounded-lg
                border-2
                border-blue-400
                bg-blue-50
                px-4
                py-3
                shadow-md
                transition
                focus:border-indigo-600
                focus:ring-4
                focus:ring-indigo-200
                focus:outline-none
                disabled:cursor-not-allowed
                disabled:bg-slate-100
                disabled:text-slate-500
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-lg font-medium text-slate-800">
              Describe how you used it.
            </label>

            <textarea
              rows={5}
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              disabled={isGenerating}
              placeholder="Tell us how you used this skill..."
              className="
                w-full
                rounded-lg
                border-2
                border-blue-400
                bg-blue-50
                px-4
                py-3
                shadow-md
                transition
                focus:border-indigo-600
                focus:ring-4
                focus:ring-indigo-200
                focus:outline-none
                disabled:cursor-not-allowed
                disabled:bg-slate-100
                disabled:text-slate-500
              "
            />
          </div>

          <div className="pt-2">
            <button
              type="button"
              disabled={isGenerating}
              onClick={handleGenerate}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-indigo-600
                px-6
                py-4
                text-lg
                font-medium
                text-white
                transition
                hover:bg-indigo-700
                disabled:cursor-not-allowed
                disabled:bg-indigo-400
              "
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Generating Resume Bullet...
                </>
              ) : (
                "Generate Resume Bullet"
              )}
            </button>
          </div>

        </div>
      </div>
{showConfirmation && (
  <ResumeGapConfirmationModal
    missingQuestions={missingQuestions}
    onContinueEditing={() =>
      setShowConfirmation(false)
    }
    onGenerateAnyway={() => {
      setShowConfirmation(false);

      onGenerate({
        usedWhere,
        years,
        description,
      });
    }}
  />
)}
    </>
  );
}