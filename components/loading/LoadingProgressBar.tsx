"use client";

interface LoadingProgressBarProps {
  progress: number;
}

export default function LoadingProgressBar({
  progress,
}: LoadingProgressBarProps) {
  return (
    <div className="mt-8 w-full">
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-indigo-600 transition-[width] duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-2 text-center text-sm font-medium text-slate-500">
        {progress}%
      </div>
    </div>
  );
}