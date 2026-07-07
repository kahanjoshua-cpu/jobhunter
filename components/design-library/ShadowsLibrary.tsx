import OptionCard from "./OptionCard";

export default function ShadowsLibrary() {
  return (
    <div className="space-y-16">

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Shadows
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Compare shadow styles.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <OptionCard title="Option 1" description="None">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-bold">Match Score</h3>
            <p className="mt-3 text-slate-600">
              Border only.
            </p>
          </div>
        </OptionCard>

        <OptionCard title="Option 2" description="Small">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Match Score</h3>
            <p className="mt-3 text-slate-600">
              Soft shadow.
            </p>
          </div>
        </OptionCard>

        <OptionCard title="Option 3" description="Medium">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 className="text-2xl font-bold">Match Score</h3>
            <p className="mt-3 text-slate-600">
              Balanced depth.
            </p>
          </div>
        </OptionCard>

        <OptionCard title="Option 4" description="Large">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
            <h3 className="text-2xl font-bold">Match Score</h3>
            <p className="mt-3 text-slate-600">
              Strong elevation.
            </p>
          </div>
        </OptionCard>

      </div>

    </div>
  );
}