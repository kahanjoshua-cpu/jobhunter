"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

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
  const [usedWhere, setUsedWhere] = useState("");
  const [years, setYears] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
      <h3 className="text-lg font-semibold text-slate-900">
        Great!
      </h3>

      <p className="mt-2 leading-7 text-slate-700">
        Let's make sure employers see your experience with{" "}
        <strong>{gap.skill}</strong>.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Where did you use this skill?
          </label>

          <input
            value={usedWhere}
            onChange={(e) => setUsedWhere(e.target.value)}
            disabled={isGenerating}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
            placeholder="Amplify, Quest to Learn, Freelance..."
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Approximately how long have you used it?
          </label>

          <input
            value={years}
            onChange={(e) => setYears(e.target.value)}
            disabled={isGenerating}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
            placeholder="2 years"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Describe how you used it.
          </label>

          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isGenerating}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
            placeholder="Tell us how you used this skill..."
          />
        </div>

        <button
          type="button"
          disabled={isGenerating}
          onClick={() =>
            onGenerate({
              usedWhere,
              years,
              description,
            })
          }
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Generating Resume Bullet...
            </>
          ) : (
            "Generate Resume Bullet →"
          )}
        </button>
      </div>
    </div>
  );
}