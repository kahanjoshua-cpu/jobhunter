export default function HowItWorks() {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">
          How Jobhunter Works
        </h2>

        <div className="mt-6 space-y-5">

          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                1
              </div>
              <div className="mt-2 h-10 w-px bg-gray-300" />
            </div>

            <div>
              <h3 className="font-semibold">
                Upload your resume
              </h3>
              <p className="mt-1 text-gray-600">
                Start with the resume you'd use today.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                2
              </div>
              <div className="mt-2 h-10 w-px bg-gray-300" />
            </div>

            <div>
              <h3 className="font-semibold">
                Paste the job description
              </h3>
              <p className="mt-1 text-gray-600">
                Compare your experience against the role.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
              3
            </div>

            <div>
              <h3 className="font-semibold">
                Receive your recommendation
              </h3>
              <p className="mt-1 text-gray-600">
                Understand whether the opportunity is worth pursuing.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-4 shadow">
        <p className="font-semibold text-gray-900">
          No ads. No gimmicks.
        </p>

        <p className="mt-1 text-gray-600">
          Just better application decisions.
        </p>
      </div>
    </>
  );
}
