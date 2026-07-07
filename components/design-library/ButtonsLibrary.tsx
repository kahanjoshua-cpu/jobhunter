import OptionCard from "./OptionCard";

export default function ButtonsLibrary() {
  return (
    <div className="space-y-16">

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Buttons
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Compare button styles used throughout Jobhunter.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <OptionCard
          title="Option 1"
          description="Rounded"
        >
          <div className="flex flex-wrap gap-4">

            <button className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white">
              Primary Button
            </button>

            <button className="rounded-xl border border-slate-300 px-6 py-3 font-medium">
              Secondary
            </button>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 2"
          description="Pill"
        >
          <div className="flex flex-wrap gap-4">

            <button className="rounded-full bg-indigo-600 px-6 py-3 font-medium text-white">
              Primary Button
            </button>

            <button className="rounded-full border border-slate-300 px-6 py-3 font-medium">
              Secondary
            </button>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 3"
          description="Square"
        >
          <div className="flex flex-wrap gap-4">

            <button className="rounded-md bg-indigo-600 px-6 py-3 font-medium text-white">
              Primary Button
            </button>

            <button className="rounded-md border border-slate-300 px-6 py-3 font-medium">
              Secondary
            </button>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 4"
          description="Large CTA"
        >
          <button className="w-full rounded-xl bg-indigo-600 px-6 py-4 text-lg font-semibold text-white">
            Analyze Resume
          </button>
        </OptionCard>

      </div>

    </div>
  );
}