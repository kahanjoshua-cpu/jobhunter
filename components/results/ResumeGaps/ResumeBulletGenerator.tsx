"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

interface ResumeBulletGeneratorProps {
  bullet: string;
  onAccept: () => void;
  onRegenerate: () => void;
  onEdit: () => void;
}

export default function ResumeBulletGenerator({
  bullet,
  onAccept,
  onRegenerate,
}: ResumeBulletGeneratorProps) {
  const [editedBullet, setEditedBullet] =
    useState(bullet);

  const [copied, setCopied] =
    useState(false);

  useEffect(() => {
    setEditedBullet(bullet);
  }, [bullet]);

  async function copyBullet() {
    await navigator.clipboard.writeText(
      editedBullet
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="rounded-2xl border-2 border-blue-400 bg-blue-100 p-6">

      <div className="flex items-start gap-3">

  <div className="w-8 pt-1 text-2xl">
    ✨
  </div>

  <div>
    <h3 className="font-ibm text-3xl font-semibold text-slate-900">
      Here's a resume bullet we recommend
    </h3>

    <p className="font-ibm mt-3 text-xl leading-8 text-slate-800">
      Feel free to edit the wording before adding it to your resume.
    </p>
  </div>

</div>
      <textarea
        rows={5}
        value={editedBullet}
        onChange={(e) =>
          setEditedBullet(e.target.value)
        }
        className="
          mt-6
          w-full
          rounded-lg
          border-2
          border-blue-400
          bg-blue-50
          px-4
          py-4
          leading-8
          text-slate-700
          shadow-md
          transition
          focus:border-indigo-600
          focus:ring-4
          focus:ring-indigo-200
          focus:outline-none
        "
      />

      <div className="mt-6 flex flex-wrap gap-4">

        <button
          onClick={onAccept}
          className="rounded-xl bg-indigo-700 px-7 py-4 text-lg font-medium text-white transition hover:bg-indigo-800"
        >
          I'll use this bullet
        </button>

        <button
          onClick={copyBullet}
          className="flex items-center gap-2 rounded-xl bg-indigo-500 px-7 py-4 text-lg font-medium text-white transition hover:bg-indigo-600"
        >
          {copied ? (
            <>
              <Check className="h-5 w-5 text-white" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-5 w-5" />
              Copy Bullet
            </>
          )}
        </button>

        <button
          onClick={onRegenerate}
          className="rounded-xl border-2 border-indigo-300 bg-indigo-100 px-7 py-4 text-lg font-medium text-indigo-800 transition hover:bg-indigo-200"
        >
          Generate Another Version
        </button>

      </div>

    </div>
  );
}