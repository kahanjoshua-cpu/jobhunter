export default function Hero() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">

      <div className="mx-auto max-w-4xl text-center">

        <p className="text-lg font-semibold tracking-wide">
          Jobhunter
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          Know Before You Apply.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Make informed application decisions so you can focus your time and
          energy on the opportunities most likely to move your job search
          forward.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          <div className="rounded-full border bg-white px-5 py-3 shadow-sm">
            📄 Upload Resume
          </div>

          <div className="rounded-full border bg-white px-5 py-3 shadow-sm">
            📋 Paste Job Description
          </div>

          <div className="rounded-full border bg-white px-5 py-3 shadow-sm">
            ⭐ Get Recommendation
          </div>

        </div>

        <div className="mt-8 text-gray-600">

          <p className="font-medium">
            No ads. No gimmicks.
          </p>

          <p className="font-semibold text-black">
            Just better application decisions.
          </p>

        </div>

      </div>

      <div className="mx-auto mt-14 max-w-3xl rounded-2xl border bg-white p-8 shadow-lg">

        <label className="mb-2 block text-lg font-semibold">
          📄 Upload Resume
        </label>

        <input
          type="file"
          className="w-full rounded-lg border p-3"
        />

        <label className="mb-2 mt-8 block text-lg font-semibold">
          📋 Paste Job Description
        </label>

        <textarea
          rows={10}
          placeholder="Paste the job description here..."
          className="w-full rounded-lg border p-4"
        />

        <button
          className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
        >
          Get My Recommendation
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          Recommendations are designed to support your judgment, not replace it.
        </p>

      </div>

    </main>
  );
}