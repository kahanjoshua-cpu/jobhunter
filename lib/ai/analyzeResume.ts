import { anthropic } from "./anthropic";
import { AI_CONFIG } from "./config";
import { resumeAnalysisPrompt } from "./prompts/resumeAnalysis";
import { parseClaudeJson } from "./parsers/parseClaudeJson";
import { ResumeAnalysisSchema } from "./schemas/resumeAnalysis";

interface AnalyzeResumeParams {
  resume: string;
  jobDescription: string;
}

export async function analyzeResume({
  resume,
  jobDescription,
}: AnalyzeResumeParams) {
  const prompt = `
${resumeAnalysisPrompt}

RESUME:

${resume}

JOB DESCRIPTION:

${jobDescription}
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
  console.log("PARSED CLAUDE RESPONSE:");
console.log(parsed);

  return ResumeAnalysisSchema.parse(parsed);
}