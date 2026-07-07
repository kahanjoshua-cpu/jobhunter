import OptionCard from "./OptionCard";

export default function FormsLibrary() {
  return (
    <div className="space-y-16">

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Forms
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Compare form field styles used throughout Jobhunter.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <OptionCard
          title="Option 1"
          description="Minimal"
        >
          <div className="space-y-4">

            <input
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
              placeholder="Paste job description..."
            />

            <textarea
              className="h-32 w-full rounded-xl border border-slate-300 p-4"
              placeholder="Job description..."
            />

          </div>
        </OptionCard>

        <OptionCard
          title="Option 2"
          description="Soft"
        >
          <div className="space-y-4">

            <input
              className="w-full rounded-2xl bg-slate-100 px-4 py-3"
              placeholder="Paste job description..."
            />

            <textarea
              className="h-32 w-full rounded-2xl bg-slate-100 p-4"
              placeholder="Job description..."
            />

          </div>
        </OptionCard>

        <OptionCard
          title="Option 3"
          description="Outlined"
        >
          <div className="space-y-4">

            <input
              className="w-full rounded-xl border-2 border-indigo-300 px-4 py-3"
              placeholder="Paste job description..."
            />

            <textarea
              className="h-32 w-full rounded-xl border-2 border-indigo-300 p-4"
              placeholder="Job description..."
            />

          </div>
        </OptionCard>

        <OptionCard
          title="Option 4"
          description="Filled"
        >
          <div className="space-y-4">

            <input
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              placeholder="Paste job description..."
            />

            <textarea
              className="h-32 w-full rounded-xl border border-slate-200 bg-slate-50 p-4"
              placeholder="Job description..."
            />

          </div>
        </OptionCard>

      </div>

    </div>
  );
}