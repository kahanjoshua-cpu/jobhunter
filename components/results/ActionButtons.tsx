import {
  Download,
  RotateCcw,
  Search,
} from "lucide-react";

interface ActionButtonsProps {
  animationStage?: number;
}

export default function ActionButtons({
  animationStage = 6,
}: ActionButtonsProps) {
  return (
    <section
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-700 ${
        animationStage >= 6
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-4 p-6 md:flex-row">

        <button
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700"
        >
          <Download className="h-5 w-5" />
          Download Report (Coming Soon)
        </button>

        <button
          onClick={() => {
            sessionStorage.removeItem("analysis");
            window.location.href = "/";
          }}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
        >
          <RotateCcw className="h-5 w-5" />
          Analyze Another Job
        </button>

        <button
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
        >
          <Search className="h-5 w-5" />
          Improve Resume (Coming Soon)
        </button>

      </div>
    </section>
  );
}