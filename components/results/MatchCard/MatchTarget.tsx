"use client";

import Image from "next/image";

interface MatchTargetProps {
  score: number;
}

export default function MatchTarget({
  score,
}: MatchTargetProps) {
  let image = "/images/match-poor.png";

  if (score >= 70) {
    image = "/images/match-good.png";
  } else if (score >= 50) {
    image = "/images/match-decent.png";
  }

  return (
    <div className="relative mt-2 h-[285px] w-[285px]">
      <Image
        src={image}
        alt="Match Target"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}