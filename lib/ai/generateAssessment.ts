import { anthropic } from "./anthropic";
import { AI_CONFIG } from "./config";
import { assessmentPrompt } from "@/lib/ai/prompts/assessment";
import { parseClaudeJson } from "./parsers/parseClaudeJson";
import { assessmentSchema } from "./schemas/assessment";

interface GenerateAssessmentParams {
  resume: string;
  jobDescription: string;
  matchAnalysis: unknown;
  resumeGapResponses: unknown;
  acceptedResumeBullets: unknown;
}

export async function generateAssessment({
  resume,
  jobDescription,
  matchAnalysis,
  resumeGapResponses,
  acceptedResumeBullets,
}: GenerateAssessmentParams) {
  const prompt = `
${assessmentPrompt}

RESUME:

${resume}

JOB DESCRIPTION:

${jobDescription}

MATCH ANALYSIS:

${JSON.stringify(matchAnalysis, null, 2)}

RESUME GAP RESPONSES:

${JSON.stringify(resumeGapResponses, null, 2)}

GENERATED RESUME BULLETS:

${JSON.stringify(acceptedResumeBullets, null, 2)}
`;

  const response = await anthropic.messages.create({
    model: AI_CONFIG.model,
    max_tokens: AI_CONFIG.maxTokens,
    temperature: AI_CONFIG.temperature,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const text = response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\n");

  if (!text) {
    throw new Error("Claude did not return any text.");
  }

  const parsed = parseClaudeJson(text);

  console.log("ASSESSMENT RESPONSE:");
  console.log(parsed);

  return assessmentSchema.parse(parsed);
}