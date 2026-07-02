"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function MatchScoreModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-slate-200 bg-sky-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-8 py-5 text-left transition hover:bg-sky-100"
      >
        <div className="flex items-center gap-3">
          <HelpCircle className="h-5 w-5 text-slate-500" />

          <span className="font-medium text-slate-800">
            How was my match score determined?
          </span>
        </div>

        {open ? (
          <ChevronUp className="h-5 w-5 text-slate-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-500" />
        )}
      </button>

      {open && (
        <div className="border-t border-slate-200 bg-sky-50 px-8 py-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Skills & Technologies
              </h3>

              <p className="leading-7 text-slate-600">
                We compare the technical skills, software,
                certifications, and tools requested by the employer
                against the experience demonstrated on your resume.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Relevant Experience
              </h3>

              <p className="leading-7 text-slate-600">
                We evaluate how closely your work history,
                accomplishments, and responsibilities align with the
                position's requirements.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Keywords & Qualifications
              </h3>

              <p className="leading-7 text-slate-600">
                We identify important keywords, certifications,
                education, and qualifications listed in the job
                description and compare them against your resume.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Overall Fit
              </h3>

              <p className="leading-7 text-slate-600">
                Your final score combines skills, experience,
                qualifications, and overall resume alignment to
                estimate how competitive your application appears for
                this specific role.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}