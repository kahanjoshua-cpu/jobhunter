import { FileDown } from "lucide-react";

export default function AssessmentHeader() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white px-10 py-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
        FINAL REPORT
      </p>

      <h1 className="mt-3 font-ibm text-5xl font-semibold text-slate-900">
        Hiring Assessment
      </h1>

      <p className="mt-4 max-w-4xl text-xl leading-9 text-slate-700">
        After analyzing your resume, the job description, and your
        responses during the Resume Review, we've prepared a hiring
        assessment that reflects how your application is likely to be
        evaluated.
      </p>

      {/* PDF Report */}

      <button className="mt-8 flex w-full max-w-3xl items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-left transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
            <FileDown className="h-6 w-6 text-indigo-600" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Generate PDF Report
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Download a personalized PDF version of your assessment.
            </p>
          </div>
        </div>

        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
          Coming Soon
        </span>
      </button>
    </section>
  );
}