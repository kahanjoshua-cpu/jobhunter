import OptionCard from "./OptionCard";

export default function SpacingLibrary() {
  return (
    <div className="space-y-16">

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Spacing
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Compare spacing systems throughout the interface.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <OptionCard
          title="Option 1"
          description="Compact"
        >
          <div className="rounded-xl border border-slate-200 bg-white p-4">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              MATCH SCORE
            </p>

            <h3 className="mt-1 text-2xl font-bold">
              Strong Match
            </h3>

            <p className="mt-2 text-slate-600">
              Tight spacing throughout the card.
            </p>

            <button className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-white">
              Analyze
            </button>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 2"
          description="Balanced"
        >
          <div className="rounded-xl border border-slate-200 bg-white p-6">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              MATCH SCORE
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              Strong Match
            </h3>

            <p className="mt-4 text-slate-600">
              Comfortable spacing for readability.
            </p>

            <button className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 text-white">
              Analyze
            </button>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 3"
          description="Airy"
        >
          <div className="rounded-xl border border-slate-200 bg-white p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              MATCH SCORE
            </p>

            <h3 className="mt-5 text-3xl font-bold">
              Strong Match
            </h3>

            <p className="mt-6 text-slate-600">
              Spacious layout with generous padding.
            </p>

            <button className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-white">
              Analyze
            </button>

          </div>
        </OptionCard>

      </div>

    </div>
  );
}