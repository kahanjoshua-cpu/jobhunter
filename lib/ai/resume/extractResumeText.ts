import { extractPdf } from "./extractPdf";
import { extractDocx } from "./extractDocx";

export async function extractResumeText(
  file: File
): Promise<string> {
  switch (file.type) {
    case "application/pdf":
      return extractPdf(file);

    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return extractDocx(file);

    case "application/msword":
      throw new Error(
        "Legacy .doc files are not supported. Please upload a .docx or PDF."
      );

    default:
      throw new Error(
        "Unsupported file type. Please upload a PDF or DOCX resume."
      );
  }
}