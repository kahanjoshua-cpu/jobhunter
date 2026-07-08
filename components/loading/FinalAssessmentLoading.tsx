"use client";

import { useEffect, useState } from "react";
import LoadingProgressBar from "./LoadingProgressBar";
import LoadingStep from "./LoadingStep";

const steps = [
  "Reviewing your resume one last time...",
  "Considering your answers to our questions...",
  "Thinking like a hiring manager...",
  "Preparing likely interview questions...",
];

interface FinalAssessmentLoadingProps {
  isComplete: boolean;
  onFinished?: () => void;
}

export default function FinalAssessmentLoading({
  isComplete,
  onFinished,
}: FinalAssessmentLoadingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

  // Advance through the first three steps every 2.5 seconds.
  // The fourth step remains active until the API completes.
  useEffect(() => {
    if (isComplete) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          return prev;
        }

        setCompletedSteps((completed) =>
          completed.includes(prev)
            ? completed
            : [...completed, prev]
        );

        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isComplete]);

  // Update progress based on the current step.
  useEffect(() => {
    if (isComplete) return;

    switch (currentStep) {
      case 0:
        setProgress(20);
        break;

      case 1:
        setProgress(45);
        break;

      case 2:
        setProgress(70);
        break;

      case 3:
        setProgress(75);
        break;
    }
  }, [currentStep, isComplete]);

  // Slowly creep toward 98% while waiting on Claude.
  useEffect(() => {
    if (isComplete || currentStep !== 3) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) return 98;
        return prev + 1;
      });
    }, 900);

    return () => clearInterval(interval);
  }, [currentStep, isComplete]);

  // Finish once the API responds.
  useEffect(() => {
    if (!isComplete) return;

    setCompletedSteps([0, 1, 2, 3]);
    setCurrentStep(4);
    setProgress(100);

    const timer = setTimeout(() => {
      onFinished?.();
    }, 700);

    return () => clearTimeout(timer);
  }, [isComplete, onFinished]);

  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
      <div className="text-center">
        <div className="text-5xl">🧠</div>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Preparing your final assessment...
        </h2>

        <p className="mt-3 text-lg text-slate-500">
          We're reviewing everything before presenting your personalized report.
        </p>
      </div>

      <LoadingProgressBar progress={progress} />

      <div className="mt-12 space-y-5">
        {steps.map((step, index) => {
          let status: "pending" | "active" | "complete" = "pending";

          if (completedSteps.includes(index)) {
            status = "complete";
          } else if (currentStep === index) {
            status = "active";
          }

          return (
            <LoadingStep
              key={step}
              text={step}
              status={status}
            />
          );
        })}
      </div>

      <p className="mt-10 text-center text-sm text-slate-500">
        Every assessment is personalized based on your resume and responses.
      </p>
    </div>
  );
}