import OptionCard from "./OptionCard";
import {
  CheckCircle2,
  AlertTriangle,
  Info,
  Lightbulb,
} from "lucide-react";

export default function IconsLibrary() {
  return (
    <div className="space-y-16">

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Icons
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Compare icon styles and sizes.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <OptionCard
          title="Option 1"
          description="Filled"
        >
          <div className="flex items-center gap-4">

            <CheckCircle2 className="h-10 w-10 text-emerald-600" />

            <div>

              <h3 className="text-2xl font-bold">
                Strong Match
              </h3>

              <p className="text-slate-600">
                Success message styling.
              </p>

            </div>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 2"
          description="Warning"
        >
          <div className="flex items-center gap-4">

            <AlertTriangle className="h-10 w-10 text-amber-500" />

            <div>

              <h3 className="text-2xl font-bold">
                Resume Gap
              </h3>

              <p className="text-slate-600">
                Warning message styling.
              </p>

            </div>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 3"
          description="Information"
        >
          <div className="flex items-center gap-4">

            <Info className="h-10 w-10 text-blue-600" />

            <div>

              <h3 className="text-2xl font-bold">
                Information
              </h3>

              <p className="text-slate-600">
                Informational styling.
              </p>

            </div>

          </div>
        </OptionCard>

        <OptionCard
          title="Option 4"
          description="Idea"
        >
          <div className="flex items-center gap-4">

            <Lightbulb className="h-10 w-10 text-amber-500" />

            <div>

              <h3 className="text-2xl font-bold">
                Recommendation
              </h3>

              <p className="text-slate-600">
                Suggestion styling.
              </p>

            </div>

          </div>
        </OptionCard>

      </div>

    </div>
  );
}