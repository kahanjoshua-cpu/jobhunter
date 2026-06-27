export default function MatchSummary() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="flex items-center gap-3">
        <div className="h-4 w-4 rounded-full bg-green-500"></div>

        <h2 className="text-3xl font-bold">
          Strong Match
        </h2>
      </div>

      <p className="mt-3 text-lg text-gray-600">
        This role appears to be a strong fit based on the information provided.
      </p>

      <div className="my-8 border-t"></div>

      <div className="text-center">

        <p className="text-sm uppercase tracking-wider text-gray-500">
          Recommendation
        </p>

        <p className="mt-3 text-4xl font-bold text-green-600">
          Apply
        </p>

      </div>

      <div className="my-8 border-t"></div>

      <div className="grid grid-cols-2 gap-8 text-center">

        <div>
          <p className="text-sm text-gray-500">
            Match Score
          </p>

          <p className="mt-2 text-3xl">
            ⭐⭐⭐⭐☆
          </p>

          <p className="mt-1 text-lg font-semibold">
            4.2 / 5
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Confidence
          </p>

          <p className="mt-4 text-3xl font-bold">
            High
          </p>
        </div>

      </div>

    </section>
  );
}