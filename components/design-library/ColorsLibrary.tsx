import OptionCard from "./OptionCard";

export default function ColorsLibrary() {
  return (
    <div className="space-y-16">

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Colors
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Compare color palettes for Jobhunter.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <OptionCard
          title="Option 1"
          description="Indigo"
        >
          <div className="space-y-5">

            <div className="flex gap-3">

              <div className="h-14 w-14 rounded-xl bg-indigo-600" />

              <div className="h-14 w-14 rounded-xl bg-indigo-400" />

              <div className="h-14 w-14 rounded-xl bg-indigo-100" />

            </div>

            <button className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white">
              Primary Button
            </button>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 2"
          description="Blue"
        >
          <div className="space-y-5">

            <div className="flex gap-3">

              <div className="h-14 w-14 rounded-xl bg-blue-600" />

              <div className="h-14 w-14 rounded-xl bg-blue-400" />

              <div className="h-14 w-14 rounded-xl bg-blue-100" />

            </div>

            <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">
              Primary Button
            </button>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 3"
          description="Emerald"
        >
          <div className="space-y-5">

            <div className="flex gap-3">

              <div className="h-14 w-14 rounded-xl bg-emerald-600" />

              <div className="h-14 w-14 rounded-xl bg-emerald-400" />

              <div className="h-14 w-14 rounded-xl bg-emerald-100" />

            </div>

            <button className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white">
              Primary Button
            </button>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 4"
          description="Slate"
        >
          <div className="space-y-5">

            <div className="flex gap-3">

              <div className="h-14 w-14 rounded-xl bg-slate-800" />

              <div className="h-14 w-14 rounded-xl bg-slate-500" />

              <div className="h-14 w-14 rounded-xl bg-slate-200" />

            </div>

            <button className="rounded-xl bg-slate-800 px-6 py-3 font-medium text-white">
              Primary Button
            </button>

          </div>
        </OptionCard>

      </div>

    </div>
  );
}