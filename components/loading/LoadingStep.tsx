"use client";

import { CheckCircle2, Loader2 } from "lucide-react";

interface LoadingStepProps {
  text: string;
  status: "pending" | "active" | "complete";
}

export default function LoadingStep({
  text,
  status,
}: LoadingStepProps) {
  return (
    <div
      className={`
        flex items-center gap-4 rounded-xl px-4 py-3
        transition-all duration-500 ease-out
        ${
          status === "active"
            ? "bg-indigo-50 shadow-sm scale-[1.01]"
            : status === "complete"
            ? "bg-green-50"
            : ""
        }
      `}
    >
      <div className="flex h-6 w-6 items-center justify-center">
        {status === "pending" && (
          <div className="h-4 w-4 rounded-full border-2 border-slate-300" />
        )}

        {status === "active" && (
          <Loader2 className="h-5 w-5 animate-spin text-indigo-600" />
        )}

        {status === "complete" && (
          <CheckCircle2 className="h-5 w-5 text-green-600 transition-all duration-300" />
        )}
      </div>

      <p
        className={`
          text-base transition-all duration-300
          ${
            status === "pending"
              ? "text-slate-500"
              : "font-medium text-slate-900"
          }
        `}
      >
        {text}
      </p>
    </div>
  );
}