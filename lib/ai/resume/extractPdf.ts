import { extractText } from "unpdf";

export async function extractPdf(
  file: File
): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();

  const { text } = await extractText(
    new Uint8Array(arrayBuffer)
  );

  // unpdf returns an array of page strings
  if (Array.isArray(text)) {
    return text.join("\n\n").trim();
  }

  // Fallback in case a future version returns a string
  return String(text).trim();
}