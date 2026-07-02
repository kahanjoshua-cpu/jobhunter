"use client";

import { useEffect, useState } from "react";

interface MatchScoreRingProps {
  score: number;
}

export default function MatchScoreRing({
  score,
}: MatchScoreRingProps) {
  const [displayScore, setDisplayScore] =
    useState(0);

  useEffect(() => {
    let current = 0;

    const duration = 900;
    const interval = 18;

    const increment =
      Math.max(1, Math.ceil(score / (duration / interval)));

    const timer = setInterval(() => {
      current += increment;

      if (current >= score) {
        current = score;
        clearInterval(timer);
      }

      setDisplayScore(current);
    }, interval);

    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className="text-[72px] font-bold leading-none text-slate-900">
      {displayScore}%
    </div>
  );
}