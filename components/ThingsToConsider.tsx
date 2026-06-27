export default function ThingsToConsider() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">
      <h2 className="text-2xl font-bold">
        Consider Before You Apply
      </h2>

      <p className="mt-2 text-gray-600">
        These aren't deal-breakers, but they're worth reviewing before you submit your application.
      </p>

      <div className="mt-8 space-y-6">

        <div>
          <h3 className="font-semibold text-amber-700">
            Resume doesn't mention SQL
          </h3>
          <p className="mt-1 text-gray-600">
            If you have SQL experience, consider adding it before applying. It's listed as a preferred qualification.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-amber-700">
            Add measurable accomplishments
          </h3>
          <p className="mt-1 text-gray-600">
            Including metrics can make your impact easier for recruiters to evaluate.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-amber-700">
            Leadership could be emphasized
          </h3>
          <p className="mt-1 text-gray-600">
            Your experience shows leadership, but your resume could make it more prominent.
          </p>
        </div>

      </div>
    </section>
  );
}