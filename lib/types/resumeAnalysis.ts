export interface MissingSkill {
  skill: string;
  reason: string;
}

export interface MissingRequirement {
  title: string;
  reason: string;
}

export interface ScoreBreakdown {
  experience: number;
  skills: number;
  education: number;
  resumeQuality: number;
}

export interface ResumeAnalysis {
  matchScore: number;

  overallMatch:
    | "Exceptional Match"
    | "Strong Match"
    | "Good Match"
    | "Moderate Match"
    | "Weak Match"
    | "Poor Match";

  confidence: "High" | "Medium" | "Low";

summary: string;

  strengths: string[];

  // Things the user may actually have but forgot to include
  missingSkills: MissingSkill[];

  // Things the user genuinely may not satisfy
  missingRequirements: MissingRequirement[];

  beforeYouApply: string[];

  scoreBreakdown: ScoreBreakdown;
}