import OptionCard from "./OptionCard";

export default function AnimationsLibrary() {
  return (
    <div className="space-y-16">

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Animations
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Compare animation and interaction styles.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <OptionCard
          title="Option 1"
          description="No Animation"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <h3 className="text-2xl font-bold">
              Match Score
            </h3>

            <p className="mt-3 text-slate-600">
              Static interface.
            </p>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 2"
          description="Fade"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-opacity duration-300 hover:opacity-70">

            <h3 className="text-2xl font-bold">
              Match Score
            </h3>

            <p className="mt-3 text-slate-600">
              Fade on hover.
            </p>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 3"
          description="Lift"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

            <h3 className="text-2xl font-bold">
              Match Score
            </h3>

            <p className="mt-3 text-slate-600">
              Lifts off the page.
            </p>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 4"
          description="Scale"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-transform duration-300 hover:scale-105">

            <h3 className="text-2xl font-bold">
              Match Score
            </h3>

            <p className="mt-3 text-slate-600">
              Slight scale effect.
            </p>

          </div>
        </OptionCard>

      </div>

    </div>
  );
}