export default function FeedbackBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-indigo-100 bg-white/95 backdrop-blur-md shadow-[0_-8px_24px_rgba(15,23,42,0.08)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
             💜Your feedback helps shape Jobhunter.
          </h3>

          <p className="mt-1 text-sm text-slate-600">
            Every suggestion helps improve future recommendations and make
            Jobhunter more useful for job seekers.
          </p>
        </div>

        <a
          href="/feedback"
          className="shrink-0 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Leave Feedback
        </a>
      </div>
    </div>
  );
}