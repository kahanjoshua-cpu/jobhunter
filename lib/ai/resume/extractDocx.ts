import mammoth from "mammoth";

export async function extractDocx(
  file: File
): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();

  const result = await mammoth.extractRawText({
    arrayBuffer,
  });

  return result.value.trim();
}