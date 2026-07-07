interface StrengthenApplicationItem {
  title: string;
  finding: string;
  recommendation: string;
}

interface ConcernsCardProps {
  strengthenApplication?: StrengthenApplicationItem[];
  onOpenInterviewQuestions?: () => void;
}

export default function ConcernsCard({
  strengthenApplication = [],
  onOpenInterviewQuestions,
}: ConcernsCardProps) {
  if (strengthenApplication.length === 0) {
    return (
      <section className="rounded-2xl border border-red-300 bg-red-50 p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-red-700">
          🚨 Debug
        </h2>

        <p className="mt-4 text-lg text-red-700">
          No <code>strengthenApplication</code> data was
          received.
        </p>
      </section>
    );
  }

  return (
    <section className="h-full rounded-2xl border border-amber-200 bg-amber-50 px-8 py-7 shadow-sm">
      <h2 className="font-ibm text-3xl font-semibold text-slate-900">
        💡 Strengthen Your Application
      </h2>

      <p className="mt-3 text-lg leading-8 text-slate-700">
        Practical opportunities to help hiring managers and
        Applicant Tracking Systems (ATS) better recognize the
        experience you already have.
      </p>

      <div className="mt-7 space-y-5">
        {strengthenApplication.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-amber-300 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-lg">
                ⚠️
              </div>

              <div className="flex-1">
                <h3 className="font-ibm text-xl font-semibold leading-7 text-slate-900">
                  {item.title}
                </h3>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    🔎 What your resume demonstrates
                  </h4>

                  <p className="mt-1.5 leading-7 text-slate-700">
                    {item.finding}
                  </p>
                </div>

                <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                  <h4 className="font-semibold text-emerald-900">
                    ✨ Suggested improvement
                  </h4>

                  <p className="mt-2 leading-7 text-slate-700">
                    {item.recommendation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-amber-300 bg-amber-100 p-6">
        <h3 className="font-ibm text-2xl font-semibold text-slate-900">
          💬 Prepare for an Interview
        </h3>

        <p className="mt-3 text-lg leading-8 text-slate-700">
          Hiring managers often ask follow-up questions about
          these areas. We've prepared personalized interview
          questions based on your resume, the job description,
          and your assessment to help you prepare.
        </p>

        <div className="mt-7 flex justify-center">
          <button
            onClick={onOpenInterviewQuestions}
            className="rounded-xl border-2 border-amber-500 bg-white px-8 py-4 text-lg font-medium text-amber-700 transition hover:bg-amber-50"
          >
            View Likely Interview Questions →
          </button>
        </div>
      </div>
    </section>
  );
}