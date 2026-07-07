interface FinalAssessmentProps {
  assessment: string;
}

export default function FinalAssessment({
  assessment,
}: FinalAssessmentProps) {
  return (
    <section className="mt-8 rounded-2xl border border-indigo-300 bg-indigo-50 px-10 py-8 shadow-sm">
      <h2 className="font-ibm text-4xl font-semibold text-slate-900">
        Overall Impression
      </h2>

      {/* Hiring Manager Mindset */}

      <div className="mt-7 rounded-2xl border border-indigo-300 bg-indigo-100 p-6">
        <h3 className="font-ibm text-xl font-semibold text-slate-900">
          💡 How Hiring Managers Think
        </h3>

        <p className="mt-3 text-lg leading-8 text-slate-700">
          Hiring managers evaluate the overall evidence rather than focusing
          on a single strength or weakness. This assessment follows that
          same balanced approach, combining your resume, the job
          description, and the additional information you shared.
        </p>
      </div>

      {/* Final Assessment */}

      <div className="mt-6 rounded-2xl border border-white bg-white p-8 shadow-md">
        <h3 className="mb-4 font-ibm text-2xl font-semibold text-slate-900">
          Your Assessment
        </h3>

        <p className="text-xl leading-9 text-slate-800">
          {assessment}
        </p>
      </div>

      {/* Remember */}

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-100 p-6">
        <h3 className="font-semibold text-slate-900">
          Remember
        </h3>

        <p className="mt-3 text-lg leading-8 text-slate-700">
          Jobhunter is designed to help you make informed application
          decisions—not make them for you. Consider this assessment
          alongside your own experience, career goals, and interest in the
          role.
        </p>
      </div>
    </section>
  );
}