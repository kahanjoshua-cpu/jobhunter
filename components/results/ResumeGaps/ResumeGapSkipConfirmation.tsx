"use client";

interface ResumeGapSkipConfirmationProps {
  skill: string;
  onSkip: () => void;
  onGoBack: () => void;
}

export default function ResumeGapSkipConfirmation({
  skill,
  onSkip,
  onGoBack,
}: ResumeGapSkipConfirmationProps) {
  return (
    <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 shadow-lg">

      <h3 className="font-ibm text-3xl font-semibold text-slate-900">
        No problem.
      </h3>

      <p className="font-ibm mt-3 text-xl leading-8 text-slate-800">
        It looks like <strong>{skill}</strong> may be a genuine gap for this
        position.
      </p>

      <p className="mt-5 leading-8 text-slate-700">
        That doesn't necessarily mean you aren't qualified. It simply means
        your resume doesn't currently show experience with this skill.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">

        <button
          onClick={onGoBack}
          className="rounded-xl border-2 border-amber-300 bg-white px-7 py-4 text-lg font-medium text-slate-700 transition hover:bg-amber-100"
        >
          👍 Actually, I do have experience
        </button>

        <button
          onClick={onSkip}
          className="rounded-xl bg-amber-500 px-7 py-4 text-lg font-medium text-white transition hover:bg-amber-600"
        >
          Skip this gap →
        </button>

      </div>

    </div>
  );
}