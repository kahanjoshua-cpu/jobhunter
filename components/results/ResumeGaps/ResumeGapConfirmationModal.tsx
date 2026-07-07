"use client";

interface ResumeGapConfirmationModalProps {
  missingQuestions: string[];
  onContinueEditing: () => void;
  onGenerateAnyway: () => void;
}

export default function ResumeGapConfirmationModal({
  missingQuestions,
  onContinueEditing,
  onGenerateAnyway,
}: ResumeGapConfirmationModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-2xl border-2 border-indigo-700 bg-white p-8 shadow-2xl">
        <h2 className="text-2xl font-semibold text-slate-900">
          Some questions were left blank
        </h2>

        <p className="mt-4 text-lg text-slate-700">
          You skipped{" "}
          <strong>
            {missingQuestions.length}{" "}
            {missingQuestions.length === 1 ? "question" : "questions"}
          </strong>
          :
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
          {missingQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>

        <p className="mt-6 leading-7 text-slate-700">
          AI can still generate a resume bullet, but answering more questions
          usually produces a stronger, more personalized result.
        </p>

        <div className="mt-8 flex justify-end gap-4">
          <button
            type="button"
            onClick={onContinueEditing}
            className="rounded-xl border border-slate-300 px-6 py-3 font-medium hover:bg-slate-100"
          >
            Continue Editing
          </button>

          <button
            type="button"
            onClick={onGenerateAnyway}
            className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
          >
            Generate Anyway
          </button>
        </div>
      </div>
    </div>
  );
}