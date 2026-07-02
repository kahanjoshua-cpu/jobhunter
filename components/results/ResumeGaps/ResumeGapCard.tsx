import type { MissingSkill } from "@/lib/types/resumeAnalysis";

interface ResumeGapCardProps {
  gap: MissingSkill;
  index: number;
  total: number;
  onStart: () => void;
}

export default function ResumeGapCard({
  gap,
  index,
  total,
  onStart,
}: ResumeGapCardProps) {
  return (
    <>
      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
        Resume Gap {index + 1} of {total}
      </span>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="leading-7 text-slate-700">
          We couldn't find evidence of{" "}
          <strong>{gap.skill}</strong> on your resume.
        </p>

        <p className="mt-3 leading-7 text-slate-600">
          {gap.reason}
        </p>

        <p className="mt-6 text-lg font-semibold text-slate-900">
          Have you used <strong>{gap.skill}</strong> before?
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={onStart}
            className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
          >
            👍 Oh yeah, I do!
          </button>

          <button
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            👎 No, I don't.
          </button>
        </div>
      </div>
    </>
  );
}