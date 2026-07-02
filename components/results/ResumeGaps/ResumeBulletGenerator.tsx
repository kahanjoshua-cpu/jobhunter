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
    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">

      <h3 className="text-lg font-semibold text-slate-900">
        ✨ Here's a resume bullet we recommend
      </h3>

      <p className="mt-2 leading-7 text-slate-700">
        Feel free to edit the wording before adding it to your resume.
      </p>

      <textarea
        rows={5}
        value={editedBullet}
        onChange={(e) =>
          setEditedBullet(e.target.value)
        }
        className="mt-5 w-full rounded-xl border border-emerald-200 bg-white p-4 leading-7 text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
      />

      <div className="mt-6 flex flex-wrap gap-3">

        <button
          onClick={onAccept}
          className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
        >
          I'll use this bullet
        </button>

        <button
          onClick={copyBullet}
          className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
        >
          {copied ? (
            <>
              <Check className="h-5 w-5 text-emerald-600" />
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
          className="rounded-xl border border-blue-300 bg-white px-6 py-3 font-medium text-blue-700 transition hover:bg-blue-50"
        >
          Generate Another Version
        </button>

      </div>

    </div>
  );
}