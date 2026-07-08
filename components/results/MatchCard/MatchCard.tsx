"use client";

import { useEffect, useState } from "react";
import AIConfidenceModal from "./AIConfidenceModal";
import {
  Lightbulb,
  CircleCheckBig,
  TriangleAlert,
} from "lucide-react";

import type { ResumeAnalysis } from "@/lib/types/resumeAnalysis";

import MatchDetails from "./MatchDetails";
import MatchTarget from "./MatchTarget";
import MatchScoreModal from "./MatchScoreModal";
import MatchScoreRing from "./MatchScoreRing";

interface MatchCardProps {
  analysis: ResumeAnalysis;
}

export default function MatchCard({
  analysis,
}: MatchCardProps) {
  const [loaded, setLoaded] = useState(false);
  const [showConfidenceModal, setShowConfidenceModal] =
  useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

const insights = (analysis.summary ?? "")
  .split(". ")
  .filter((sentence) => sentence.trim() !== "");

  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="grid grid-cols-[340px_1fr] gap-12 px-10 py-10">

        {/* Left Side */}

        <div className="flex flex-col items-center">

          <h3
            className="text-lg font-bold uppercase tracking-[0.25em] text-slate-700"
            style={{
              fontFamily: '"IBM Plex Sans", sans-serif',
            }}
          >
            MATCH SCORE
          </h3>

          <div className="mt-3">
            <MatchScoreRing score={analysis.matchScore} />
          </div>

          <div className="mt-2">
            <MatchTarget score={analysis.matchScore} />
          </div>

        </div>

        {/* Right Side */}

        <div
          className={`flex flex-col transition-all duration-700 ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >

<MatchDetails
  score={analysis.matchScore}
  overallMatch={analysis.overallMatch}
  confidence={analysis.confidence}
  onOpenConfidenceModal={() =>
    setShowConfidenceModal(true)
  }
/>

          <div className="mt-6 flex items-center gap-3">

            <Lightbulb className="h-6 w-6 text-amber-500" />

            <h3
              className="text-2xl font-bold text-slate-900"
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Why this score?
            </h3>

          </div>

<div className="mt-5 rounded-2xl border border-violet-200 bg-violet-50/70 px-8 py-7">                      {insights.map((sentence, index) => {
              const isStrength = index === 0;

              return (
                <div
                  key={index}
                  className={`flex items-start gap-4 ${
                    index === 0 ? "" : "mt-7"
                  }`}
                >
<div className="-mt-0.5 shrink-0">

                    {isStrength ? (
                      <CircleCheckBig className="h-6 w-6 text-emerald-600" />
                    ) : (
                      <TriangleAlert className="h-6 w-6 text-amber-600" />
                    )}

                  </div>

<div className="font-source-sans">
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.08em] ${
                        isStrength
                          ? "text-emerald-700"
                          : "text-amber-700"
                      }`}
                    >
                      {isStrength
                        ? "You bring"
                        : "Biggest gap"}
                    </p>

                    <p className="mt-2 text-[20px] leading-relaxed text-slate-800">
                      {sentence.endsWith(".")
                        ? sentence
                        : `${sentence}.`}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

      <MatchScoreModal />

      {showConfidenceModal && (
        <AIConfidenceModal
          confidence={analysis.confidence}
          onClose={() =>
            setShowConfidenceModal(false)
          }
        />
      )}

    </section>
  );
}