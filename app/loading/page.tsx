"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const steps = [
  {
    title: "🔍 Analyzing your resume...",
    progress: 25,
    items: [
      "🔄 Reading your resume",
      "○ Matching qualifications",
      "○ Reviewing experience",
      "○ Preparing recommendation",
    ],
  },
  {
    title: "🎯 Matching your experience...",
    progress: 50,
    items: [
      "✅ Reading your resume",
      "🔄 Matching qualifications",
      "○ Reviewing experience",
      "○ Preparing recommendation",
    ],
  },
  {
    title: "📚 Reviewing qualifications...",
    progress: 75,
    items: [
      "✅ Reading your resume",
      "✅ Matching qualifications",
      "🔄 Reviewing experience",
      "○ Preparing recommendation",
    ],
  },
  {
    title: "💡 Preparing your recommendation...",
    progress: 100,
    items: [
      "✅ Reading your resume",
      "✅ Matching qualifications",
      "✅ Reviewing experience",
      "🔄 Preparing recommendation",
    ],
  },
];

export default function LoadingPage() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (step < steps.length - 1) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 1800);

      return () => clearTimeout(timer);
    }

    const redirect = setTimeout(() => {
      router.push("/results");
    }, 1800);

    return () => clearTimeout(redirect);
  }, [step, router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F7F8FC]">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="text-3xl font-bold">
          {steps[step].title}
        </h1>

        <p className="mt-3 text-gray-600">
          We're comparing your experience against this role to build a recommendation.
        </p>

        <div className="mt-8 h-3 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-700"
            style={{ width: `${steps[step].progress}%` }}
          />
        </div>

        <div className="mt-8 space-y-4">
          {steps[step].items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-500">
          🔒 Your information is analyzed securely and is never shared.
        </p>

      </div>
    </main>
  );
}
