import {
  FileText,
  ClipboardList,
  Star,
  BadgeCheck,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="mt-14">
<div className="grid grid-cols-[320px_1px_1fr] items-start gap-10">
        {/* Left */}

        <div className="flex flex-col">

          {/* Step 1 */}

          <div className="flex gap-5">

            <div className="flex flex-col items-center">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <FileText size={24} strokeWidth={1.8} />
              </div>

              <div className="h-12 w-px bg-slate-100" />

            </div>

<div className="w-[240px] pt-2">              <h3 className="text-lg font-semibold text-slate-900">
                Upload your resume
              </h3>

              <p className="mt-1 text-slate-500">
                We'll extract the details that matter.
              </p>
            </div>

          </div>

          {/* Step 2 */}

          <div className="flex gap-5">

            <div className="flex flex-col items-center">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <ClipboardList size={24} strokeWidth={1.8} />
              </div>

              <div className="h-12 w-px bg-slate-100" />

            </div>

<div className="w-[240px] pt-2">              <h3 className="text-lg font-semibold text-slate-900">
                Paste a job description
              </h3>

              <p className="mt-1 text-slate-500">
                Add the full job posting.
              </p>
            </div>

          </div>

          {/* Step 3 */}

          <div className="flex gap-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              <Star size={24} strokeWidth={1.8} />
            </div>

<div className="w-[240px] pt-2">              <h3 className="text-lg font-semibold text-slate-900">
                Receive your recommendation
                <br />
                and Match Score
              </h3>

             <p className="mt-1 text-slate-500">
  Get personalized insights
  <br />
  to guide your next move.
</p>
            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="h-64 w-px bg-slate-100" />

        {/* Right */}

        <div>

          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-violet-100">

            <div className="absolute h-10 w-10 rounded-full bg-violet-300 opacity-30 blur-xl" />

            <BadgeCheck
              className="relative h-7 w-7 text-indigo-600"
              strokeWidth={1.8}
            />

          </div>

          <h3
            className="mt-5 whitespace-nowrap text-[52px] font-bold leading-[1.05] tracking-[-0.03em] text-slate-900"
            style={{
              fontFamily:
                "'Plus Jakarta Sans', sans-serif",
            }}
          >
            No ads.
            <br />
            No gimmicks.
          </h3>

          <p className="mt-5 text-3xl font-semibold leading-tight text-indigo-600">
            Just better
            <br />
            application
            <br />
            decisions.
          </p>

        </div>

      </div>
    </section>
  );
}