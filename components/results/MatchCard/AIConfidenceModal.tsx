"use client";

import { X } from "lucide-react";

interface AIConfidenceModalProps {
  confidence: string;
  onClose: () => void;
}

export default function AIConfidenceModal({
  confidence,
  onClose,
}: AIConfidenceModalProps) {
  const confidenceBadge =
    confidence === "High"
      ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
      : confidence === "Medium"
      ? "bg-amber-100 text-amber-700 border border-amber-200"
      : "bg-orange-100 text-orange-700 border border-orange-200";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-6">
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">
          <h2 className="font-ibm text-3xl font-semibold text-slate-900">
            What does AI Confidence mean?
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        {/* Scrollable Content */}

        <div className="flex-1 space-y-8 overflow-y-auto px-8 py-8">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Current Assessment
            </p>

            <div
              className={`mt-3 inline-flex rounded-full px-5 py-2 font-semibold ${confidenceBadge}`}
            >
              {confidence} Confidence
            </div>

            <p className="mt-5 text-[17px] leading-8 text-slate-700">
              AI Confidence reflects how certain Jobhunter is
              in its evaluation based on the information
              available in your resume and the job
              description.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold text-emerald-900">
                🟢 High Confidence
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                Your resume provides clear, specific evidence
                that supports this assessment.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-900">
                🟡 Medium Confidence
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                Some experience is transferable or requires
                interpretation, making the evaluation less
                certain.
              </p>
            </div>

            <div className="rounded-xl border border-orange-200 bg-orange-50 p-5">
              <h3 className="font-semibold text-orange-900">
                🟠 Low Confidence
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                Important qualifications are difficult to
                evaluate because your resume provides limited
                or ambiguous information.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-900">
              Important to know
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              AI Confidence is <strong>not</strong> a measure
              of your ability, potential, or likelihood of
              getting hired. It only reflects how confidently
              Jobhunter can evaluate your resume based on the
              information available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}