import { anthropic } from "./anthropic";
import { AI_CONFIG } from "./config";
import { resumeBulletPrompt } from "./prompts/resumeBullet";
import { parseClaudeJson } from "./parsers/parseClaudeJson";
import { ResumeBulletSchema } from "./schemas/resumeBullet";

interface GenerateResumeBulletParams {
  skill: string;
  usedWhere: string;
  years: string;
  description: string;
  mode?: "original" | "alternative";
}

export async function generateResumeBullet({
  skill,
  usedWhere,
  years,
  description,
  mode = "original",
}: GenerateResumeBulletParams) {
  const prompt = `
${resumeBulletPrompt}

Missing Skill:

${skill}

Where it was used:

${usedWhere}

Years of experience:

${years}

Description:

${description}

${
  mode === "alternative"
    ? `
Generate an ALTERNATIVE version of the resume bullet.

Requirements:

- Keep every fact identical.
- Change the wording.
- Change the sentence structure.
- Highlight a different strength when possible.
- Do not reuse the previous phrasing.
`
    : ""
}
`;

  const response = await anthropic.messages.create({
    model: AI_CONFIG.model,
    max_tokens: 1000,
    temperature: mode === "alternative" ? 0.7 : 0.4,
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

  return ResumeBulletSchema.parse(parsed);
}