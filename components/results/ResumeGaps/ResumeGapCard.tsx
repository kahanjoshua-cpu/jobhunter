import {
  BUTTONS,
  CARDS,
  TYPOGRAPHY,
} from "@/lib/design";

import type { MissingSkill } from "@/lib/types/resumeAnalysis";

interface ResumeGapCardProps {
  gap: MissingSkill;
  index: number;
  total: number;
  onStart: () => void;
  onNoExperience: () => void;
}

export default function ResumeGapCard({
  gap,
  onStart,
  onNoExperience,
}: ResumeGapCardProps) {
  return (
    <div className={CARDS.resumeGap}>
      {/* Main Heading */}
      <h3 className={TYPOGRAPHY.gapHeading}>
        We couldn't find evidence of{" "}
        <strong>{gap.skill}</strong> on your resume.
      </h3>

      {/* Explanation */}
      <p className={TYPOGRAPHY.gapExplanation}>
        {gap.reason}
      </p>

      {/* Question */}
      <h4 className={`mt-7 ${TYPOGRAPHY.gapQuestion}`}>
        Have you used <strong>{gap.skill}</strong> before?
      </h4>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">

        {/* Yes */}
        <button
          onClick={onStart}
          className={`
            ${BUTTONS.option1.base}
            ${BUTTONS.option1.primary}
          `}
        >
          👍 Oh yeah, I do!
        </button>

        {/* No */}
        <button
          onClick={onNoExperience}
          className={`
            ${BUTTONS.option1.base}
            ${BUTTONS.option1.secondary}
          `}
        >
          👎 No, I don't.
        </button>

      </div>
    </div>
  );
}