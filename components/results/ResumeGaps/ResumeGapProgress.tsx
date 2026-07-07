import { CARDS } from "@/lib/design";
import { CircleHelp } from "lucide-react";

interface ResumeGapProgressProps {
  current: number;
  total: number;
  completed: number;
}

export default function ResumeGapProgress({
  current,
  total,
  completed,
}: ResumeGapProgressProps) {
  return (
 <div
  className={`
    ${CARDS.resumeGap}
    flex
    items-center
    justify-between
    pb-3
  `}
>
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200">
          <CircleHelp
            className="h-5 w-5 text-amber-700"
            strokeWidth={2.25}
          />
        </div>

        <h2 className="text-xl font-semibold text-slate-900">
          Resume Gap {current} of {total}
        </h2>
      </div>

      {/* Right Side */}
      <p className="text-sm font-semibold text-slate-700">
        {completed} completed
      </p>
    </div>
  );
}