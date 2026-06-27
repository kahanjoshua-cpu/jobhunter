export default function ApplicationSuggestions() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">
      <h2 className="text-2xl font-bold">
        Ways to Strengthen Your Application
      </h2>

      <p className="mt-2 text-gray-600">
        These suggestions could improve your chances before you submit your application.
      </p>

      <div className="mt-8 space-y-6">

        <div>
          <h3 className="font-semibold text-blue-700">
            Add measurable accomplishments
          </h3>

          <p className="mt-1 text-gray-600">
            Include metrics that demonstrate your impact, such as curriculum adoption, student outcomes, or project milestones.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-blue-700">
            Highlight leadership experience
          </h3>

          <p className="mt-1 text-gray-600">
            Emphasize examples where you led initiatives, mentored colleagues, or coordinated projects.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-blue-700">
            Tailor your resume summary
          </h3>

          <p className="mt-1 text-gray-600">
            Adjust your professional summary so it reflects the language and priorities of this specific role.
          </p>
        </div>

      </div>
    </section>
  );
}