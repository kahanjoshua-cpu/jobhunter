import { z } from "zod";

export const ResumeAnalysisSchema = z.object({
  matchScore: z.number(),

  overallMatch: z.enum([
    "Exceptional Match",
    "Strong Match",
    "Good Match",
    "Moderate Match",
    "Weak Match",
    "Poor Match",
  ]),

  confidence: z.enum([
    "High",
    "Medium",
    "Low",
  ]),

summary: z.string(),

  strengths: z.array(
    z.string()
  ),

  missingSkills: z.array(
    z.object({
      skill: z.string(),
      reason: z.string(),
    })
  ),

  missingRequirements: z.array(
    z.object({
      title: z.string(),
      reason: z.string(),
    })
  ),

  beforeYouApply: z.array(
    z.string()
  ),

  scoreBreakdown: z.object({
    experience: z.number(),
    skills: z.number(),
    education: z.number(),
    resumeQuality: z.number(),
  }),
});

export type ResumeAnalysis = z.infer<
  typeof ResumeAnalysisSchema
>;