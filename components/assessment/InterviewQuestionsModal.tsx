"use client";

interface InterviewQuestion {
  question: string;
  reason: string;
}

interface InterviewQuestionsModalProps {
  questions: InterviewQuestion[];
  onClose: () => void;
}

export default function InterviewQuestionsModal({
  questions,
  onClose,
}: InterviewQuestionsModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">

      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl">

        <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-8 py-6">

          <div>

            <h2 className="font-ibm text-4xl font-semibold text-slate-900">
              🎤 Likely Interview Questions
            </h2>

            <p className="mt-2 text-lg text-slate-600">
              Based on your resume, the job description, and our assessment,
              these are the questions a hiring manager may ask to better
              understand your experience.
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-lg font-medium text-slate-600 transition hover:bg-slate-100"
          >
            ✕
          </button>

        </div>

        <div className="space-y-8 p-8">

          {questions.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
                  {index + 1}
                </div>

                <div className="flex-1">

                  <h3 className="font-ibm text-2xl font-semibold text-slate-900">
                    {item.question}
                  </h3>

                  <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">

                    <p className="font-semibold text-slate-900">
                      Why we're asking
                    </p>

                    <p className="mt-2 leading-7 text-slate-700">
                      {item.reason}
                    </p>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="border-t border-slate-200 p-6 text-center">

          <p className="mb-6 text-base leading-7 text-slate-600">
            These aren't guaranteed interview questions. They're the topics
            most likely to come up based on your resume, this job description,
            and our assessment.
          </p>

          <button
            onClick={onClose}
            className="rounded-xl bg-indigo-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-indigo-700"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}