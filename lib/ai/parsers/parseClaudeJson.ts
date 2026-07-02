export function parseClaudeJson(text: string) {
  const cleaned = text
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    throw new Error(
      `Claude returned invalid JSON.\n\nResponse:\n${cleaned}`
    );
  }
}