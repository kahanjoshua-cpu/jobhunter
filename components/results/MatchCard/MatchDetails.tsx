import { Info } from "lucide-react";

interface MatchDetailsProps {
  score: number;
  overallMatch: string;
  confidence: string;
  onOpenConfidenceModal: () => void;
}

export default function MatchDetails({
  score,
  overallMatch,
  confidence,
  onOpenConfidenceModal,
}: MatchDetailsProps) {
  let badgeClass = "";

  if (score >= 70) {
    badgeClass =
      "bg-emerald-100 text-emerald-700 border border-emerald-200";
  } else if (score >= 50) {
    badgeClass =
      "bg-amber-100 text-amber-700 border border-amber-200";
  } else {
    badgeClass =
      "bg-orange-100 text-orange-700 border border-orange-200";
  }

  return (
    <div className="flex flex-col">
      <p
        className="text-lg font-bold uppercase tracking-[0.24em] text-slate-800"
        style={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
        }}
      >
        OVERALL MATCH
      </p>

      <div
        className={`mt-5 inline-flex w-fit items-center rounded-full px-6 py-2.5 text-base font-semibold shadow-sm ${badgeClass}`}
      >
        {overallMatch}
      </div>

      <div className="mt-8">
        <button
          onClick={onOpenConfidenceModal}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 transition hover:text-indigo-600"
        >
          AI Confidence
          <Info className="h-4 w-4" />
        </button>

        <p className="mt-2 text-lg font-semibold text-slate-800">
          {confidence}
        </p>
      </div>
    </div>
  );
}