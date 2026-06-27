export default function Hero() {
  return (
    <main className="bg-[#F7F8FC]">
      <section className="mx-auto max-w-7xl px-8 py-6">

<div className="grid items-start gap-8 lg:grid-cols-2">

          {/* LEFT COLUMN */}

          <div className="pt-2">

            <h1 className="text-6xl font-bold leading-none tracking-tight">
              Know Before
              <br />
              You Apply
              <span className="text-indigo-600">.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              Make informed application decisions so you can focus your time
              and energy on the opportunities{" "}
              <span className="font-semibold text-indigo-600">
                most likely
              </span>{" "}
              to move your job search forward.
            </p>

<div className="mt-8">

              <h2 className="text-2xl font-bold">
                How Jobhunter Works
              </h2>

              <div className="mt-6 space-y-5">

                {/* STEP 1 */}

                <div className="flex gap-4">

                  <div className="flex flex-col items-center">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                      1
                    </div>

                    <div className="mt-2 h-10 w-px bg-gray-300"></div>

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

                {/* STEP 2 */}

                <div className="flex gap-4">

                  <div className="flex flex-col items-center">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                      2
                    </div>

                    <div className="mt-2 h-10 w-px bg-gray-300"></div>

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

                {/* STEP 3 */}

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

          </div>

          {/* RIGHT COLUMN */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="text-2xl font-bold">
              Analyze a Job
            </h2>

            <p className="mt-2 text-gray-600">
              Upload your resume and paste the job description below.
            </p>

            <div className="mt-8">

              <label className="text-sm font-medium text-gray-700">
                Resume
              </label>

              <div className="mt-2 flex h-28 items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50">

                <div className="text-center">

                  <div className="text-4xl">
                    📄
                  </div>

                  <p className="mt-3 font-semibold">
                    Drag & Drop your resume
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    PDF or DOCX
                  </p>

                </div>

              </div>

            </div>
                        <div className="mt-8">

              <label className="text-sm font-medium text-gray-700">
                Job Description
              </label>

              <textarea
                rows={6}
                placeholder="Paste the job description here..."
                className="mt-2 w-full rounded-2xl border border-gray-300 p-4 text-gray-700 outline-none transition focus:border-indigo-600"
              />

            </div>

            <button className="mt-8 w-full rounded-xl bg-indigo-600 py-4 text-lg font-semibold text-white transition hover:bg-indigo-700">
              Analyze Match
            </button>

          </div>

        </div>

        {/* FEEDBACK */}

        <div className="mt-12 rounded-3xl border border-indigo-100 bg-indigo-50 px-8 py-6">

          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

            <div>

              <h3 className="text-lg font-semibold text-gray-900">
                Questions or feedback?
              </h3>

              <p className="mt-1 text-gray-600">
                Jobhunter is actively being built. I'd love to hear your ideas,
                suggestions, or anything that would improve your experience.
              </p>

            </div>

            <a
              href="/feedback"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Leave Feedback
            </a>

          </div>

        </div>

      </section>
    </main>
  );
}