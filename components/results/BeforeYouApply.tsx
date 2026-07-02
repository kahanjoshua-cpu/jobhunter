import {
  ClipboardCheck,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

import type {
  MissingRequirement,
} from "@/lib/types/resumeAnalysis";

interface BeforeYouApplyProps {
  missingRequirements?: MissingRequirement[];
  recommendations?: string[];
  animationStage: number;
}

export default function BeforeYouApply({
  missingRequirements = [],
  recommendations = [],
  animationStage,
}: BeforeYouApplyProps) {
  return (
    <section
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-700 ${
        animationStage >= 5
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5">
        <ClipboardCheck className="h-6 w-6 text-slate-700" />

        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Before You Apply
          </h2>

          <p className="text-sm text-slate-500">
            A few things to consider before investing time in this application.
          </p>
        </div>
      </div>

      <div className="space-y-8 p-6">

        {missingRequirements.length > 0 && (
          <div>
            <h3 className="mb-4 text-base font-bold uppercase tracking-wide text-slate-600">
              Potential Concerns
            </h3>

            <div className="space-y-4">
              {missingRequirements.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-amber-200 bg-amber-50 p-5"
                >
                  <div className="flex items-start gap-3">

                    <AlertTriangle className="mt-1 h-5 w-5 text-amber-600" />

                    <div>

                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 leading-7 text-slate-700">
                        {item.reason}
                      </p>

                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        <div>

          <h3 className="mb-4 text-base font-bold uppercase tracking-wide text-slate-600">
            Recommendations
          </h3>

          <div className="space-y-3">

            {recommendations.map((recommendation) => (
              <div
                key={recommendation}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />

                <p className="leading-7 text-slate-700">
                  {recommendation}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}