interface Strength {
  title: string;
  description: string;
}

interface StrengthsCardProps {
  strengths: Strength[];
}

export default function StrengthsCard({
  strengths,
}: StrengthsCardProps) {
  return (
    <section className="h-full rounded-2xl border border-emerald-200 bg-emerald-50 px-8 py-7 shadow-sm">
      <h2 className="font-ibm text-3xl font-semibold text-slate-900">
        🌟 Strengths
      </h2>

      <p className="mt-3 text-lg leading-8 text-slate-700">
        These are the qualifications most likely to strengthen your
        application for this role.
      </p>

      <ul className="mt-7 space-y-5">
        {strengths.map((strength, index) => (
          <li
            key={index}
            className="flex items-start gap-4"
          >
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg">
              ✅
            </div>

            <div>
              <h3 className="font-semibold leading-6 text-slate-900">
                {strength.title}
              </h3>

              <p className="mt-0.5 leading-7 text-slate-700">
                {strength.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}