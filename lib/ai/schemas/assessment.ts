import { z } from "zod";

export const assessmentSchema = z.object({
  strengths: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  ),

  strengthenApplication: z.array(
    z.object({
      title: z.string(),
      finding: z.string(),
      recommendation: z.string(),
    })
  ),

  finalAssessment: z.string(),

  interviewQuestions: z.array(
    z.object({
      question: z.string(),
      reason: z.string(),
    })
  ),
});

export type Assessment = z.infer<
  typeof assessmentSchema
>;