export default function FeedbackBanner() {
  return (
    <div className="mt-12 rounded-3xl border border-indigo-100 bg-indigo-50 px-8 py-6">
      <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Questions or feedback?
          </h3>

          <p className="mt-1 text-gray-600">
            Jobhunter is actively being built. I'd love to hear your ideas,
            suggestions, or anything that would improve your experience.
          </p>
        </div>

        <a
          href="/feedback"
          className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Leave Feedback
        </a>
      </div>
    </div>
  );
}