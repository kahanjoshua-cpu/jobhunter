"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ClipboardList,
  FileText,
  Star,
  UploadCloud,
  CheckCircle2,
} from "lucide-react";

export default function UploadCard() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const canContinue =
    resumeFile !== null &&
    jobDescription.trim().length > 0;

  function handleBrowse() {
    fileInputRef.current?.click();
  }

  function handleDrop(
    event: React.DragEvent<HTMLDivElement>
  ) {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) return;

    setResumeFile(file);
  }

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) return;

    setResumeFile(file);
  }

  async function handleSubmit() {
    if (!canContinue || !resumeFile) return;

    setIsLoading(true);

    sessionStorage.setItem(
      "jobDescription",
      jobDescription
    );

    const arrayBuffer =
      await resumeFile.arrayBuffer();

    const bytes = Array.from(
      new Uint8Array(arrayBuffer)
    );

    sessionStorage.setItem(
      "resumeFile",
      JSON.stringify({
        name: resumeFile.name,
        type: resumeFile.type,
        bytes,
      })
    );

    router.push("/loading");
  }

  return (
    <div className="overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur-sm">

      {/* Header */}

      <div className="bg-[#1E293B] px-10 py-8">
        <h2 className="text-3xl font-semibold text-white">
          Apply with{" "}
          <span className="text-indigo-500">
            confidence.
          </span>
        </h2>
      </div>

      {/* Content */}

      <div className="px-12 py-8">

        {/* STEP 1 */}

        <div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
              <FileText
                size={18}
                className="text-indigo-600"
              />
            </div>

            <p
              className="font-semibold text-slate-900"
              style={{
                fontFamily:
                  "'Plus Jakarta Sans', sans-serif",
              }}
            >
              1. Upload your resume
            </p>

          </div>
                    {!resumeFile ? (
            <div
              onClick={handleBrowse}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`group mt-5 flex h-40 cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-200 ${
                isDragging
                  ? "border-indigo-500 bg-indigo-100"
                  : "border-indigo-200 bg-white hover:border-indigo-400 hover:bg-indigo-50/30"
              }`}
            >
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white transition-transform duration-200 group-hover:scale-110">
                  <UploadCloud
                    size={28}
                    className="text-indigo-500"
                  />
                </div>

                <p className="mt-4 font-medium text-slate-900">
                  Choose a file or drag and drop
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  PDF, DOCX (Max 5MB)
                </p>
              </div>
            </div>
          ) : (
            <div
              onClick={handleBrowse}
              className="group mt-5 flex h-40 cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50/20 transition-all duration-200 hover:border-indigo-400 hover:bg-indigo-50/40"
            >
<div className="mt-6 text-center">
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle2
                    size={30}
                    className="text-emerald-600"
                  />
                </div>

<p className="mt-1.5 break-all text-sm text-slate-600">
                  Resume uploaded
                </p>

                <p className="mt-2 break-all text-sm text-slate-600">
                  {resumeFile.name}
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBrowse();
                  }}
                  className="mt-5 rounded-full border border-indigo-200 bg-white px-5 py-2 text-sm font-semibold text-indigo-600 transition hover:border-indigo-300 hover:bg-indigo-50"
                >
                  Replace Resume
                </button>
              </div>
            </div>
          )}

        </div>

        {/* STEP 2 */}

        <div className="mt-10">

          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
              <ClipboardList
                size={18}
                className="text-indigo-600"
              />
            </div>

            <p
              className="font-semibold text-slate-900"
              style={{
                fontFamily:
                  "'Plus Jakarta Sans', sans-serif",
              }}
            >
              2. Paste a job description
            </p>

          </div>

          <textarea
            rows={6}
            value={jobDescription}
            onChange={(e) =>
              setJobDescription(e.target.value)
            }
            placeholder="Paste the full job description here..."
            className="mt-5 w-full rounded-2xl border border-slate-200 p-5 text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

        </div>

       {/* STEP 3 */}

<div className="mt-10">

  <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
              <Star
                size={18}
                className="text-indigo-600"
              />
            </div>

            <p
              className="font-semibold text-slate-900"
              style={{
                fontFamily:
                  "'Plus Jakarta Sans', sans-serif",
              }}
            >
              3. Get your Match Score & recommendation
            </p>

          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canContinue || isLoading}
            className={`mt-5 w-full rounded-xl py-4 text-lg font-semibold transition-all duration-200 ${
              canContinue && !isLoading
                ? "bg-indigo-600 text-white hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg active:translate-y-0"
                : "cursor-not-allowed bg-indigo-300 text-white"
            }`}
          >
            {isLoading
              ? "Preparing your recommendation..."
              : "Get My Recommendation →"}
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            Recommendations are designed to support your
            judgment, not replace it.
          </p>

        </div>

      </div>

    </div>
  );
}