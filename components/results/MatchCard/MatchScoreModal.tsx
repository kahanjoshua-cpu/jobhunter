"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Info,
} from "lucide-react";

export default function MatchScoreModal() {
  const [open, setOpen] = useState(false);

  return (
<div className="border-t border-slate-200 bg-sky-50">
      <button
        onClick={() => setOpen(!open)}
className="flex w-full items-center justify-between px-10 py-5 transition hover:bg-sky-100"      >

        <div className="flex items-center gap-3">

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">

            <Info className="h-5 w-5 text-blue-600" />

          </div>

          <span
            className="font-semibold text-slate-700"
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
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

        <div className="border-t border-slate-200 bg-sky-50 px-10 py-8">

          <div className="grid gap-8 md:grid-cols-2">

            <div>

              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Skills & Technologies
              </h3>

              <p className="leading-7 text-slate-600">
                We compare the technical skills,
                software, certifications, and
                tools requested by the employer
                against the experience shown
                on your resume.
              </p>

            </div>

            <div>

              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Relevant Experience
              </h3>

              <p className="leading-7 text-slate-600">
                We evaluate how closely your
                work history, accomplishments,
                and responsibilities align
                with the position.
              </p>

            </div>

            <div>

              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Keywords & Qualifications
              </h3>

              <p className="leading-7 text-slate-600">
                We compare important keywords,
                certifications, education,
                and qualifications requested
                in the job posting.
              </p>

            </div>

            <div>

              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Overall Fit
              </h3>

              <p className="leading-7 text-slate-600">
                Your final score combines all
                of these factors to estimate
                how competitive your resume
                is for this opportunity.
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}