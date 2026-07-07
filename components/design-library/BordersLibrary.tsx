import OptionCard from "./OptionCard";

export default function BordersLibrary() {
  return (
    <div className="space-y-16">

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Borders
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Compare border radius and border thickness.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <OptionCard
          title="Option 1"
          description="Sharp"
        >
          <div className="rounded-none border border-slate-300 bg-white p-6">

            <h3 className="text-2xl font-bold">
              Match Score
            </h3>

            <p className="mt-3 text-slate-600">
              Square corners with a standard border.
            </p>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 2"
          description="Rounded"
        >
          <div className="rounded-xl border border-slate-300 bg-white p-6">

            <h3 className="text-2xl font-bold">
              Match Score
            </h3>

            <p className="mt-3 text-slate-600">
              Moderate corner radius.
            </p>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 3"
          description="Very Rounded"
        >
          <div className="rounded-3xl border border-slate-300 bg-white p-6">

            <h3 className="text-2xl font-bold">
              Match Score
            </h3>

            <p className="mt-3 text-slate-600">
              Soft, modern appearance.
            </p>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 4"
          description="Heavy Border"
        >
          <div className="rounded-2xl border-2 border-slate-400 bg-white p-6">

            <h3 className="text-2xl font-bold">
              Match Score
            </h3>

            <p className="mt-3 text-slate-600">
              Strong border emphasis.
            </p>

          </div>
        </OptionCard>

      </div>

    </div>
  );
}