import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Lightbulb,
} from "lucide-react";

interface OverallAssessmentProps {
  summary: string;
  strengths: string[];
  concerns: string[];
  recommendation: string;
}

export default function OverallAssessment({
  summary,
  strengths,
  concerns,
  recommendation,
}: OverallAssessmentProps) {
  return (
<section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}

      <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5">
        <ClipboardList className="h-6 w-6 text-slate-700" />

        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Overall Assessment
          </h2>

          <p className="text-sm text-slate-500">
            A complete breakdown of how your background aligns with this
            opportunity.
          </p>
        </div>
      </div>

      <div className="space-y-8 p-6">

        {/* Summary */}

        <div className="rounded-xl border border-violet-200 bg-violet-50 p-6">

          <h3 className="mb-3 text-base font-bold uppercase tracking-wide text-slate-700">
            Executive Summary
          </h3>

          <p className="leading-8 text-slate-700">
            {summary}
          </p>

        </div>

        {/* Strengths */}

        {strengths.length > 0 && (
          <div>

            <h3 className="mb-4 text-base font-bold uppercase tracking-wide text-slate-600">
              Your Biggest Strengths
            </h3>

            <div className="space-y-4">

              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />

                  <p className="leading-7 text-slate-700">
                    {strength}
                  </p>

                </div>
              ))}

            </div>

          </div>
        )}

        {/* Concerns */}

        {concerns.length > 0 && (
          <div>

            <h3 className="mb-4 text-base font-bold uppercase tracking-wide text-slate-600">
              Areas That May Need Attention
            </h3>

            <div className="space-y-4">

              {concerns.map((concern) => (
                <div
                  key={concern}
                  className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4"
                >
                  <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-amber-600" />

                  <p className="leading-7 text-slate-700">
                    {concern}
                  </p>

                </div>
              ))}

            </div>

          </div>
        )}

        {/* Recommendation */}

        <div>

          <h3 className="mb-4 text-base font-bold uppercase tracking-wide text-slate-600">
            Final Recommendation
          </h3>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">

            <div className="mb-4 flex items-center gap-2">

              <Lightbulb className="h-5 w-5 text-blue-600" />

              <span className="font-semibold text-blue-900">
                What we'd do next
              </span>

            </div>

            <p className="leading-8 text-slate-700">
              {recommendation}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}