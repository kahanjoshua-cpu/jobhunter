export default function QualificationBreakdown() {
  return (
    <section className="overflow-hidden rounded-3xl bg-white shadow-lg">

      <div className="h-2 bg-green-500" />

      <div className="p-8">

        <h2 className="text-2xl font-bold">
          🎯 Why You Match This Role
        </h2>

        <p className="mt-2 text-gray-600">
          These are the strongest connections we found between your resume and this job description.
        </p>

        <div className="mt-8 space-y-8">

          <div>
            <h3 className="text-lg font-semibold">
              📚 Curriculum Development
            </h3>

            <p className="mt-2 text-gray-600">
              Your experience designing instructional materials closely aligns with one of this role's primary responsibilities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              🤝 Cross-Functional Collaboration
            </h3>

            <p className="mt-2 text-gray-600">
              Your resume highlights experience working across multiple teams, which is emphasized throughout the job description.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              🎓 Education Expertise
            </h3>

            <p className="mt-2 text-gray-600">
              Your background in education strongly supports the core responsibilities of this position.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}