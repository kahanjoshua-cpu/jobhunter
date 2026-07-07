import OptionCard from "./OptionCard";

export default function CardsLibrary() {
  return (
    <div className="space-y-16">

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Cards
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Compare different card styles used throughout Jobhunter.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <OptionCard
          title="Option 1"
          description="Minimal"
        >
          <div className="rounded-xl border border-slate-200 bg-white p-6">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              MATCH SCORE
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              Strong Match
            </h3>

            <p className="mt-3 text-slate-600">
              Clean border with little emphasis.
            </p>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 2"
          description="Elevated"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              MATCH SCORE
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              Strong Match
            </h3>

            <p className="mt-3 text-slate-600">
              Medium shadow with subtle elevation.
            </p>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 3"
          description="Bold Border"
        >
          <div className="rounded-2xl border-2 border-slate-300 bg-white p-6">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              MATCH SCORE
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              Strong Match
            </h3>

            <p className="mt-3 text-slate-600">
              Heavy border with minimal shadow.
            </p>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 4"
          description="Soft Background"
        >
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              MATCH SCORE
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              Strong Match
            </h3>

            <p className="mt-3 text-slate-600">
              Light background instead of elevation.
            </p>

          </div>
        </OptionCard>

      </div>

    </div>
  );
}